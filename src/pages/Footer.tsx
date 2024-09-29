import logo from "../assets/grammedia-logo.png";

export default function Footer() {
  return (
    <>
      <div className="bg-black text-white">
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
              © Grammedia
              <br />
              All rights reserved.
            </p>
          </div>
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-semibold mb-2">Quick Links</h3>
              <a className="mb-1" href="#">
                Home
              </a>
              <a className="mb-1" href="#">
                About
              </a>
              <a className="mb-1" href="#">
                Products
              </a>
              <a href="#">Contact</a>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-semibold mb-2">Company</h3>
              <a className="mb-1" href="#">
                About
              </a>
              <a className="mb-1" href="#">
                Services
              </a>
              <a className="mb-1" href="#">
                Portfolio
              </a>
              <a href="#">Contact</a>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-semibold mb-2">Connect</h3>
              <a className="mb-1" href="#">
                Facebook
              </a>
              <a className="mb-1" href="#">
                Twitter
              </a>
              <a className="mb-1" href="#">
                Instagram
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/grammer-allen-49a513304/"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
