export interface QabotProps {
  env?: "react" | "next" | "vite" | "";
  qaTitle?: string;
}

export interface ElementInfo {
  pathName: string;
  tagName: string;
  className: string;
  id: string;
  textContent: string;
}
