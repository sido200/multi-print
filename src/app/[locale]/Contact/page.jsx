"use client";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./Contact.css";

import { FiUser, FiPhone } from "react-icons/fi";
import { FaRegFileAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
export default function Contact() {
  const [clickedQuestions, setClickedQuestions] = useState([0]);
  const handleClicked = (index) => {
    if (clickedQuestions.includes(index)) {
      setClickedQuestions(clickedQuestions.filter((item) => item !== index));
    } else {
      setClickedQuestions([...clickedQuestions, index]);
    }
  };

  const qst = [
    {
      qst: "Toutes les options du Plan Basique",
      reponse:
        "un système de réservation en ligne sécurisé, et un tableau de bord intuitif pour gérer vos réservations. Personnalisez votre profil avec des photos et descriptions, et recevez des notifications par e-mail pour chaque nouvelle réservation",
    },
    {
      qst: "Visibilité sur les réseaux sociaux",
      reponse:
        "Bénéficiez d'une promotion sur nos comptes de réseaux sociaux pour augmenter votre visibilité et atteindre un public plus large. Profitez de notre présence en ligne pour attirer plus de clients potentiels.",
    },
    {
      qst: "Système de réservation avancé",
      reponse:
        "Accédez à des fonctionnalités de réservation supplémentaires, telles que la personnalisation des options de réservation et la gestion des paiements. Offrez une expérience de réservation fluide et professionnelle à vos clients.",
    },
    {
      qst: "Tableau de bord amélioré",
      reponse:
        "Utilisez des outils de gestion avancés pour une analyse plus approfondie de vos performances. Obtenez des rapports détaillés, suivez les tendances de réservation et optimisez vos opérations quotidiennes.",
    },
    {
      qst: "Support client standard",
      reponse:
        "Bénéficiez d'une assistance par e-mail et téléphone pour résoudre rapidement vos problèmes et répondre à vos questions. Notre équipe est là pour vous aider à tirer le meilleur parti de nos outils.",
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
          Can’t find the answer to you’re looking for? Please contact with our
          costumer service.
        </p>
        <form action="">
          <div className="info-name">
            <div className="input-container">
              <input type="text" required />

              <label>First name</label>
              <FiUser className="icon-contact" />
            </div>
            <div className="input-container">
              <input type="text" required />

              <label> Name</label>
              <FiUser className="icon-contact" />
            </div>
          </div>
        
            <div className="input-container">
              <input type="text" required />

              <label>Email address</label>
              <MdAlternateEmail className="icon-contact" />
            </div>
         
         
            <div className="input-container">
              <input type="text" required />

              <label>Phone number</label>
              <FiPhone className="icon-contact" />
            </div>
          
            <div className="input-container text-area" >
            <textarea type="text" required />

            <label>describe</label>
            <FaRegFileAlt className="icon-contact" />
          </div>
          <button>Send</button>
        </form>
      </div>
    </main>
  );
}
