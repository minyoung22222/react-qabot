import { create } from "zustand";

interface QaModeStore {
  qaMode: boolean;
  setActivateQaMode: () => void;
  setDeactivateQaMode: () => void;
}

export const useQaModeStore = create<QaModeStore>((set) => ({
  qaMode: false,
  setActivateQaMode: () => set({ qaMode: true }),
  setDeactivateQaMode: () => set({ qaMode: false }),
}));
