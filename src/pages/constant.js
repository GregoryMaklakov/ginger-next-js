export const Routes = {
  HOME: "/",
  ABOUT: "/about",
  GALERY: "/galery",
  BLOG: "/blog",
};

export const priceListData = [
  {
    id: 1,
    name: "Manicure Hybrydowy z Usunięciem Hybrydy",
    items: [
      { id: 1, name: "Manicure Hybrydowy + Jednolity Kolor", price: 130 },
      {
        id: 2,
        name: "Manicure Hybrydowy + Ombre lub BabyBoomer",
        price: 160,
      },
      {
        id: 3,
        name: "Manicure Hybrydowy + Zdobienie",
        price: { min: 150, max: 170 },
      },
      { id: 4, name: "Manicure Hybrydowy + French Hybrydą", price: 160 },
      { id: 5, name: "Utwardzenie Płytki Żelem", price: 20 },
      {
        id: 6,
        name: "Manicure Hybrydowy z Usunięciem + Peeling Rąk",
        price: 140,
      },
    ],
  },
  {
    id: 2,
    name: "Manicure",
    items: [
      { id: 1, name: "Manicure + Odżywka", price: 80 },
      { id: 2, name: "Manicure z Pomalowaniem Zwykły Lakier", price: 100 },
      { id: 3, name: "Peeling Rąk + Masaż", price: 25 },
    ],
  },
  {
    id: 3,
    name: "Manicure Męski",
    items: [{ id: 1, name: "Manicure Męski", price: 80 }],
  },
  {
    id: 4,
    name: "Manicure Hybrydowy Czysta Płytka",
    items: [
      {
        id: 1,
        name: "Czysta Płytka Hybryda + Jednolity Kolor",
        price: 120,
      },
      {
        id: 2,
        name: "Hybryda + French",
        price: 150,
      },
      {
        id: 3,
        name: "Manicure hybrydowy + Ombre lub BabyBoomer",
        price: 150,
      },
      {
        id: 4,
        name: "Manicure hybrydowy + Zdobienie",
        price: { min: 140, max: 160 },
      },
    ],
  },
  {
    id: 5,
    name: "Przedłużenie Paznokci, Paznokcie Żelowe",
    items: [
      {
        id: 1,
        name: "Żel na Szablonie + Hybryda Jednolity Kolor",
        price: 210,
      },
      {
        id: 2,
        name: "Żel na Szablonie + French Hybryda",
        price: 250,
      },
      {
        id: 3,
        name: "Żel na Szablonie + Ombre Hybryda",
        price: 240,
      },
    ],
  },
  {
    id: 6,
    name: "Uzupełnienie Żelu",
    items: [
      {
        id: 1,
        name: "Uzupełnienie Żelu + Hybryda Jednolity Kolor",
        price: 170,
      },
      {
        id: 2,
        name: "Uzupełnienie Żelu + Ombre",
        price: 190,
      },
      {
        id: 3,
        name: "Uzupełnienie Żelu + Zdobienie",
        price: { min: 190, max: 200 },
      },
      {
        id: 4,
        name: "Uzupełnienie Żelu + French",
        price: 190,
      },
    ],
  },
];
