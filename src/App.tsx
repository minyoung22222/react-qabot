import CustomCursor from "./components/CustomCursor";
import Qabot from "./components/Qabot";
import QaButton from "./components/QaButton";
import Toast from "./components/Toast";
import { useQaModeStore } from "./stores/qaModeStore";
import "./styles/gloabal.css";
import { QabotProps } from "./types";

function App(props: QabotProps) {
  const { qaMode } = useQaModeStore();

  return (
    <div>
      <Toast />
      {qaMode && <CustomCursor />}
      <Qabot env={props.env ?? ""} />
      <QaButton />
    </div>
  );
}

export default App;
