"use client";

import { useState } from "react";
import clsx from "clsx";
import { MENU, CUBIERTO_ADULTO, type MenuItem } from "@/data/menu";

export default function CartaPage() {
  const [activeCat, setActiveCat] = useState(MENU[0].id);
  const [availability, setAvailability] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};
    MENU.forEach((c) => c.items.forEach((i) => (init[i.id] = i.available)));
    return init;
  });
  const [editing, setEditing] = useState<MenuItem | null>(null);

  const toggle = (id: string) => setAvailability((p) => ({ ...p, [id]: !p[id] }));

  const category = MENU.find((c) => c.id === activeCat)!;

  return (
    <div className="flex-1 flex min-w-0 overflow-hidden">
      {/* Category sidebar */}
      <aside className="hidden md:block w-56 border-r border-arborder bg-arpanel overflow-y-auto shrink-0">
        <div className="p-4 border-b border-arborder">
          <h2 className="text-sm font-bold text-white">Categorías</h2>
          <p className="text-[11px] text-armuted mt-0.5">{MENU.length} secciones</p>
        </div>
        <nav className="p-2 space-y-0.5">
          {MENU.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCat(c.id)}
              className={clsx(
                "w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition",
                activeCat === c.id
                  ? "bg-arcoral text-white"
                  : "text-armuted hover:bg-white/5 hover:text-white"
              )}
            >
              {c.name}
              <span className="float-right text-[10px] opacity-70">{c.items.length}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-5 md:p-8">
        <div className="max-w-4xl">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-white">Carta</h1>
              <p className="text-sm text-armuted mt-1">
                Los cambios impactan en tiempo real en la memoria del agente de IA.
              </p>
            </div>
            <div className="hidden sm:block text-right">
              <p className="text-[11px] uppercase tracking-wider text-armuted">Cubierto adulto</p>
              <p className="text-lg font-bold text-arcoral">${CUBIERTO_ADULTO}</p>
            </div>
          </div>

          {/* Mobile category select */}
          <div className="md:hidden mb-4 overflow-x-auto -mx-1 px-1">
            <div className="flex gap-2 w-max">
              {MENU.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveCat(c.id)}
                  className={clsx(
                    "px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap border",
                    activeCat === c.id
                      ? "bg-arcoral border-arcoral text-white"
                      : "bg-arpanel2 border-arborder text-armuted"
                  )}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-5">
            <h2 className="font-display text-3xl text-white">{category.name}</h2>
            {category.subtitle && (
              <p className="text-sm text-armuted italic mt-1">{category.subtitle}</p>
            )}
          </div>

          <div className="space-y-2">
            {category.items.map((item) => {
              const on = availability[item.id];
              return (
                <div
                  key={item.id}
                  className={clsx(
                    "bg-arpanel border border-arborder rounded-xl p-4 flex items-start gap-4 transition",
                    !on && "opacity-50"
                  )}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <h3 className="font-semibold text-white">{item.name}</h3>
                      {item.unit && (
                        <span className="text-[10px] text-armuted uppercase tracking-wider">
                          {item.unit}
                        </span>
                      )}
                    </div>
                    {item.description && (
                      <p className="text-xs text-armuted mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <span className="text-lg font-bold text-arcoral leading-none">
                      ${item.price.toLocaleString("es-UY")}
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggle(item.id)}
                        className={clsx(
                          "group flex items-center gap-2 px-2.5 py-1 rounded-full border text-[10px] font-bold uppercase tracking-wider transition",
                          on
                            ? "bg-arcoral/15 border-arcoral/40 text-arcoral hover:bg-arcoral/25"
                            : "bg-arpanel2 border-arborder text-armuted hover:border-armuted/60"
                        )}
                        title={on ? "Disponible — click para marcar agotado" : "Agotado — click para habilitar"}
                      >
                        <span className={clsx("w-1.5 h-1.5 rounded-full", on ? "bg-arcoral" : "bg-armuted")} />
                        {on ? "Disponible" : "Agotado"}
                      </button>
                      <button
                        onClick={() => setEditing(item)}
                        className="text-armuted hover:text-white p-1.5 rounded-lg hover:bg-white/5 transition"
                        title="Editar producto"
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {editing && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-arpanel border border-arborder rounded-2xl w-full max-w-md p-6">
            <div className="flex justify-between items-start mb-5">
              <div>
                <p className="text-[11px] uppercase text-armuted">Editar producto</p>
                <h3 className="text-lg font-bold text-white">{editing.name}</h3>
              </div>
              <button onClick={() => setEditing(null)} className="text-armuted hover:text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className="space-y-4">
              <Field label="Nombre" defaultValue={editing.name} />
              <Field label="Precio" defaultValue={`$${editing.price}`} />
              <div>
                <label className="text-[11px] uppercase tracking-wider text-armuted">Descripción</label>
                <textarea
                  defaultValue={editing.description ?? ""}
                  rows={3}
                  className="w-full mt-1 bg-arpanel2 border border-arborder rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-arcoral/40"
                />
              </div>
              <button className="w-full coral-gradient text-white py-2.5 rounded-xl text-sm font-semibold">
                Guardar cambios
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Field({ label, defaultValue }: { label: string; defaultValue: string }) {
  return (
    <div>
      <label className="text-[11px] uppercase tracking-wider text-armuted">{label}</label>
      <input
        defaultValue={defaultValue}
        className="w-full mt-1 bg-arpanel2 border border-arborder rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-arcoral/40"
      />
    </div>
  );
}
