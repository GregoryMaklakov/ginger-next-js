import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import { LanguageSwitcher } from "../components/LanguageSwitcher";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${montserrat.variable} font-sans`}>
      <LanguageSwitcher />
      <Component {...pageProps} />
    </main>
  );
}
