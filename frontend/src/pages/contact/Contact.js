import React, { useState } from "react";
import Card from "../../components/card/Card";
import "./Contact.scss";
import { FaWhatsapp, FaEnvelope, FaGithub } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { toast } from "react-toastify";
import axios from "axios";
import { BACKEND_URL } from "../../services/authService";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const data = {
    subject,
    message,
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BACKEND_URL}/api/contactus`, data);
      setSubject("");
      setMessage("");
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="contact">
      <h3 className="--mt">Contact Me</h3>
      <div className="section">
        <form onSubmit={sendEmail}>
          <Card cardClass="card">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <label>Message</label>
            <textarea
              cols="30"
              rows="10"
              name="message"
              required
              rez
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button className="--btn --btn-primary">Send Message</button>
          </Card>
        </form>

        <div className="details">
          <Card cardClass={"card2"}>
            <h3>My Contact Information</h3>
            <p>
              Fill the form or contact me, via other channels listed below :
            </p>

            <div className="icons">
              <span>
                <FaWhatsapp size={15} />
                <p>11-6423-6675</p>
              </span>
              <span>
                <FaEnvelope size={15} />
                <p>agustinsosa.dev@gmail.com</p>
              </span>
              <span>
                <GoLocation size={15} />
                <p>Buenos Aires, Argentina</p>
              </span>
              <span>
                <FaGithub size={15} />
                <p>https://github.com/AgustinSosa-Dev</p>
              </span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
