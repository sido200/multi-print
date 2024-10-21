import { Outfit } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: {
    absolute: "",
    default: "MultiPrint",
    template: "%s | MultiPrint",
  },
  description: "Bienvenue sur MultiPrint, votre solution d'emballage",
};

export default async function LocaleLayout({ children, params: { locale } }) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={outfit.className}>
        <NextIntlClientProvider messages={messages}>
          <NavBar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
