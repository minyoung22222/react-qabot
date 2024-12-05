import { useEffect, useState } from "react";

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
      }

      setLastTime(currentTime);
    };

    window.addEventListener("contextmenu", handleContextmenu);

    return () => {
      window.removeEventListener("contextmenu", handleContextmenu);
    };
  }, [lastTime]);

  return (
    <div onClick={() => setIsShow(false)} className="h-screen">
      {isShow ? (
        <span className="text-red-400 absolute" style={{ left: `${position.x}px`, top: `${position.y}px` }}>
          Vite + React
        </span>
      ) : null}
    </div>
  );
}
