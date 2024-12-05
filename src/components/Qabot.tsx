import { useEffect, useState } from "react";
import sendIcon from "../assets/sendIcon.png";

export default function Qabot() {
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

  useEffect(() => {
    const handleContextmenu = (e: MouseEvent) => {
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

    window.addEventListener("contextmenu", handleContextmenu);

    return () => {
      window.removeEventListener("contextmenu", handleContextmenu);
    };
  }, [lastTime]);

  return (
    <div className="h-screen">
      {isShow ? (
        <form
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
          <button
            type="button"
            onClick={() => {
              console.log("qaMessage, ", qaMessage, qaElementInfo);
            }}
            className="ml-auto"
          >
            <img src={sendIcon} alt="전송 아이콘" width={20} height={20} />
          </button>
        </form>
      ) : null}
    </div>
  );
}
