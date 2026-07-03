import type { MockUserRecord } from "@/types/user";

export const mockUsers: MockUserRecord[] = [
  {
    id: "usr_reader_1",
    name: "Ana Leitora",
    email: "leitor@bookplatform.com",
    password: "leitor123",
    role: "reader",
    createdAt: "2026-01-10T12:00:00.000Z",
  },
  {
    id: "usr_publisher_1",
    name: "Editora Prisma",
    email: "editora@bookplatform.com",
    password: "editora123",
    role: "publisher",
    createdAt: "2026-01-10T12:00:00.000Z",
  },
  {
    id: "usr_school_1",
    name: "Colégio Horizonte",
    email: "escola@bookplatform.com",
    password: "escola123",
    role: "school",
    createdAt: "2026-01-10T12:00:00.000Z",
  },
  {
    id: "usr_admin_1",
    name: "Admin Book Platform",
    email: "admin@bookplatform.com",
    password: "admin123",
    role: "admin",
    createdAt: "2026-01-10T12:00:00.000Z",
  },
];
