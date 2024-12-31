export interface QabotProps {
  env?: "react" | "next" | "vite" | "";
  qaTitle?: string;
  includePathName?: boolean;
  includeTagName?: boolean;
  includeId?: boolean;
  includeClassName?: boolean;
  includeTextContent?: boolean;
  includeCreatedAt?: boolean;
}

export interface ElementInfo {
  pathName: string;
  tagName: string;
  className: string;
  id: string;
  textContent: string;
}
