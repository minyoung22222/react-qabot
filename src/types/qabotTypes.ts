export interface QabotProps {
  env?: "react" | "next" | "vite" | "";
}

export interface ElementInfo {
  pathName: string;
  tagName: string;
  className: string;
  id: string;
  textContent: string;
}
