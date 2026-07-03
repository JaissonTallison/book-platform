import { mockUsers } from "@/mocks/users";
import type { User, UserRole } from "@/types/user";

const SESSION_KEY = "book-platform:session";
const MOCK_LATENCY_MS = 600;

export class AuthError extends Error {
  code: "INVALID_CREDENTIALS" | "EMAIL_TAKEN";

  constructor(code: "INVALID_CREDENTIALS" | "EMAIL_TAKEN", message: string) {
    super(message);
    this.name = "AuthError";
    this.code = code;
  }
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function toPublicUser(record: (typeof mockUsers)[number]): User {
  return {
    id: record.id,
    name: record.name,
    email: record.email,
    role: record.role,
    avatarUrl: record.avatarUrl,
    createdAt: record.createdAt,
  };
}

function persistSession(user: User) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
}

export async function login(email: string, password: string): Promise<User> {
  await delay(MOCK_LATENCY_MS);

  const record = mockUsers.find(
    (candidate) => candidate.email.toLowerCase() === email.toLowerCase()
  );

  if (!record || record.password !== password) {
    throw new AuthError("INVALID_CREDENTIALS", "Email ou senha inválidos.");
  }

  const user = toPublicUser(record);
  persistSession(user);
  return user;
}

export async function register(
  name: string,
  email: string,
  password: string,
  role: UserRole
): Promise<User> {
  await delay(MOCK_LATENCY_MS);

  const alreadyExists = mockUsers.some(
    (candidate) => candidate.email.toLowerCase() === email.toLowerCase()
  );

  if (alreadyExists) {
    throw new AuthError("EMAIL_TAKEN", "Este email já está cadastrado.");
  }

  const record = {
    id: `usr_${Date.now()}`,
    name,
    email,
    password,
    role,
    createdAt: new Date().toISOString(),
  };
  mockUsers.push(record);

  const user = toPublicUser(record);
  persistSession(user);
  return user;
}

export async function logout(): Promise<void> {
  localStorage.removeItem(SESSION_KEY);
}

export function getSession(): User | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? (JSON.parse(raw) as User) : null;
  } catch {
    return null;
  }
}
