"use client";

import { useState } from "react";
import clsx from "clsx";

export default function ConfiguracionPage() {
  const [tab, setTab] = useState<"agente" | "delivery" | "horarios" | "equipo">("agente");

  return (
    <div className="flex-1 overflow-y-auto p-5 md:p-8">
      <div className="max-w-3xl">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white">Configuración</h1>
          <p className="text-sm text-armuted mt-1">
            Ajustes del agente de IA, delivery, horarios y equipo.
          </p>
        </div>

        <div className="flex gap-1 mb-6 bg-arpanel border border-arborder rounded-xl p-1 w-fit">
          {(["agente", "delivery", "horarios", "equipo"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={clsx(
                "px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wide transition",
                tab === t ? "bg-arcoral text-white" : "text-armuted hover:text-white"
              )}
            >
              {t}
            </button>
          ))}
        </div>

        {tab === "agente" && <AgenteTab />}
        {tab === "delivery" && <DeliveryTab />}
        {tab === "horarios" && <HorariosTab />}
        {tab === "equipo" && <EquipoTab />}
      </div>
    </div>
  );
}

function Card({ title, desc, children }: { title: string; desc?: string; children: React.ReactNode }) {
  return (
    <div className="bg-arpanel border border-arborder rounded-xl p-5 mb-4">
      <h3 className="text-sm font-bold text-white">{title}</h3>
      {desc && <p className="text-xs text-armuted mt-0.5 mb-4">{desc}</p>}
      {children}
    </div>
  );
}

function Toggle({ label, defaultOn = true }: { label: string; defaultOn?: boolean }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-sm text-slate-200">{label}</span>
      <button
        onClick={() => setOn(!on)}
        className={clsx("relative w-10 h-5 rounded-full transition", on ? "bg-arcoral" : "bg-arborder")}
      >
        <span
          className={clsx(
            "absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform",
            on ? "translate-x-5" : "translate-x-0.5"
          )}
        />
      </button>
    </div>
  );
}

function AgenteTab() {
  return (
    <>
      <Card title="Estado del agente" desc="Controlá si el agente de IA responde los mensajes entrantes.">
        <div className="flex items-center gap-3 bg-arcoral/10 border border-arcoral/30 rounded-lg p-4">
          <div className="w-10 h-10 rounded-full coral-gradient flex items-center justify-center">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-white">Agente activo</p>
            <p className="text-[11px] text-armuted">Respondiendo 100% de los mensajes entrantes</p>
          </div>
          <button className="bg-arpanel2 border border-arborder text-armuted hover:text-white px-3 py-1.5 rounded-lg text-xs font-semibold">
            Pausar
          </button>
        </div>
      </Card>

      <Card title="Personalidad y tono" desc="Cómo se comunica el agente con los clientes.">
        <div className="space-y-3">
          <div>
            <label className="text-[11px] uppercase text-armuted">Nombre del agente</label>
            <input defaultValue="Arrecife" className="w-full mt-1 bg-arpanel2 border border-arborder rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-arcoral/40" />
          </div>
          <div>
            <label className="text-[11px] uppercase text-armuted">Tono</label>
            <select className="w-full mt-1 bg-arpanel2 border border-arborder rounded-lg px-3 py-2 text-sm text-white">
              <option>Cercano y humano (recomendado)</option>
              <option>Formal</option>
              <option>Casual</option>
            </select>
          </div>
          <div>
            <label className="text-[11px] uppercase text-armuted">Mensaje de bienvenida</label>
            <textarea
              defaultValue="¡Hola! 🌊 Bienvenid@ a Arrecife Casademar. ¿Querés ver la carta o armamos tu pedido?"
              rows={3}
              className="w-full mt-1 bg-arpanel2 border border-arborder rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-arcoral/40"
            />
          </div>
        </div>
      </Card>

      <Card title="Comportamiento" desc="Qué puede hacer el agente automáticamente.">
        <Toggle label="Tomar pedidos de punta a punta" />
        <Toggle label="Sugerir combos y acompañamientos (upsell)" />
        <Toggle label="Personalizar con historial del cliente" />
        <Toggle label="Escalar a humano en reclamos delicados" />
        <Toggle label="Informar tiempos de preparación" />
      </Card>
    </>
  );
}

function DeliveryTab() {
  return (
    <>
      <Card title="Zonas de delivery" desc="Áreas donde el agente ofrece envío.">
        <div className="space-y-2">
          {[
            { zone: "Parada 1–10 Mansa", fee: 150, min: 1500 },
            { zone: "Parada 11–20 Mansa", fee: 200, min: 1800 },
            { zone: "Parada 1–10 Brava", fee: 150, min: 1500 },
            { zone: "Península", fee: 150, min: 1500 },
            { zone: "Punta Ballena", fee: 200, min: 2000 },
          ].map((z) => (
            <div key={z.zone} className="flex items-center justify-between bg-arpanel2 border border-arborder rounded-lg px-3 py-2.5">
              <div>
                <p className="text-sm text-white font-medium">{z.zone}</p>
                <p className="text-[11px] text-armuted">Mínimo ${z.min}</p>
              </div>
              <span className="text-sm font-bold text-arcoral">+${z.fee}</span>
            </div>
          ))}
        </div>
      </Card>
      <Card title="Tiempos" desc="Estimados comunicados por el agente.">
        <Toggle label="Delivery: 45–55 min" />
        <Toggle label="Retiro: 25–35 min" />
      </Card>
    </>
  );
}

function HorariosTab() {
  return (
    <Card title="Horario de atención" desc="El agente solo toma pedidos en estos horarios.">
      <div className="space-y-2">
        {["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"].map((d) => (
          <div key={d} className="flex items-center justify-between bg-arpanel2 border border-arborder rounded-lg px-3 py-2.5">
            <span className="text-sm text-white w-24">{d}</span>
            <div className="flex items-center gap-2 text-sm text-armuted">
              <span>20:00</span>
              <span>—</span>
              <span>00:30</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function EquipoTab() {
  return (
    <Card title="Usuarios del panel" desc="Personas con acceso al CRM.">
      <div className="space-y-2">
        {[
          { name: "Mateo", role: "Administrador" },
          { name: "Joaquín", role: "Operaciones" },
        ].map((u) => (
          <div key={u.name} className="flex items-center gap-3 bg-arpanel2 border border-arborder rounded-lg p-3">
            <div className="w-10 h-10 rounded-full coral-gradient flex items-center justify-center font-bold text-white">
              {u.name[0]}
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-white">{u.name}</p>
              <p className="text-[11px] text-armuted">{u.role}</p>
            </div>
            <button className="text-armuted hover:text-white text-xs">Editar</button>
          </div>
        ))}
      </div>
      <button className="w-full mt-4 bg-arpanel2 border border-dashed border-arborder hover:border-arcoral/40 text-armuted hover:text-white py-2.5 rounded-lg text-sm font-semibold">
        + Invitar usuario
      </button>
    </Card>
  );
}
