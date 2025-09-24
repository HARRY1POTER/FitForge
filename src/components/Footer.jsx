import React from "react";
import { IoLocationSharp, IoCall, IoMail } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoIosClock } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <footer className="text-sm bg-green-800 text-gray-200 font-sans lg:px-40">
        {/* Footer Top */}
        <div
          className="section footer-top bg-cover bg-center relative py-16"
          style={{
            backgroundImage: "url('/assets/footer-bg.png')",
          }}
        >
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand / Contact / Hours */}
            <div className="footer-brand">
              <a
                href="/"
                className="flex items-center text-white text-2xl font-bold"
              >
                <ion-icon name="barbell-sharp" className="mr-2"></ion-icon>
                <span className="text-orange-400">FitForge</span>
              </a>

              <p className="mt-6 mb-6 text-gray-300">
                Etiam suscipit fringilla ullamcorper sed malesuada urna nec
                odio.
              </p>

              <div className="flex items-start gap-4">
                <IoIosClock
                  //   src="/assets/footer-clock.png"
                  width="34"
                  height="34"
                  alt="Clock"
                  size={50}
                  className="flex-shrink-0 text-orange-200"
                />

                <ul className="space-y-4 text-gray-200">
                  <li>
                    <p className="font-semibold text-lg text-white">
                      Monday - Friday
                    </p>
                    <p>7:00Am - 10:00Pm</p>
                  </li>
                  <li>
                    <p className="font-semibold text-lg text-white">
                      Saturday - Sunday
                    </p>
                    <p>7:00Am - 2:00Pm</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Our Links */}
            <div>
              <p className="footer-list-title relative inline-block pb-2 mb-6 text-orange-400 font-extrabold text-lg before:absolute before:content-[''] before:bottom-0 before:left-0 before:w-16 before:h-[1px] before:bg-red-500">
                Our Links
              </p>
              <ul className="space-y-3">
                {["Home", "About Us", "Classes", "Blog", "Contact Us"].map(
                  (link, idx) => (
                    <li key={idx}>
                      <a
                        href="/"
                        className="footer-link text-gray-200 hover:text-red-500 transition"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Contact Us List */}
            <div>
              <p className="footer-list-title relative inline-block pb-2 mb-6 text-orange-400 font-extrabold text-lg before:absolute before:content-[''] before:bottom-0 before:left-0 before:w-16 before:h-[1px] before:bg-red-500">
                Contact Us
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="icon bg-red-500 text-white p-2 rounded-full text-xl">
                    <IoLocationSharp />
                  </div>
                  <address className="not-italic text-gray-200">
                    1247/Plot No. 39, 15th Phase, Colony, Kukatpally, Hyderabad
                  </address>
                </li>
                <li className="flex items-start gap-4">
                  <div className="icon bg-red-500 text-white p-2 rounded-full text-xl">
                    <IoCall />
                  </div>
                  <div className="space-y-1">
                    <a
                      href="tel:18001213637"
                      className="hover:text-red-500 transition"
                    >
                      1800-121-3637
                    </a>
                    <a
                      href="tel:+915552348765"
                      className="hover:text-red-500 transition"
                    >
                      +91 555 234‑8765
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="icon bg-red-500 text-white p-2 rounded-full text-xl">
                    <IoMail />
                  </div>
                  <div className="space-y-1">
                    <a
                      href="mailto:info@fitlife.com"
                      className="hover:text-red-500 transition"
                    >
                      info@fitlife.com
                    </a>
                    <a
                      href="mailto:services@fitlife.com"
                      className="hover:text-red-500 transition"
                    >
                      services@fitlife.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Newsletter + Social */}
            <div>
              <p className="footer-list-title relative inline-block pb-2 mb-6 text-orange-400 font-extrabold text-lg before:absolute before:content-[''] before:bottom-0 before:left-0 before:w-16 before:h-[1px] before:bg-red-500">
                Our Newsletter
              </p>

              <form className="footer-form relative mb-6">
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="input-field w-full rounded-2xl py-3 px-6 pr-24 text-orange-400 bg-white"
                />
                <button
                  type="submit"
                  className="btn-primary absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
                >
                  <ion-icon name="chevron-forward-sharp"></ion-icon>
                </button>
              </form>

              <ul className="social-list flex gap-4">
                <li>
                  <a
                    href="/"
                    className="bg-white/20 text-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-orange-400 transition"
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="bg-white/20 text-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-orange-400 transition"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="bg-white/20 text-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-orange-400 transition"
                  >
                    <FaTwitter />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
      </footer>
      <div className="footer-bottom bg-green-900 text-gray-300 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm gap-4">
          <p>
            &copy; {new Date().getFullYear()} FitForge. All Rights Reserved
            {/* <a href="/" className="text-red-500 hover:underline">
              codewithsadee.
            </a> */}
          </p>
          <ul className="footer-bottom-list flex gap-4">
            <li>
              <a
                href="/"
                className="footer-bottom-link relative pl-4 hover:text-orange-400 before:absolute before:content-[''] before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-orange-400 before:rounded-full transition"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="footer-bottom-link relative pl-4 hover:text-orange-400 before:absolute before:content-[''] before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-orange-400 before:rounded-full transition"
              >
                Terms & Condition
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
