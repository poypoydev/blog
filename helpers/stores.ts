import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

type StageType = {
  stage: number;
  setStage: (by: number) => void;

  resetStage: () => void;
};

export const useCurrentStage = create<StageType>((set) => ({
  stage: 0,
  setStage: (by) => set((state) => ({ stage: by })),

  resetStage: () => set({ stage: 0 }),
}));
