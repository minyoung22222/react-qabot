import Qabot from "./components/Qabot";
import "./styles/gloabal.css";
import { QabotProps } from "./types";

function App(props: QabotProps) {
  return (
    <div>
      <Qabot env={props.env ?? ""} />
    </div>
  );
}

export default App;
