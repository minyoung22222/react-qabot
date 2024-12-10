import Qabot from "./components/Qabot";

function App({ env }: { env?: "react" | "next" | "vite" }) {
  return (
    <>
      <Qabot env={env || "react"} />
    </>
  );
}

export default App;
