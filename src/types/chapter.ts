export type ChapterResourceType = "video" | "audio" | "quiz" | "pdf" | "image";

export interface ChapterResource {
  id: string;
  type: ChapterResourceType;
  title: string;
}

export interface Chapter {
  id: string;
  bookId: string;
  order: number;
  title: string;
  description: string;
  resources: ChapterResource[];
}
