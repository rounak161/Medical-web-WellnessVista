import React from "react";
import img from "../assets/img/about.jpeg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">
          About Us
        </h1>
        <p className=" text-justify lg:text-start">
          Welcome to InHeal, where we're revolutionizing the way mental health
          care is accessed and delivered. In a world where stressors are
          abundant and mental health concerns are on the rise, we understand the
          critical need for convenient, accessible, and effective therapy
          services.
        </p>
        <p className="text-justify lg:text-start">
          InHeal is your dedicated partner in prioritizing mental wellness,
          offering seamless connections between individuals seeking support and
          qualified therapists ready to provide compassionate care.
        </p>
        <p className="text-justify lg:text-start">
          At InHeal, we believe in breaking down barriers to mental health care
          by leveraging technology to connect individuals with the right
          therapist for their needs. Our platform utilizes cutting-edge matching
          algorithms to pair clients with licensed professionals who specialize
          in areas such as anxiety, depression, trauma, and more. With flexible
          scheduling options and a range of therapeutic modalities available, we
          empower individuals to take control of their mental health journey and
          embark on a path towards healing and growth. Join us in transforming
          the landscape of mental health care, one connection at a time.
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
