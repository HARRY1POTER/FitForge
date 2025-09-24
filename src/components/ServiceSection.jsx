import React from "react";
// import { IoArrowForward } from "react-icons/io5";

const services = [
  {
    id: 1,
    title: "Women’s Course",
    image: "/assets/service-1.svg",
    active: false,
  },
  {
    id: 2,
    title: "Basic Course",
    image: "/assets/service-2.svg",
    active: true,
  },
  {
    id: 3,
    title: "Men’s Course",
    image: "/assets/service-3.svg",
    active: false,
  },
];

const ServiceSection = () => {
  return (
    <section
      id="service"
      aria-label="service"
      className="py-20 bg-white lg:mx-40 lg:my-16"
    >
      <div className="container mx-auto px-4">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ id, title, image, active }) => (
            <li key={id}>
              <div
                className={`text-center px-6 group ${active ? "active" : ""}`}
              >
                {/* Icon Wrapper */}
                <div className="relative w-fit mx-auto p-10 rounded-full bg-gray-100 mb-10 overflow-hidden transition-all duration-500 z-10 group-hover:before:translate-y-0 group-hover:after:translate-y-32 before:absolute before:inset-0 before:bg-teal-500 before:rounded-full before:transition-transform before:duration-500 before:translate-y-32 after:absolute after:inset-0 after:bg-orange-500 after:rounded-full after:transition-transform after:duration-500 after:translate-y-40">
                  <img
                    src={image}
                    alt={title}
                    className="relative z-10 transition duration-300 group-hover:filter group-hover:grayscale group-hover:brightness-0 group-hover:invert"
                    width={80}
                    height={80}
                    loading="lazy"
                  />
                </div>

                {/* Title */}
                <h3 className="text-4xl font-semibold mb-4 text-black">
                  <a
                    href="/"
                    className="transition-colors duration-300 hover:text-orange-500"
                  >
                    {title}
                  </a>
                </h3>

                {/* Text */}
                <p className="text-gray-600 text-sm mb-9">
                  Lorem Ipsum is simply dummy themes industryes psum has been
                  them industry the loep into type setting.
                </p>

                {/* Button */}
                {/* <a
                  href="#"
                  className="w-14 h-14 grid place-content-center bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-all duration-300 mx-auto"
                >
                  <IoArrowForward size={20} />
                </a> */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServiceSection;
