import { useEffect, useRef, useState } from "react";
import sendIcon from "../assets/sendIcon.png";
import { getBuildEnvironment } from "../utils/environment";
import { postSlack } from "../apiHooks/useSendSlack";
import { QabotProps } from "../types";
import { useToastStore } from "../stores/toastStore";

export default function Qabot({ env }: QabotProps) {
  const { setShowToast } = useToastStore();
  const [lastTime, setLastTime] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isShow, setIsShow] = useState(false);
  const [qaMessage, setQaMessage] = useState("");
  const [qaElementInfo, setQaElementInfo] = useState({
    pathName: "",
    tagName: "",
    className: "",
    id: "",
    textContent: "",
  });
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handleContextmenu = (e: MouseEvent) => {
      if (getBuildEnvironment(env) === "production") {
        return;
      }

      const currentTime = Date.now();
      const diffTime = currentTime - lastTime;

      if (diffTime < 1000) {
        e.preventDefault();
        setIsShow(true);
        setPosition({ x: e.pageX, y: e.pageY });

        const targetElement = e.target as HTMLElement;
        setQaElementInfo({
          pathName: targetElement.baseURI,
          tagName: targetElement.tagName,
          className: targetElement.className,
          id: targetElement.id,
          textContent: targetElement.textContent ?? "",
        });
      }

      setLastTime(currentTime);
    };

    const handleFormOutsideClick = (e: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(e.target as Node)) {
        setIsShow(false);
        setQaMessage("");
      }
    };

    const handleEscKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsShow(false);
        setQaMessage("");
      }
    };

    window.addEventListener("contextmenu", handleContextmenu);
    window.addEventListener("click", handleFormOutsideClick);
    window.addEventListener("keydown", handleEscKeydown);

    return () => {
      window.removeEventListener("contextmenu", handleContextmenu);
      window.removeEventListener("click", handleFormOutsideClick);
      window.removeEventListener("keydown", handleEscKeydown);
    };
  }, [lastTime, env]);

  const handleSendSlack = async () => {
    try {
      const response = await postSlack({ qaMessage, qaElementInfo });
      console.log("Slack QA 전송 성공:", response);
      setIsShow(false);
      setShowToast("Slack으로 QA 전송 성공!", "success");
    } catch (error) {
      console.error("Slack QA 전송 실패:", error);
      setShowToast(`Slack으로 QA 전송 실패:${error}`, "error");
    }
  };

  return (
    <>
      {isShow ? (
        <form
          ref={formRef}
          onSubmit={(e) => e.preventDefault()}
          className="absolute bg-white z-50 text-black rounded-[10px] text-[14px] p-[15px] flex flex-col border"
          style={{ left: `${position.x}px`, top: `${position.y}px` }}
        >
          <textarea
            name="qaTextArea"
            id="qaTextArea"
            placeholder="QA 내용을 입력해주세요"
            onChange={(e) => setQaMessage(e.target.value)}
            className="w-[200px] h-[100px] rounded-[10px] outline-none resize-none"
          />
          <button onClick={handleSendSlack} className="ml-auto">
            <img src={sendIcon} alt="전송 아이콘" width={20} height={20} />
          </button>
        </form>
      ) : null}
    </>
  );
}
