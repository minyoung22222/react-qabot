import Qabot from "./components/Qabot";
import Toast from "./components/Toast";
import "./styles/gloabal.css";
import { QabotProps } from "./types";

function App(props: QabotProps) {
  return (
    <div>
      <Toast />
      <Qabot env={props.env ?? ""} />
    </div>
  );
}

export default App;
