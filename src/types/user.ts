export type UserRole = "reader" | "publisher" | "school" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
  createdAt: string;
}

export interface MockUserRecord extends User {
  password: string;
}
