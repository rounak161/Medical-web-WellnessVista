import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className=" bg-backgroundColor text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">WellnessVista</h1>
          <p className=" text-sm">
            Our team of dedicated doctors, each specializing in unique fields
            such as orthopedics, cardiology, pediatrics, neurology, dermatology,
            and more.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">About Us</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              About
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="doctors"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Doctors
            </Link>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Services</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Convenience
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Quality Care
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Privacy and Security
            </Link>
          </nav>
        </div>
        <div className=" w-full md:w-1/4">
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <Link to="/" spy={true} smooth={true} duration={500}>
              Rounak Kamble, IIT Bhilai
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              rounakr@iitbhilai.ac.in
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              +91 93567 97787
            </Link>
          </nav>
        </div>
      </div>
      <div>
        <p className=" text-center py-4">
          @copyright developed by
          <span className=" text-hoverColor"> InHeal Dev Team</span> | All
          rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
