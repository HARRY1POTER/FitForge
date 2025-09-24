import React from "react";
import { FaFacebookF, FaSkype, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      aria-label="hero"
      className="w-full min-h-[900px] bg-cover bg-no-repeat bg-center flex items-center text-center sm:text-left"
      style={{ backgroundImage: "url('/assets/hero-banner.jpg')" }}
    >
      <div className="container mx-auto px-4 sm:px-8 md:pl-16 lg:pl-32 xl:pl-40 mt-30 space-y-8">
        {/* Subtitle */}
        <p className="uppercase text-teal-600 text-lg font-bold tracking-widest">
          Fitness & Nutrition
        </p>

        {/* Title with line breaks */}
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mt-4 mb-6 leading-tight whitespace-pre-line">
          {`This life style for\nyour fitness, not\nonly diet.`}
        </h1>

        {/* Description */}
        <p className="text-gray-800 font-semibold max-w-xl mx-auto sm:mx-0 text-xl">
          It has survived not only five centuries but also
        </p>

        {/* CTA Button */}
        <a
          href="/"
          className="inline-block mt-6 mb-8 bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-900 transition"
        >
          Start Course
        </a>

        {/* Social Links */}
        <div className="flex justify-center sm:justify-start items-center gap-4 flex-wrap">
          <p className="text-gray-800 text-sm font-semibold">
            Connect with us:
          </p>

          <ul className="flex items-center gap-3">
            {[FaFacebookF, FaSkype, FaTwitter, FaLinkedinIn].map((Icon, i) => (
              <li key={i}>
                <a
                  href="/"
                  className="w-12 h-12 flex items-center justify-center border-2 border-green-700 rounded-full text-gray-800 hover:text-white hover:bg-teal-500 transition"
                >
                  <Icon size={16} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
