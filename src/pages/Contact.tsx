import React, { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "../pages/about.css";

const MySwal = withReactContent(Swal);

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_s6oxlgg",
          "template_1m3235e",
          form.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            MySwal.fire({
              title: "Success!",
              text: "Your message has been sent.",
              icon: "success",
              confirmButtonText: "OK",
            });
          },
          (error) => {
            MySwal.fire({
              title: "Error!",
              text: `Failed to send the message: ${error.text}`,
              icon: "error",
              confirmButtonText: "Try Again",
            });
          }
        );
    }
  };

  return (
    <div className="bg-black p-10">
      <div className="flex justify-center items-center mt-8 p-8 h-screen bg-black text-white">
        <StyledContactForm>
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex space-x-3">
              <div className="">
                <label>Full name</label>
                <input type="text" name="user_name" required />
              </div>
              <div className="">
                <label>EMAIL ADDRESS</label>
                <input type="email" name="user_email" required />
              </div>
            </div>
            <div className="flex space-x-3">
              <div className="">
                <label>BUSINESS NAME</label>
                <input type="text" name="business_name" required />
              </div>
              <div className="">
                <label>WEBSITE OR SOCIAL MEDIA</label>
                <input type="text" name="website_or_socialmedia" id=""></input>
              </div>
            </div>
            <label>PROJECT DESCRIPTION</label>
            <textarea name="project_description_message" required />
            <label>HOW DID YOU HEAR ABOUT US?</label>
            <textarea name="how_did_you_hear_about_us_message" />
            <input
              className="bg-cyan-300 hover:bg-cyan-900"
              type="submit"
              value="Send"
            />
          </form>
        </StyledContactForm>
      </div>
    </div>
  );
};

export default Contact;

const StyledContactForm = styled.div`
  width: 600px;
  padding: 1rem;

  label {
    margin-top: 1rem;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    width: 100%;
    font-size: 16px;

    input,
    textarea {
      width: 100%;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      margin-top: 5px;
      color: black;

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;

      color: black;
      border: none;
    }
  }
`;
