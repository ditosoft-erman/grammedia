import logo from "../assets/grammedia-logo.png";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <div className="bg-black text-white">
        <div className="bg-black h-full flex justify-center">
          <div className="w-3/4 h-0.5 bg-white my-4"></div>
        </div>
        <footer className="flex flex-col md:flex-row justify-evenly items-center p-8">
          <div className="flex flex-col items-center mb-8 md:mb-0 md:mr-16">
            <img
              alt="Company Logo"
              className="mb-4"
              height="100"
              src={logo}
              width="100"
            />
            <p className="text-sm text-center">
              ©Grammedia
              <br />
              All rights reserved.
            </p>
          </div>
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-semibold mb-2 text-center text-2xl w-full">
                Connect
              </h3>
              <div className="flex justify-between">
                <a
                  className="mb-1"
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61552804718480"
                >
                  <AiFillFacebook size={30} />
                </a>
                <a className="mb-1" href="#">
                  <AiFillTwitterCircle size={30} />
                </a>
                <a
                  className="mb-1"
                  target="_blank"
                  href="https://www.instagram.com/grammediaofficial/"
                >
                  <AiFillInstagram size={30} />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/grammer-allen-49a513304/"
                >
                  <AiFillLinkedin size={30} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
