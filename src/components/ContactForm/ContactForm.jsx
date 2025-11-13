"use client";
import { useEffect, useState } from "react";
import { FiUser, FiPhone } from "react-icons/fi";
import { FaRegFileAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import Swal from "sweetalert2";
import { createContact, getEmail } from "@/app/services/contact";
import { useTranslations } from "next-intl";
import emailjs from "@emailjs/browser";


const initialFormData = {
  firstname: "",
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);
  const t = useTranslations("Contact-page");

  const handleInputChange = (e) => {

    const { name, value } = e.target;
    console.log(name, value)
    setFormData({ ...formData, [name]: value });
  };

  const [email, setEmail] = useState("");
  useEffect(() => {
    getEmail().then((response) => {
      setEmail(response.data.email);
    }).catch((error) => {
      console.error("Error fetching email:", error);
    });
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createContact(formData);
      console.log("FORMDDATAMESSAGE::", formData.message)
      // send email via EmailJS
      await emailjs.send(
        "service_rt5qfza",
        "template_4bv9nvm",
        {
          form_name: formData.name,
          form_lastname: formData.firstname,
          form_phone: formData.phone,
          from_email: formData.email,
          message: formData.message,
          to_email: email
        },
        "r3PDiq8_Pbn6n8wkt"
      );

      setFormData(initialFormData);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your Email has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="info-name">
        <div className="input-container">
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
            required
          />
          <label>{t('first-name')}</label>
          <FiUser className="icon-contact" />
        </div>
        <div className="input-container">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <label>{t('name')}</label>
          <FiUser className="icon-contact" />
        </div>
      </div>

      <div className="input-container">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <label>{t('email')}</label>
        <MdAlternateEmail className="icon-contact" />
      </div>

      <div className="input-container">
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
        <label>{t('phone')}</label>
        <FiPhone className="icon-contact" />
      </div>

      <div className="input-container text-area">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
        />
        <label> {t('describ')}</label>
        <FaRegFileAlt className="icon-contact" />
      </div>

      <button type="submit">{t('send')}</button>
    </form>
  );
}
