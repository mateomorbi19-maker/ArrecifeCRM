export type Message = {
  id: string;
  direction: "in" | "out";
  content: string;
  at: string;
  agent?: boolean;
};

export type Conversation = {
  id: string;
  name: string;
  phone: string;
  avatar: string;
  lastAt: string;
  unread: number;
  labels: string[];
  assistant: boolean;
  messages: Message[];
};

export type OrderItem = { name: string; qty: number; price: number; note?: string };

export type Order = {
  id: string;
  code: string;
  customer: string;
  phone: string;
  createdAt: string;
  channel: "WhatsApp" | "Salón";
  type: "Delivery" | "Retiro" | "Mesa";
  address?: string;
  status: "Nuevo" | "En preparación" | "En camino" | "Entregado" | "Cancelado";
  payment: "Efectivo" | "Transferencia" | "Tarjeta";
  items: OrderItem[];
  notes?: string;
  total: number;
};

export type Contact = {
  id: string;
  name: string;
  phone: string;
  orders: number;
  totalSpent: number;
  lastOrder: string;
  favorite?: string;
  preferences?: string;
  tags: string[];
};

const now = Date.now();
const ago = (mins: number) => new Date(now - mins * 60_000).toISOString();

export const CONVERSATIONS: Conversation[] = [
  {
    id: "c1",
    name: "Lucía Fernández",
    phone: "+598 99 234 512",
    avatar: "LF",
    lastAt: ago(2),
    unread: 0,
    labels: ["pedido"],
    assistant: true,
    messages: [
      { id: "m1", direction: "in", content: "Hola! Quería hacer un pedido para esta noche", at: ago(15) },
      {
        id: "m2",
        direction: "out",
        agent: true,
        content:
          "¡Hola Lucía! 🌊 Bienvenida a Arrecife Casademar. Claro que sí, contame para cuántas personas sería y si es para delivery o retiro.",
        at: ago(14),
      },
      { id: "m3", direction: "in", content: "Para 2, delivery en Parada 5 Mansa", at: ago(13) },
      {
        id: "m4",
        direction: "out",
        agent: true,
        content:
          "Perfecto. Tenemos un combo ideal para dos: Omakase Arrecife x12 ($1400) + un Tiradito de Salmón ($980). ¿Te gustaría sumarle algo para tomar?",
        at: ago(12),
      },
      { id: "m5", direction: "in", content: "Dale, sumale una botella de Albariño", at: ago(10) },
      {
        id: "m6",
        direction: "out",
        agent: true,
        content:
          "Excelente elección 🍷 Narbona Albariño $2650. Total del pedido: $5.030. ¿Confirmás? Tiempo estimado 45–55 min.",
        at: ago(9),
      },
      { id: "m7", direction: "in", content: "Confirmo! Pago con transferencia", at: ago(2) },
    ],
  },
  {
    id: "c2",
    name: "Martín Rodríguez",
    phone: "+598 98 445 901",
    avatar: "MR",
    lastAt: ago(18),
    unread: 2,
    labels: ["consulta"],
    assistant: true,
    messages: [
      { id: "m1", direction: "in", content: "Buenas, tienen opciones veggie en el sushi?", at: ago(22) },
      {
        id: "m2",
        direction: "out",
        agent: true,
        content:
          "¡Hola Martín! Sí, los Omakase tienen opcional veggie. Consultá por reemplazos de palta, pepino y vegetales grillados.",
        at: ago(21),
      },
      { id: "m3", direction: "in", content: "Perfecto, para mañana a las 21hs reservo mesa para 4", at: ago(18) },
    ],
  },
  {
    id: "c3",
    name: "Sofía Méndez",
    phone: "+598 91 778 223",
    avatar: "SM",
    lastAt: ago(45),
    unread: 0,
    labels: ["delivery", "vip"],
    assistant: true,
    messages: [
      { id: "m1", direction: "in", content: "Hola, lo de siempre? 😊", at: ago(60) },
      {
        id: "m2",
        direction: "out",
        agent: true,
        content:
          "¡Hola Sofía! Claro, tu clásico: Omakase Salmón x12 + Ceviche Arrecife + Limonada de menta. ¿Confirmo?",
        at: ago(58),
      },
      { id: "m3", direction: "in", content: "Confirmo! Gracias", at: ago(55) },
      {
        id: "m4",
        direction: "out",
        agent: true,
        content: "Listo. En 40 min estamos llegando a tu dirección habitual. Total: $2830.",
        at: ago(45),
      },
    ],
  },
  {
    id: "c4",
    name: "Javier Peralta",
    phone: "+598 99 012 334",
    avatar: "JP",
    lastAt: ago(120),
    unread: 0,
    labels: ["reclamo"],
    assistant: false,
    messages: [
      { id: "m1", direction: "in", content: "Hola, el pedido anterior llegó con un roll de menos", at: ago(130) },
      {
        id: "m2",
        direction: "out",
        agent: true,
        content:
          "Hola Javier, lamento mucho lo sucedido. Voy a escalarlo al equipo de salón para que resuelvan en breve.",
        at: ago(125),
      },
      { id: "m3", direction: "in", content: "Gracias, espero respuesta", at: ago(120) },
    ],
  },
  {
    id: "c5",
    name: "Camila Suárez",
    phone: "+598 92 556 110",
    avatar: "CS",
    lastAt: ago(220),
    unread: 0,
    labels: ["pedido"],
    assistant: true,
    messages: [
      { id: "m1", direction: "in", content: "Qué rolls tienen hoy?", at: ago(240) },
      {
        id: "m2",
        direction: "out",
        agent: true,
        content:
          "Tenemos todos los rolls de la carta disponibles hoy. El más pedido: Acevichado. También Black Truffle y Dos Salmones. ¿Querés que te arme una combinación?",
        at: ago(235),
      },
      { id: "m3", direction: "in", content: "Sí, 10 rolls variados, retiro 21hs", at: ago(220) },
    ],
  },
  {
    id: "c6",
    name: "Tomás Lacalle",
    phone: "+598 97 334 558",
    avatar: "TL",
    lastAt: ago(360),
    unread: 0,
    labels: ["consulta"],
    assistant: true,
    messages: [
      { id: "m1", direction: "in", content: "Hacen delivery a Punta Ballena?", at: ago(360) },
      {
        id: "m2",
        direction: "out",
        agent: true,
        content:
          "Hola Tomás, llegamos hasta Punta Ballena con un cargo adicional de $200 y mínimo de pedido $2000. ¿Armamos algo?",
        at: ago(358),
      },
    ],
  },
  {
    id: "c7",
    name: "Valentina Rossi",
    phone: "+598 99 887 221",
    avatar: "VR",
    lastAt: ago(600),
    unread: 0,
    labels: ["vip"],
    assistant: true,
    messages: [
      { id: "m1", direction: "in", content: "Quiero reservar para 6 personas el sábado", at: ago(610) },
      {
        id: "m2",
        direction: "out",
        agent: true,
        content:
          "¡Hola Valentina! Tenemos disponibilidad sábado 21:30 para 6. ¿Querés que te reserve la mesa del ventanal?",
        at: ago(605),
      },
      { id: "m3", direction: "in", content: "Sí por favor", at: ago(600) },
    ],
  },
];

export const ORDERS: Order[] = [
  {
    id: "o1",
    code: "ARR-10234",
    customer: "Lucía Fernández",
    phone: "+598 99 234 512",
    createdAt: ago(5),
    channel: "WhatsApp",
    type: "Delivery",
    address: "Parada 5 Mansa, Edificio Miramar, 4B",
    status: "Nuevo",
    payment: "Transferencia",
    items: [
      { name: "Omakase Arrecife x12", qty: 1, price: 1400 },
      { name: "Tiradito de Salmón", qty: 1, price: 980 },
      { name: "Narbona Albariño", qty: 1, price: 2650 },
    ],
    notes: "Sin wasabi en el omakase",
    total: 5030,
  },
  {
    id: "o2",
    code: "ARR-10233",
    customer: "Sofía Méndez",
    phone: "+598 91 778 223",
    createdAt: ago(45),
    channel: "WhatsApp",
    type: "Delivery",
    address: "Rambla Williman Parada 12",
    status: "En camino",
    payment: "Tarjeta",
    items: [
      { name: "Omakase Salmón x12", qty: 1, price: 1300 },
      { name: "Ceviche Arrecife", qty: 1, price: 1200 },
      { name: "Limonada de menta y jengibre", qty: 1, price: 350 },
    ],
    total: 2850,
  },
  {
    id: "o3",
    code: "ARR-10232",
    customer: "Camila Suárez",
    phone: "+598 92 556 110",
    createdAt: ago(220),
    channel: "WhatsApp",
    type: "Retiro",
    status: "En preparación",
    payment: "Efectivo",
    items: [
      { name: "Acevichado Roll", qty: 1, price: 1200 },
      { name: "Black Truffle Roll", qty: 1, price: 1200 },
      { name: "Dos Salmones Roll", qty: 1, price: 1200 },
    ],
    notes: "Retiro 21hs",
    total: 3600,
  },
  {
    id: "o4",
    code: "ARR-10231",
    customer: "Valentina Rossi",
    phone: "+598 99 887 221",
    createdAt: ago(300),
    channel: "WhatsApp",
    type: "Mesa",
    status: "Entregado",
    payment: "Tarjeta",
    items: [
      { name: "Tiradito Trufado", qty: 2, price: 980 },
      { name: "Omakase Arrecife x12", qty: 2, price: 1400 },
      { name: "Pulpo Anticuchero", qty: 1, price: 2000 },
    ],
    total: 6760,
  },
  {
    id: "o5",
    code: "ARR-10230",
    customer: "Martín Rodríguez",
    phone: "+598 98 445 901",
    createdAt: ago(1440),
    channel: "WhatsApp",
    type: "Delivery",
    address: "Parada 3 Brava, Edificio Coral",
    status: "Entregado",
    payment: "Transferencia",
    items: [
      { name: "Chirashi", qty: 1, price: 1200 },
      { name: "Ceviche Peruano", qty: 1, price: 1200 },
    ],
    total: 2400,
  },
  {
    id: "o6",
    code: "ARR-10229",
    customer: "Tomás Lacalle",
    phone: "+598 97 334 558",
    createdAt: ago(1600),
    channel: "WhatsApp",
    type: "Delivery",
    address: "Punta Ballena",
    status: "Cancelado",
    payment: "Efectivo",
    items: [{ name: "Salmón Grill", qty: 1, price: 1400 }],
    total: 1400,
  },
];

export const CONTACTS: Contact[] = [
  {
    id: "k1",
    name: "Lucía Fernández",
    phone: "+598 99 234 512",
    orders: 8,
    totalSpent: 38400,
    lastOrder: ago(5),
    favorite: "Omakase Arrecife x12",
    preferences: "Sin wasabi, prefiere delivery",
    tags: ["pedido", "recurrente"],
  },
  {
    id: "k2",
    name: "Sofía Méndez",
    phone: "+598 91 778 223",
    orders: 22,
    totalSpent: 62700,
    lastOrder: ago(45),
    favorite: "Omakase Salmón x12",
    preferences: "Cliente VIP. Pide casi siempre lo mismo.",
    tags: ["vip", "recurrente"],
  },
  {
    id: "k3",
    name: "Martín Rodríguez",
    phone: "+598 98 445 901",
    orders: 4,
    totalSpent: 9800,
    lastOrder: ago(1440),
    favorite: "Chirashi",
    preferences: "Opciones veggie",
    tags: ["veggie"],
  },
  {
    id: "k4",
    name: "Javier Peralta",
    phone: "+598 99 012 334",
    orders: 3,
    totalSpent: 7200,
    lastOrder: ago(1800),
    favorite: "New York Phila",
    tags: ["reclamo reciente"],
  },
  {
    id: "k5",
    name: "Camila Suárez",
    phone: "+598 92 556 110",
    orders: 6,
    totalSpent: 14700,
    lastOrder: ago(220),
    favorite: "Rolls variados",
    tags: ["pedido"],
  },
  {
    id: "k6",
    name: "Tomás Lacalle",
    phone: "+598 97 334 558",
    orders: 2,
    totalSpent: 2800,
    lastOrder: ago(1600),
    favorite: "Salmón Grill",
    tags: ["zona punta ballena"],
  },
  {
    id: "k7",
    name: "Valentina Rossi",
    phone: "+598 99 887 221",
    orders: 14,
    totalSpent: 48900,
    lastOrder: ago(300),
    favorite: "Pulpo Anticuchero",
    preferences: "Mesa del ventanal, grupos grandes",
    tags: ["vip", "mesa"],
  },
];
