import { create } from "zustand";
type LoginState = {
  accessToken: string;
  setAccessToken: (accessToken: string) => void;
};
export const useloginStore = create<LoginState>((set) => ({
  accessToken: "",
  setAccessToken: (accessToken: string) => set({ accessToken }),
}));
