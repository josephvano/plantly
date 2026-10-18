import AsyncStorage from "@react-native-async-storage/async-storage";
import { createJSONStorage, persist } from "zustand/middleware";
import { create } from "zustand/react";

type UserState = {
  hasFinishedOnboarding: boolean;
  toggleOnboarding: () => void;
};

export const useUserStore = create(
  persist<UserState>(
    (set) => ({
      hasFinishedOnboarding: false,
      toggleOnboarding: () =>
        set((state) => ({
          hasFinishedOnboarding: !state.hasFinishedOnboarding,
        })),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
