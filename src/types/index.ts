export type CreateNote = {
  title: string;
  synopsis: string;
  content: string;
};
export type NoteListItem = {
  id: string;
  title: string;
  synopsis: string;
  dateCreated: string;
  lastUpdate: string;
};
export type UserProfile = {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  avatar: string;
  dateJoined: string;
  lastProfileUpdate: string;
};
