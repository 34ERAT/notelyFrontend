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
