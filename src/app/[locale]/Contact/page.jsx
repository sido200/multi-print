"use client";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./Contact.css";

import { FiUser, FiPhone } from "react-icons/fi";
import { FaRegFileAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

export default function Contact() {
  const [clickedQuestions, setClickedQuestions] = useState([0]);

  const initialFormData = {
    firstName: "",
    name: "",
    email: "",
    phone: "",
    description: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleClicked = (index) => {
    if (clickedQuestions.includes(index)) {
      setClickedQuestions(clickedQuestions.filter((item) => item !== index));
    } else {
      setClickedQuestions([...clickedQuestions, index]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Submit the formData to an API or do further processing

    // Reset form data after submission
    setFormData(initialFormData);
  };

  const qst = [
    { qst: "Toutes les options du Plan Basique", reponse: "un système de..." },
    {
      qst: "Visibilité sur les réseaux sociaux",
      reponse: "Bénéficiez d'une...",
    },
    {
      qst: "Système de réservation avancé",
      reponse: "Accédez à des fonctionnalités...",
    },
    {
      qst: "Tableau de bord amélioré",
      reponse: "Utilisez des outils de gestion...",
    },
    {
      qst: "Support client standard",
      reponse: "Bénéficiez d'une assistance...",
    },
  ];

  return (
    <main className="contact-page">
      <div className="left">
        <h1>Frequently asked questions</h1>
        <p>Question you might ask about our products and services.</p>
        <div className="question-content">
          {qst.map((item, index) => (
            <div className="question" key={index}>
              <span onClick={() => handleClicked(index)}>
                <p>{item.qst}</p>
                <IoIosArrowForward
                  className={
                    clickedQuestions.includes(index)
                      ? "active-arrow arrow"
                      : " arrow"
                  }
                />
              </span>
              <div
                className={
                  clickedQuestions.includes(index) ? "active-rep rep" : " rep"
                }
              >
                <p>{item.reponse}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="right">
        <h2>Still have questions ?</h2>
        <p>
          Can’t find the answer to you’re looking for? Please contact our
          customer service.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="info-name">
            <div className="input-container">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
              <label>First name</label>
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
              <label>Name</label>
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
            <label>Email address</label>
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
            <label>Phone number</label>
            <FiPhone className="icon-contact" />
          </div>

          <div className="input-container text-area">
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
            <label>Describe</label>
            <FaRegFileAlt className="icon-contact" />
          </div>

          <button type="submit">Send</button>
        </form>
      </div>
    </main>
  );
}
