import { socialLink } from "./constant";

export const employeeData = [
  {
    id: 1,
    name: "Kasia",
    position: "Stylistka paznokci",
    booksyLink: socialLink.booksyKate,
    imageSrc: "/images/about/about-serhii.jpeg",
  },
  {
    id: 2,
    name: "Jana",
    position: "Stylistka paznokci",
    booksyLink: socialLink.booksyJana,
    imageSrc: "/images/about/about-serhii.jpeg",
  },
  {
    id: 3,
    name: "Maria",
    position: "Stylistka paznokci",
    booksyLink: socialLink.booksyMaria,
    imageSrc: "/images/about/about-serhii.jpeg",
  },
  {
    id: 4,
    name: "Liza",
    position: "Brwi / Rzęsy / Make up",
    booksyLink: socialLink.booksyLiza,
    imageSrc: "/images/about/about-serhii.jpeg",
  },
];

export const hiringEmployeesData = [
  {
    slug: "mani-offer",
    title: "Manikiurzystka - Stylistka paznokci",
    gradientWord: "Stylistka",
    subtitle: "Pełny etat",
    disabled: false,
    imgURL: "/images/work/offers/offer-01.jpg",

    resultThree: [
      {
        name: "Dlaczego Ginger Beauty Zone?",
        data: [
          {
            before: "wynagrodzenie od",
            amount: "6000 ",
            subtitle: "PLN/m + premie za wyniki",
          },
          {
            before: "ponad",
            amount: "1480",
            subtitle: "zadowolonych klientów",
          },
          {
            before: "ponad",
            amount: "41000",
            subtitle: "wykonanych usług",
          },
        ],
      },
    ],

    blockAccordion: [
      {
        heading: "Stylistka paznokci",
        data: [
          {
            num: "/",
            subtitle: "O nas",
            text: "Ginger Beauty Zone to dynamiczny i profesjonalny salon piękności w centrum Warszawy, znany z wysokiej jakości usług i przyjaznej atmosfery. Nasza misja to nie tylko dbanie o piękno naszych klientów, ale także zapewnienie najlepszych warunków pracy dla naszego zespołu.",
          },
          {
            num: "/",
            subtitle: "Kogo Szukamy",
            text: "Poszukujemy doświadczonego Specjalisty od Manicure i Pedicure, który dołączy do naszego zespołu. Jeśli masz pasję do swojej pracy, chcesz się rozwijać i lubisz pracować w przyjaznym środowisku, ta oferta jest dla Ciebie!",
          },
        ],
      },
    ],
    servicesAdvantage: {
      heading: "Twój zakres obowiązków:",
      list: [
        "Perfekcyjne wykonywanie zabiegów manicure i pedicure (klasyka, kombinacja, wzmocnienie).",
        "Umiejętność tworzenia prostych wzorów.",
        "Minimum 6 mes doświadczenia na podobnym stanowisku.",
        "Umiejętności komunikacyjne.",
        "Chęć ciągłego rozwoju i nauki nowych technik",
      ],
    },
    // Services Advantage Second
    servicesAdvantageSecond: {
      heading: "Co Oferujemy:",
      list: [
        "Atrakcyjne wynagrodzenie od 6000 PLN i premie za wyniki.",
        "Pełny etat i oficjalne zatrudnienie.",
        "Materiały studia i profesjonalny rozwój.",
        "Świetną atmosferę pracy i regularne imprezy korporacyjne.",
        "Wygodne miejsce pracy.",
      ],
    },
  },
  {
    slug: "eyebrow-lash-offer",
    title: "Stylista Brwi, Rzęs / Wizażysta",
    gradientWord: "Stylista",
    subtitle: "Pełny etat",
    disabled: true,
  },
  {
    slug: "administrator-offer",
    title: "Administrator",
    gradientWord: "Administrator",
    subtitle: "Pełny etat",
    disabled: true,
  },
];
