import { create } from "zustand";
import { User } from "../libs/types";

interface UserStoreState {
  user: User | null;
  signup: (data: User) => void;
  logout: () => void;
}

let userDetail: User;
const currentUser = localStorage.getItem("user");
if(currentUser != null){
    userDetail = JSON.parse(currentUser) as User;
}

export const userStore = create<UserStoreState>()((set) => ({
  user: userDetail,
  signup: (data: User) =>
    set((state) => {
      return {
        ...state,
        user: data,
      };
    }),

  logout: () => set((state) => ({ ...state, user: null })),
}));
