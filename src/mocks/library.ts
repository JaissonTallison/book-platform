import type { LibraryEntry } from "@/types/dashboard";

export const mockLibraryEntries: LibraryEntry[] = [
  {
    userId: "usr_reader_1",
    bookId: "bk_guardiao",
    registeredAt: "2026-06-01T09:00:00.000Z",
    completedChapterIds: ["bk_guardiao_ch1", "bk_guardiao_ch2", "bk_guardiao_ch3"],
  },
  {
    userId: "usr_reader_1",
    bookId: "bk_ciencia",
    registeredAt: "2026-06-20T14:30:00.000Z",
    completedChapterIds: ["bk_ciencia_ch1"],
  },
  {
    userId: "usr_reader_1",
    bookId: "bk_contos",
    registeredAt: "2026-07-01T18:15:00.000Z",
    completedChapterIds: [],
  },
];
