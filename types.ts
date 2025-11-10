
export interface ListItem {
  id: number;
  text: string;
}

export interface Comment {
  id: number;
  author: string;
  text: string;
}

export interface ProfileData {
  name: string;
  grade: string;
  personalPhoto: string;
  achievements: ListItem[];
  skills: ListItem[];
  favoriteSubjects: ListItem[];
  comments: Comment[];
}
