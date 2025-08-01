import { create } from "zustand";
import type { CreateNote, UserProfile } from "../types";
type LoginState = {
  accessToken: string;
  setAccessToken: (accessToken: string) => void;
};
export const useloginStore = create<LoginState>((set) => ({
  accessToken: "",
  setAccessToken: (accessToken: string) => set({ accessToken }),
}));
type ProfileState = {
  profile: UserProfile;
  setProfile: (profile: UserProfile) => void;
};
const initalProfile: UserProfile = {
  email: "",
  lastName: "",
  firstName: "",
  dateJoined: "",
  lastProfileUpdate: "",
  avatar: "",
  username: "",
};
export const useProfileStore = create<ProfileState>((set) => ({
  profile: initalProfile,
  setProfile: (profile: UserProfile) => set({ profile: { ...profile } }),
}));
type useSelectedNote = {
  note: CreateNote;
  setNote: (note: CreateNote) => void;
  initalContent: string;
  setInitialContent: (content: string) => void;
};
export const useNoteStore = create<useSelectedNote>((set) => ({
  note: { title: "", synopsis: "", content: "" },
  setNote: (note: CreateNote) => set({ note }),
  initalContent: "",
  setInitialContent: (content: string) => set({ initalContent: content }),
}));
