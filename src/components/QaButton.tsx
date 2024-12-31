import { useQaModeStore } from "../stores/qaModeStore";
import { QabotProps } from "../types";
import { getBuildEnvironment } from "../utils/environment";

export default function QaButton({ env }: QabotProps) {
  const { setActivateQaMode } = useQaModeStore();

  if (getBuildEnvironment(env) === "production") {
    return;
  }

  return (
    <button
      onClick={(e) => {
        setActivateQaMode();
        e.stopPropagation();
      }}
      className="fixed right-[30px] bottom-[30px]"
    >
      <div className="speech-bubble flex justify-center items-center text-white hover:scale-125">QA</div>
    </button>
  );
}
