import ContactForm from "@/components/ContactForm/ContactForm";
import Question from "@/components/Question/Question";
import "./Contact.css";
import { useTranslations } from "next-intl";
export const metadata = {
  title: "Contact",
};
export default function ContactPage() {
  const t = useTranslations("Contact-page");
  return (
    <main className="contact-page">
      <Question />

      <div className="right">
        <h2>{t("title")}</h2>
        <p>{t("description")}</p>
        <ContactForm />
      </div>
    </main>
  );
}
