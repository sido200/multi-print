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
      {/* <Question /> */}

      <div className="left">
        <h2>{t("title")}</h2>
        <p>{t("description")}</p>
        <ContactForm />
      </div>

      <div className="right">
        <iframe
          src={
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.172491136201!2d3.2186820762873425!3d36.72804847176269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e502d8729f1c7%3A0xf710a4ffc2dd13ff!2sSarl%20MULTI%20DISTINATIONS%20TOURS!5e1!3m2!1sfr!2sdz!4v1771311406037!5m2!1sfr!2sdz"
          }
          width="400"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location map"
        />
      </div>
    </main>
  );
}
