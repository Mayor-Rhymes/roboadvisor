import { create } from "zustand";
import { User } from "../libs/types";

interface UserStoreState {
  user: User | null;
  signup: (data: User) => void;
  logout: () => void;
}

export const userStore = create<UserStoreState>()((set) => ({
  user: null,
  signup: (data: User) =>
    set((state) => {
      return {
        ...state,
        user: data,
      };
    }),

  logout: () => set((state) => ({ ...state, user: null })),
}));
