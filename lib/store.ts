import { create } from "zustand/react";

type UserState = {
  hasFinishedOnboarding: boolean;
  toggleOnboarding: () => void;
};

export const useUserStore = create<UserState>((set) => ({
  hasFinishedOnboarding: false,
  toggleOnboarding: () =>
    set((state) => ({ hasFinishedOnboarding: !state.hasFinishedOnboarding })),
}));
