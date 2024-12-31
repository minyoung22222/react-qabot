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
      <Qabot
        env={props.env ?? ""}
        qaTitle={props.qaTitle}
        includePathName={props.includePathName ?? true}
        includeTagName={props.includeTagName ?? true}
        includeId={props.includeId ?? true}
        includeClassName={props.includeClassName ?? true}
        includeTextContent={props.includeTextContent ?? true}
        includeCreatedAt={props.includeCreatedAt ?? true}
      />
      <QaButton />
    </div>
  );
}

export default App;
