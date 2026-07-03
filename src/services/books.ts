import { mockBooks } from "@/mocks/books";
import { mockLibraryEntries } from "@/mocks/library";
import type { Book } from "@/types/book";
import type { LibraryBook, LibraryEntry } from "@/types/dashboard";

const LIBRARY_KEY_PREFIX = "book-platform:library:";
const MOCK_LATENCY_MS = 500;

export class BookError extends Error {
  code: "CODE_NOT_FOUND" | "ALREADY_REGISTERED" | "BOOK_NOT_FOUND";

  constructor(
    code: "CODE_NOT_FOUND" | "ALREADY_REGISTERED" | "BOOK_NOT_FOUND",
    message: string
  ) {
    super(message);
    this.name = "BookError";
    this.code = code;
  }
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function readEntries(userId: string): LibraryEntry[] {
  const key = `${LIBRARY_KEY_PREFIX}${userId}`;
  const raw = localStorage.getItem(key);

  if (raw === null) {
    const seeded = mockLibraryEntries.filter((entry) => entry.userId === userId);
    localStorage.setItem(key, JSON.stringify(seeded));
    return seeded;
  }

  try {
    return JSON.parse(raw) as LibraryEntry[];
  } catch {
    return [];
  }
}

function writeEntries(userId: string, entries: LibraryEntry[]) {
  localStorage.setItem(`${LIBRARY_KEY_PREFIX}${userId}`, JSON.stringify(entries));
}

function toLibraryBook(entry: LibraryEntry, book: Book): LibraryBook {
  const progress =
    book.chapters.length === 0
      ? 0
      : Math.round(
          (entry.completedChapterIds.length / book.chapters.length) * 100
        );

  return {
    book,
    registeredAt: entry.registeredAt,
    completedChapterIds: entry.completedChapterIds,
    progress,
  };
}

export async function getLibrary(userId: string): Promise<LibraryBook[]> {
  await delay(MOCK_LATENCY_MS);

  const entries = readEntries(userId);

  return entries
    .map((entry) => {
      const book = mockBooks.find((candidate) => candidate.id === entry.bookId);
      return book ? toLibraryBook(entry, book) : null;
    })
    .filter((entry): entry is LibraryBook => entry !== null)
    .sort(
      (a, b) =>
        new Date(b.registeredAt).getTime() - new Date(a.registeredAt).getTime()
    );
}

export async function registerBookByCode(
  userId: string,
  code: string
): Promise<LibraryBook> {
  await delay(MOCK_LATENCY_MS);

  const normalizedCode = code.trim().toLowerCase();
  const book = mockBooks.find(
    (candidate) => candidate.code.toLowerCase() === normalizedCode
  );

  if (!book) {
    throw new BookError(
      "CODE_NOT_FOUND",
      "Código não encontrado. Verifique e tente novamente."
    );
  }

  const entries = readEntries(userId);

  if (entries.some((entry) => entry.bookId === book.id)) {
    throw new BookError(
      "ALREADY_REGISTERED",
      "Este livro já está na sua biblioteca."
    );
  }

  const entry: LibraryEntry = {
    userId,
    bookId: book.id,
    registeredAt: new Date().toISOString(),
    completedChapterIds: [],
  };

  writeEntries(userId, [...entries, entry]);
  return toLibraryBook(entry, book);
}

export async function getLibraryEntry(
  userId: string,
  bookId: string
): Promise<LibraryBook> {
  await delay(MOCK_LATENCY_MS);

  const book = mockBooks.find((candidate) => candidate.id === bookId);
  if (!book) {
    throw new BookError("BOOK_NOT_FOUND", "Livro não encontrado.");
  }

  const entries = readEntries(userId);
  const entry = entries.find((candidate) => candidate.bookId === bookId);
  if (!entry) {
    throw new BookError(
      "BOOK_NOT_FOUND",
      "Este livro ainda não está na sua biblioteca."
    );
  }

  return toLibraryBook(entry, book);
}

export async function toggleChapterCompletion(
  userId: string,
  bookId: string,
  chapterId: string
): Promise<LibraryBook> {
  await delay(MOCK_LATENCY_MS);

  const book = mockBooks.find((candidate) => candidate.id === bookId);
  if (!book) {
    throw new BookError("BOOK_NOT_FOUND", "Livro não encontrado.");
  }

  const entries = readEntries(userId);
  const entry = entries.find((candidate) => candidate.bookId === bookId);
  if (!entry) {
    throw new BookError(
      "BOOK_NOT_FOUND",
      "Este livro ainda não está na sua biblioteca."
    );
  }

  const isCompleted = entry.completedChapterIds.includes(chapterId);
  const updatedEntry: LibraryEntry = {
    ...entry,
    completedChapterIds: isCompleted
      ? entry.completedChapterIds.filter((id) => id !== chapterId)
      : [...entry.completedChapterIds, chapterId],
  };

  writeEntries(
    userId,
    entries.map((candidate) =>
      candidate.bookId === bookId ? updatedEntry : candidate
    )
  );

  return toLibraryBook(updatedEntry, book);
}
