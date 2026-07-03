import type { Book } from "./book";

export interface LibraryEntry {
  userId: string;
  bookId: string;
  registeredAt: string;
  completedChapterIds: string[];
}

export interface LibraryBook {
  book: Book;
  registeredAt: string;
  completedChapterIds: string[];
  progress: number;
}
