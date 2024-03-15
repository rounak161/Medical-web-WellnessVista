import React from "react";
import Button from "../layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "../layouts/ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

const Services = () => {
  const icon1 = (
    <RiMicroscopeLine size={35} className=" text-backgroundColor" />
  );
  const icon2 = (
    <MdHealthAndSafety size={35} className=" text-backgroundColor" />
  );
  const icon3 = <FaHeartbeat size={35} className=" text-backgroundColor" />;

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Our Services
          </h1>
        </div>
        <div className=" mt-4 lg:mt-0">
          {/* <Button title="See Services" /> */}
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row gap-5 pt-14">
        <ServicesCard
          icon={icon1}
          description="Say goodbye to long wait times and inconvenient office visits. With InHeal, you can access therapy from the comfort of your own home, office, or anywhere with an internet connection. Our virtual platform makes it easy to schedule sessions that fit seamlessly into your busy lifestyle."
          title="Convenience"
        />
        <ServicesCard
          icon={icon2}
          description="We believe in the power of human connection and the importance of building a trusting therapeutic relationship. That's why we carefully vet all of our therapists to ensure they meet our rigorous standards of professionalism, expertise, and compassion. You can rest assured that you'll receive high-quality care from a licensed professional who genuinely cares about your well-being."
          title="Quality Care"
        />
        <ServicesCard
          icon={icon3}
          description="Your privacy is our top priority. Our platform is designed with state-of-the-art security features to protect your personal information and ensure that your therapy sessions remain confidential. You can feel confident knowing that you're engaging in a safe and secure therapeutic environment."
          title="Privacy and Security"
        />
      </div>
    </div>
  );
};

export default Services;
