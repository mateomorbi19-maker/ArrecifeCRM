"use client";

export type User = { id: "mateo" | "joaquin"; name: string; initials: string; role: string };

export const USERS: User[] = [
  { id: "mateo", name: "Mateo", initials: "M", role: "Administrador" },
  { id: "joaquin", name: "Joaquín", initials: "J", role: "Operaciones" },
];

const KEY = "arrecife_session";

export function getSession(): User | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function setSession(user: User) {
  localStorage.setItem(KEY, JSON.stringify(user));
}

export function clearSession() {
  localStorage.removeItem(KEY);
}
