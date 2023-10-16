export const Routes = {
  HOME: "/",
  ABOUT: "/about",
  GALLERY: "/gallery",
  PRICE: "/price",
};

export const socialLink = {
  instagram: "https://www.instagram.com/ginger_beauty_zone/",
  facebook: "https://www.facebook.com/profile.php?id=100087405266889",
  booksy: "https://gingerbeautyzone.booksy.com",
  booksyKate:
    "https://booksy.com/pl-pl/162702_ginger-beauty-zone_paznokcie_3_warszawa/staffer/327518#ba_s=dl_1",
  booksyLiza:
    "https://booksy.com/pl-pl/162702_ginger-beauty-zone_paznokcie_3_warszawa/staffer/382645#ba_s=dl_1",
  booksyJana:
    "https://booksy.com/pl-pl/162702_ginger-beauty-zone_paznokcie_3_warszawa/staffer/379598#ba_s=dl_1",
  booksyMaria:
    "https://booksy.com/pl-pl/162702_ginger-beauty-zone_paznokcie_3_warszawa/staffer/339160#ba_s=dl_1",
  google:
    "https://www.google.com/maps/place/Ginger+Beauty+Zone/@52.2464744,21.0659372,17z/data=!3m1!4b1!4m6!3m5!1s0xaf92f0c2cf3a0703:0x97c68627d088282!8m2!3d52.2464744!4d21.0681259!16s%2Fg%2F11k4qz8y7c?authuser=0&hl=uk",
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
  {
    id: 7,
    name: "Pedicure z pododyskem",
    items: [
      {
        id: 1,
        name: "Pedicure + Pomalowanie Hybrydą Jednolity Kolor",
        price: 170,
      },
      {
        id: 2,
        name: "Pedicure + Odżywka",
        price: 140,
      },
      {
        id: 3,
        name: "Pedicure + Zwykły Lakier",
        price: 150,
      },
      {
        id: 4,
        name: "Pedicure + French",
        price: 190,
      },
    ],
  },
  {
    id: 8,
    name: "Pół Pedicure",
    items: [
      {
        id: 1,
        name: "Pół Pedicure + Hybryda Jednolity Kolor",
        price: 140,
      },
      {
        id: 2,
        name: "Pół Pedicure + Zwykły Lakier",
        price: 120,
      },
      {
        id: 3,
        name: "Pół Pedicure + French",
        price: 150,
      },
      {
        id: 4,
        name: "Pół Pedicure + Odżywka",
        price: 110,
      },
    ],
  },
  {
    id: 9,
    name: "Ściąganie Hybrydy",
    items: [
      {
        id: 1,
        name: "Ściąganie Hybrydy + Kształt",
        price: { min: 50, max: 100 },
      },
      {
        id: 2,
        name: "Ściąganie Hybrydy z Nóg",
        price: 30,
      },
      {
        id: 3,
        name: "Ściąganie Żelu",
        price: 60,
      },
    ],
  },
  {
    id: 10,
    name: "Brwi i Rzęsy",
    items: [
      {
        id: 1,
        name: "Regulacja Brwi",
        price: 30,
      },
      {
        id: 2,
        name: "Męska regulacja brwi",
        price: 30,
      },
      {
        id: 3,
        name: "Regulacja Brwi + Farbkalu",
        price: 60,
      },
      {
        id: 4,
        name: "Laminacja brwi + Farbka",
        price: 120,
      },
      {
        id: 5,
        name: "Laminacja rzęs",
        price: 120,
      },
      {
        id: 6,
        name: "Wąsik",
        price: 20,
      },
      {
        id: 7,
        name: "Regulacja brwi + Farbka + Wąsik",
        price: 80,
      },
    ],
  },
  {
    id: 11,
    name: "Makijaż",
    items: [
      {
        id: 1,
        name: "Makijaż wieczorowy",
        price: 190,
      },
      {
        id: 2,
        name: "Makijaż Ślubny",
        price: 230,
      },
      {
        id: 3,
        name: "Makijaż dzienny",
        price: 150,
      },
      {
        id: 4,
        name: "Makijaż okazjonalny",
        price: 150,
      },
    ],
  },
  // Masaż
  // {
  //   id: 12,
  //   name: "Masaż",
  //   items: [
  //     {
  //       id: 1,
  //       name: "Masaż klasyczny całościowy",
  //       price: 200,
  //     },
  //     {
  //       id: 2,
  //       name: "Masaż antycellulitowy modelujący (z bańką)",
  //       price: 150,
  //     },
  //     {
  //       id: 3,
  //       name: "Masaż pleców (leczniczy)",
  //       price: 100,
  //     },
  //     {
  //       id: 4,
  //       name: "Masaż twarzy",
  //       price: 150,
  //     },
  //     {
  //       id: 5,
  //       name: "Masaż antycellulitowy modelujący",
  //       price: 150,
  //     },
  //   ],
  // },
];
