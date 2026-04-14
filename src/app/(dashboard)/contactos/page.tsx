"use client";

import { useState, useMemo } from "react";
import clsx from "clsx";
import { CONTACTS, type Contact } from "@/data/mock";

export default function ContactosPage() {
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState<Contact | null>(null);

  const filtered = useMemo(() => {
    if (!q.trim()) return CONTACTS;
    const n = q.toLowerCase();
    return CONTACTS.filter(
      (c) => c.name.toLowerCase().includes(n) || c.phone.includes(n) || c.tags.some((t) => t.includes(n))
    );
  }, [q]);

  const stats = useMemo(() => {
    const total = CONTACTS.length;
    const vip = CONTACTS.filter((c) => c.tags.includes("vip")).length;
    const revenue = CONTACTS.reduce((s, c) => s + c.totalSpent, 0);
    return { total, vip, revenue };
  }, []);

  return (
    <div className="flex-1 flex min-w-0 overflow-hidden">
      <div className="flex-1 overflow-y-auto p-5 md:p-8">
        <div className="max-w-6xl">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-white">Contactos</h1>
              <p className="text-sm text-armuted mt-1">
                Base de clientes unificada · historial, preferencias y actividad.
              </p>
            </div>
            <button className="hidden sm:block coral-gradient text-white px-4 py-2 rounded-xl text-sm font-semibold">
              + Nueva campaña
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            <StatBox label="Clientes totales" value={stats.total} />
            <StatBox label="VIP" value={stats.vip} />
            <StatBox label="Ticket acumulado" value={`$${stats.revenue.toLocaleString("es-UY")}`} />
          </div>

          <div className="relative mb-4">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-armuted" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="text"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar cliente..."
              className="w-full pl-9 pr-3 py-2.5 bg-arpanel border border-arborder rounded-xl text-sm text-white placeholder-armuted focus:outline-none focus:ring-2 focus:ring-arcoral/40 focus:border-arcoral"
            />
          </div>

          <div className="bg-arpanel border border-arborder rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-arpanel2 text-armuted text-[11px] uppercase tracking-wider">
                  <tr>
                    <th className="text-left px-4 py-3">Cliente</th>
                    <th className="text-left px-4 py-3">Teléfono</th>
                    <th className="text-right px-4 py-3">Pedidos</th>
                    <th className="text-right px-4 py-3">Total gastado</th>
                    <th className="text-left px-4 py-3">Tags</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((c) => (
                    <tr
                      key={c.id}
                      onClick={() => setSelected(c)}
                      className={clsx(
                        "border-t border-arborder cursor-pointer transition",
                        selected?.id === c.id ? "bg-arcoral/10" : "hover:bg-white/5"
                      )}
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full coral-gradient flex items-center justify-center text-[10px] font-bold text-white">
                            {c.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                          </div>
                          <span className="text-white font-semibold">{c.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-armuted text-xs">{c.phone}</td>
                      <td className="px-4 py-3 text-right text-white">{c.orders}</td>
                      <td className="px-4 py-3 text-right text-white font-semibold">
                        ${c.totalSpent.toLocaleString("es-UY")}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap gap-1">
                          {c.tags.map((t) => (
                            <span
                              key={t}
                              className={clsx(
                                "text-[10px] px-2 py-0.5 rounded-full font-medium",
                                t === "vip"
                                  ? "bg-amber-500/15 text-amber-400"
                                  : "bg-slate-500/15 text-slate-300"
                              )}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {selected && (
        <aside className="hidden lg:flex w-[360px] border-l border-arborder bg-arpanel flex-col shrink-0">
          <div className="p-5 border-b border-arborder flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full coral-gradient flex items-center justify-center font-bold text-white">
                {selected.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
              </div>
              <div>
                <p className="font-bold text-white">{selected.name}</p>
                <p className="text-xs text-armuted">{selected.phone}</p>
              </div>
            </div>
            <button onClick={() => setSelected(null)} className="text-armuted hover:text-white p-1">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-5">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-arpanel2 border border-arborder rounded-lg p-3">
                <p className="text-[10px] uppercase text-armuted">Pedidos</p>
                <p className="text-xl font-bold text-white">{selected.orders}</p>
              </div>
              <div className="bg-arpanel2 border border-arborder rounded-lg p-3">
                <p className="text-[10px] uppercase text-armuted">Total</p>
                <p className="text-xl font-bold text-arcoral">
                  ${selected.totalSpent.toLocaleString("es-UY")}
                </p>
              </div>
            </div>
            {selected.favorite && (
              <div>
                <p className="text-[11px] uppercase tracking-wider text-armuted mb-1">Favorito</p>
                <p className="text-sm text-white">{selected.favorite}</p>
              </div>
            )}
            {selected.preferences && (
              <div>
                <p className="text-[11px] uppercase tracking-wider text-armuted mb-1">Preferencias</p>
                <p className="text-sm text-white bg-arpanel2 border border-arborder rounded-lg px-3 py-2">
                  {selected.preferences}
                </p>
              </div>
            )}
            <div>
              <p className="text-[11px] uppercase tracking-wider text-armuted mb-1">Último pedido</p>
              <p className="text-sm text-white">
                {new Date(selected.lastOrder).toLocaleString("es-UY")}
              </p>
            </div>
          </div>

          <div className="p-4 border-t border-arborder">
            <button className="w-full coral-gradient text-white py-2.5 rounded-xl text-sm font-semibold">
              Abrir conversación
            </button>
          </div>
        </aside>
      )}
    </div>
  );
}

function StatBox({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-xl border border-arborder bg-arpanel p-4">
      <p className="text-[11px] uppercase tracking-wider text-armuted">{label}</p>
      <p className="text-2xl font-bold text-white mt-1">{value}</p>
    </div>
  );
}
