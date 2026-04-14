export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  price: number;
  unit?: string;
  available: boolean;
  tags?: string[];
};

export type MenuCategory = {
  id: string;
  name: string;
  subtitle?: string;
  items: MenuItem[];
};

export const MENU: MenuCategory[] = [
  {
    id: "tiraditos",
    name: "Tiraditos",
    items: [
      {
        id: "tir-salmon",
        name: "Tiradito de Salmón",
        description:
          "Láminas de salmón, miel de maracuyá e hilos de masa filo crocante",
        price: 980,
        unit: "12 cortes",
        available: true,
      },
      {
        id: "tir-trufado",
        name: "Tiradito Trufado",
        description:
          "Láminas de salmón, aceite de trufa, piel cítrica, sal en escamas y jugo de lima",
        price: 980,
        unit: "12 cortes",
        available: true,
      },
      {
        id: "tir-arrecife",
        name: "Tiradito Arrecife",
        description:
          "Láminas de pescado blanco en salsa nikkei, pepino, cilantro y maíz canchita",
        price: 880,
        unit: "12 cortes",
        available: true,
      },
    ],
  },
  {
    id: "nigiris-sashimis",
    name: "Nigiris & Sashimis",
    subtitle: "Clásicos",
    items: [
      { id: "nig-pescablanca", name: "Nigiri Pesca Blanca", price: 200, unit: "x2", available: true },
      { id: "nig-salmon", name: "Nigiri Salmón", price: 270, unit: "x2", available: true },
      { id: "nig-atun", name: "Nigiri de Atún Rojo", price: 300, unit: "x2", available: true },
      { id: "sas-pescablanca", name: "Sashimi Pesca Blanca", price: 200, unit: "x2", available: true },
      { id: "sas-salmon", name: "Sashimi Salmón", price: 270, unit: "x2", available: true },
      { id: "sas-atun", name: "Sashimi de Atún Rojo", price: 300, unit: "x2", available: true },
      { id: "sas-caviar", name: "Sashimi Caviar Black River", price: 600, unit: "x2", available: true },
    ],
  },
  {
    id: "nigiris-especiales",
    name: "Nigiris Especiales",
    items: [
      { id: "nige-salmontruf", name: "Salmón Trufado", price: 350, unit: "x2", available: true },
      { id: "nige-ventresca", name: "Ventresca de Salmón", price: 350, unit: "x2", available: true },
      { id: "nige-mayospicy", name: "Pesca Blanca Mayo Spicy", price: 350, unit: "x2", available: true },
      { id: "nige-atunoroshi", name: "Atún Oroshi y Verdeo", price: 370, unit: "x2", available: true },
      { id: "nige-chillyjam", name: "Chilly Jam", price: 370, unit: "x2", available: true },
      { id: "nige-takoyaki", name: "Takoyaki", price: 400, unit: "x2", available: true },
      { id: "nige-punta", name: "Punta", price: 400, unit: "x2", available: true },
      { id: "nige-gunkan", name: "Gunkan Caviar Black River", price: 600, unit: "x2", available: true },
    ],
  },
  {
    id: "sushi",
    name: "Sushi — Omakase & Moriwase",
    subtitle: "Consultar por opcional veggie",
    items: [
      {
        id: "oma-salmon",
        name: "Omakase Salmón x12",
        description: "3 NY Phila · 3 Dos Salmones · 3 Aguacate · 3 Nigiris Clásicos",
        price: 1300,
        available: true,
      },
      {
        id: "oma-arrecife",
        name: "Omakase Arrecife x12",
        description: "3 Acevichado · 3 Anticucho · 3 Rocoto · 3 Nigiris Especiales",
        price: 1400,
        available: true,
      },
      {
        id: "mori-nigiri",
        name: "Nigiri Moriwase x9",
        description: "3 variedades de nigiris",
        price: 1300,
        available: true,
      },
      {
        id: "mori-sashimi",
        name: "Sashimi Moriwase x9",
        description: "3 variedades de sashimis",
        price: 1300,
        available: true,
      },
    ],
  },
  {
    id: "chirashi",
    name: "Chirashi",
    items: [
      {
        id: "chirashi",
        name: "Chirashi",
        description: "Brown rice, palta, pepino, sashimis (9 cortes) y furikake",
        price: 1200,
        available: true,
      },
    ],
  },
  {
    id: "ceviches",
    name: "Ceviches",
    items: [
      {
        id: "cev-arrecife",
        name: "Ceviche Arrecife",
        description:
          "Pesca del día marinada en leche de tigre, rocoto, puré de boniato, maíz canchita y batata frita",
        price: 1200,
        available: true,
      },
      {
        id: "cev-peruano",
        name: "Ceviche Peruano",
        description:
          "Pesca del día marinada en leche de tigre, rocoto, maíz canchita y batata frita",
        price: 1200,
        available: true,
      },
      {
        id: "cev-mercado",
        name: "Ceviche de Mercado",
        description: "Salmón en salsa cremosa de ají amarillo acompañado de rabas",
        price: 1200,
        available: true,
      },
    ],
  },
  {
    id: "cocina",
    name: "Cocina",
    items: [
      {
        id: "coc-yakimeshi",
        name: "Yakimeshi de Langostinos",
        description:
          "Salteado nikkei de arroz shari, toques orientales y crocantes peruanos con sus salsas",
        price: 1200,
        available: true,
      },
      {
        id: "coc-salmon-grill",
        name: "Salmón Grill",
        description: "Salmón a la plancha con mix de verdes y chaufa",
        price: 1400,
        available: true,
      },
      {
        id: "coc-pulpo",
        name: "Pulpo Anticuchero",
        description:
          "Pulpo en doble cocción, salsa de ají panka, boniatos asados y criollita",
        price: 2000,
        available: true,
      },
    ],
  },
  {
    id: "rolls",
    name: "Rolls",
    subtitle: "x10 unidades · $1200 c/u",
    items: [
      { id: "roll-ny", name: "New York", description: "Salmón y palta", price: 1200, available: true },
      {
        id: "roll-aguacate",
        name: "Aguacate",
        description: "Salmón, phila, cobertura de palta y praliné de almendras",
        price: 1200,
        available: true,
      },
      {
        id: "roll-blacktruffle",
        name: "Black Truffle",
        description: "Salmón, palta, cobertura de manteca de trufa negra, sal en escamas y azúcar negra",
        price: 1200,
        available: true,
      },
      {
        id: "roll-rocoto",
        name: "Rocoto",
        description: "Salmón, palta, ciboulette, salsa chilly jam, quinoa crocante y sésamo",
        price: 1200,
        available: true,
      },
      {
        id: "roll-mediterraneo",
        name: "Mediterráneo",
        description: "Langostino furai, palta, coronado con vieiras gratinadas",
        price: 1200,
        available: true,
      },
      {
        id: "roll-anticucho",
        name: "Anticucho",
        description: "Salmón, palta, con salsa anticucho y cilantro",
        price: 1200,
        available: true,
      },
      { id: "roll-nyphila", name: "New York Phila", description: "Salmón, palta y phila", price: 1200, available: true },
      {
        id: "roll-dossalmones",
        name: "Dos Salmones",
        description: "Tartar de salmón, palta, cobertura de salmón, salsa nikkei y ciboulette",
        price: 1200,
        available: true,
      },
      {
        id: "roll-pepenacho",
        name: "Pepe Nacho",
        description:
          "Tartar de pescado blanco, palta y pepino con cobertura de pesca local, salsa acevichada y nikkei con furikake",
        price: 1200,
        available: true,
      },
      {
        id: "roll-acevichado",
        name: "Acevichado",
        description:
          "Langostino furai, palta, coronado con pesca blanca con salsa acevichada y cilantro",
        price: 1200,
        available: true,
      },
      {
        id: "roll-omakase",
        name: "Omakase Roll",
        description: "Pesca blanca y salmón, cobertura de chupe de langostinos",
        price: 1200,
        available: true,
      },
      {
        id: "roll-hotnyphila",
        name: "Hot New York Phila",
        description: "Salmón, palta y phila rebozado en panko",
        price: 1200,
        available: true,
      },
    ],
  },
  {
    id: "kids",
    name: "Menú Kids",
    subtitle: "Incluye bebida y helado",
    items: [
      {
        id: "kids-mila",
        name: "Milanesa de Lomo con Papas Fritas",
        price: 800,
        available: true,
      },
    ],
  },
  {
    id: "postres",
    name: "Postres",
    items: [
      { id: "pos-suspiro", name: "Suspiro Limeño", price: 480, available: true },
      { id: "pos-ddl", name: "Mousse de DDL Narbona", price: 520, available: true },
    ],
  },
  {
    id: "vinos",
    name: "Vinos",
    items: [
      { id: "vino-sb", name: "Narbona Sauvignon Blanc", price: 1300, unit: "botella", available: true },
      { id: "vino-rose", name: "Narbona Tannat Rosé", price: 1300, unit: "botella", available: true },
      { id: "vino-albarino", name: "Narbona Albariño", price: 2650, unit: "botella", available: true },
      { id: "vino-pinot", name: "Narbona Pinot Noir", price: 1600, unit: "botella", available: true },
      { id: "vino-copa", name: "Vino por Copa", price: 390, unit: "copa", available: true },
    ],
  },
  {
    id: "cocteleria",
    name: "Coctelería",
    items: [
      { id: "coc-aperol", name: "Aperol Spritz", price: 450, available: true },
      {
        id: "coc-gintonic",
        name: "Gin Tonic (Heredero)",
        description: "Limón · Frutos rojos · Pepino · Pomelo y albahaca",
        price: 400,
        available: true,
      },
      { id: "coc-campari", name: "Campari Orange Garibaldi", price: 450, available: true },
      { id: "coc-fernet", name: "Fernet Coca", price: 450, available: true },
      { id: "coc-negroni", name: "Negroni", price: 450, available: true },
      { id: "coc-caipirinha", name: "Caipiriña", price: 400, available: true },
      { id: "coc-caipiroska", name: "Caipiroska", price: 550, available: true },
      { id: "coc-cynar", name: "Cynar Julep", price: 450, available: true },
      { id: "coc-pisco", name: "Pisco Sour", price: 550, available: true },
      { id: "coc-whisky", name: "Whisky Black Label", price: 450, available: true },
      { id: "coc-mojito", name: "Mojito", price: 450, available: true },
    ],
  },
  {
    id: "bebidas",
    name: "Bebidas",
    items: [
      { id: "beb-agua", name: "Agua sin gas", price: 230, available: true },
      { id: "beb-aguagas", name: "Agua con gas", price: 230, available: true },
      { id: "beb-limonada", name: "Limonada", price: 250, available: true },
      { id: "beb-limomenta", name: "Limonada de menta y jengibre", price: 350, available: true },
      { id: "beb-gaseosa", name: "Gaseosas", price: 200, available: true },
      { id: "beb-puerto", name: "Cerveza Artesanal del Puerto 330ml", price: 400, available: true },
      { id: "beb-stella", name: "Cerveza Stella Artois 330ml", price: 270, available: true },
      { id: "beb-corona", name: "Cerveza Corona 355ml", price: 270, available: true },
    ],
  },
];

export const CUBIERTO_ADULTO = 190;

export function findItem(id: string): MenuItem | undefined {
  for (const c of MENU) {
    const f = c.items.find((i) => i.id === id);
    if (f) return f;
  }
  return undefined;
}
