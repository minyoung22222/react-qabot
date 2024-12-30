import { create } from "zustand";

interface ToastState {
  toastMessage: string;
  toastType: "success" | "error";
  isToastVisible: boolean;
  setShowToast: (message: string, type: "success" | "error") => void;
  setHideToast: () => void;
}

export const useToastStore = create<ToastState>((set) => ({
  toastMessage: "",
  toastType: "success",
  isToastVisible: false,
  setShowToast: (message, type) => set({ toastMessage: message, toastType: type, isToastVisible: true }),
  setHideToast: () => set({ isToastVisible: false }),
}));
