import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");

    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return <div id="custom-cursor"></div>;
}
