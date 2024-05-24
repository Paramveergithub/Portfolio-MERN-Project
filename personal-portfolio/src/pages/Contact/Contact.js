import React, { useState } from "react";
import "./Contact.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import Spin from "react-reveal/Spin";
import { toast } from "react-toastify";
// import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  // const baseUrl = "http://localhost:8080";

  //handle submit btn
  const sendEmail = async (e) => {
    e.preventDefault();

    let dataSend = {
      name: name,
      email: email,
      msg: msg,
    };

    try {
      if(!name || !email || !msg){
        return toast.error("Please fill all fields.");
      }

      const resp = await fetch("/api/v1/portfolio/sendEmail", {
        method: "POST",
        body: JSON.stringify(dataSend),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      //handling errors
      if (resp.ok) {
        toast.success("Your Message is Sent Successfully!");
        setName("");
        setEmail("");
        setMsg("");
      } else {
        const errorData = await resp.json();
        toast.error(`Error: ${errorData.message}`);
        // throw new Error(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="contact" id="contact">
        <Fade top>
          <div className="card Card0 border-0">
            <Spin>
              <h1 className="col-12 mt-3 mb-1 text-center">CONTACT ME</h1>
            </Spin>
            <hr />
            <div className="row">
              <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                <div className="Card1">
                  <Zoom>
                    <div className="border-line">
                      <img
                        src="../../../contact-us-image.jpg"
                        alt="Contact-img"
                        className="image"
                      />
                    </div>
                  </Zoom>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                <div className="Card2">
                  <div className="row">
                    <div className="row">
                      <h3 className="text-center">
                        Contact With
                        <a href="https://www.linkedin.com/in/paramveer-singh-093642234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><FaLinkedin color="blue" size={36} className="ms-2" /></a>
                        <a href="https://github.com/Paramveergithub" target="_blank" rel="noopener noreferrer"><FaGithub color="black" size={36} className="ms-2" /></a>
                      </h3>
                    </div>
                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center"> OR</small>
                      <div className="line" />
                    </div>
                    <form onSubmit={sendEmail}>
                      <Fade left>
                        <div className="row px-3">
                          <input
                            type="text"
                            name="name"
                            placeholder="write your name"
                            className="mb-3"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div className="row px-3">
                          <input
                            type="email"
                            name="email"
                            placeholder="write your Email Address"
                            className="mb-3"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="row px-3">
                          <textarea
                            type="text"
                            name="msg"
                            placeholder="write your message"
                            className="mb-3"
                            value={msg}
                            onChange={(e) => setMsg(e.target.value)}
                          />
                        </div>
                        <div className="row px-3">
                          <button className="button" type="submit">
                            SEND MESSAGE
                          </button>
                        </div>
                      </Fade>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Contact;
