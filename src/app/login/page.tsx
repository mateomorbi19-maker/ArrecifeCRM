"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import { USERS, setSession, type User } from "@/lib/session";
import { BrandLogo } from "@/components/BrandLogo";

export default function LoginPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!selected) return;
    setLoading(true);
    setSession(selected);
    setTimeout(() => router.push("/bandeja"), 300);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5 bg-arblack relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-arcoral/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-arcoral/5 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="flex flex-col items-center mb-10">
          <BrandLogo size={84} />
          <h1 className="mt-5 text-2xl font-bold text-white tracking-tight">Arrecife Casademar</h1>
          <p className="text-sm text-armuted mt-1">Panel de gestión · CRM interno</p>
        </div>

        <div className="bg-arpanel border border-arborder rounded-2xl p-6 shadow-2xl shadow-black/50">
          <p className="text-xs uppercase tracking-wider text-armuted mb-4">Seleccionar usuario</p>

          <div className="space-y-2.5">
            {USERS.map((u) => {
              const active = selected?.id === u.id;
              return (
                <button
                  key={u.id}
                  onClick={() => setSelected(u)}
                  className={clsx(
                    "w-full flex items-center gap-4 p-4 rounded-xl border transition text-left",
                    active
                      ? "border-arcoral bg-arcoral/10 shadow-lg shadow-arcoral/10"
                      : "border-arborder bg-arpanel2 hover:border-arcoral/40 hover:bg-arpanel3"
                  )}
                >
                  <div
                    className={clsx(
                      "w-11 h-11 rounded-full flex items-center justify-center font-bold text-lg shrink-0",
                      active ? "coral-gradient text-white" : "bg-arpanel3 text-armuted"
                    )}
                  >
                    {u.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-white">{u.name}</p>
                    <p className="text-xs text-armuted">{u.role}</p>
                  </div>
                  {active && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>

          <button
            disabled={!selected || loading}
            onClick={handleLogin}
            className={clsx(
              "w-full mt-6 py-3 rounded-xl font-semibold text-sm transition",
              selected && !loading
                ? "coral-gradient text-white shadow-lg shadow-arcoral/20 hover:brightness-110"
                : "bg-arpanel3 text-armuted cursor-not-allowed"
            )}
          >
            {loading ? "Ingresando..." : "Ingresar al panel"}
          </button>
        </div>

        <p className="text-center text-[11px] text-armuted mt-6">
          Arrecife Casademar · Punta del Este · v1.0
        </p>
      </div>
    </div>
  );
}
