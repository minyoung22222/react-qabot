import { useEffect } from "react";
import { useToastStore } from "../stores/toastStore";

export default function Toast() {
  const { toastMessage, toastType, isToastVisible, setHideToast } = useToastStore();

  useEffect(() => {
    if (isToastVisible) {
      const toastTimer = setTimeout(() => {
        setHideToast();
      }, 4000);

      return () => {
        clearTimeout(toastTimer);
      };
    }
  }, [isToastVisible]);

  return (
    <>
      {isToastVisible && (
        <div className="fixed top-[30px] right-1/2 translate-x-1/2 rounded-2xl border p-[10px] bg-gray-600">
          <p className={`font-[600] ${toastType === "success" ? "text-green-300" : "text-red-300"}`}>{toastMessage}</p>
        </div>
      )}
    </>
  );
}
