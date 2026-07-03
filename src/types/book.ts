import type { Chapter } from "./chapter";

export interface Book {
  id: string;
  code: string;
  title: string;
  author: string;
  coverUrl: string;
  synopsis: string;
  chapters: Chapter[];
}
