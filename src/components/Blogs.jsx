import React from "react";
import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";
import img1 from "../assets/img/img1.jpeg";
import img2 from "../assets/img/img2.jpeg";
import img3 from "../assets/img/img3.jpeg";
import img4 from "../assets/img/img4.jpeg";
import img5 from "../assets/img/img5.jpeg";
import img6 from "../assets/img/img6.jpeg";

const Blogs = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Latest Post
          </h1>
        </div>
        <div className=" mt-4 lg:mt-0">
          {/* <Button title="Our Articles" /> */}
        </div>
      </div>
      <div className=" my-8">
        <div className=" flex flex-wrap justify-center gap-5">
          <BlogCard
            img={img1}
            description="Mental health is a fundamental aspect of overall well-being, yet it's often overlooked or neglected. We recognize that mental health challenges can impact every aspect of a person's life, from their relationships and work performance to their physical health and quality of life."
            headlines="Unraveling the Mysteries of Sleep"
          />
          <BlogCard
            img={img2}
            description="By prioritizing mental wellness and seeking support when needed, individuals can cultivate resilience, improve coping skills, and lead happier, more fulfilling lives."
            headlines="The Heart-Healthy Diet"
          />
          <BlogCard
            img={img3}
            description="Our platform allows individuals to browse through a diverse network of licensed therapists, read their profiles, and schedule virtual therapy sessions that fit their needs and preferences."
            headlines="Understanding your Real Problems"
          />
          <BlogCard
            img={img4}
            description="Whether you're struggling with anxiety, depression, trauma, or any other mental health issue, we'll match you with a qualified therapist who can provide personalized support and guidance."
            headlines="Navigating Mental Health"
          />
          <BlogCard
            img={img5}
            description=" Say goodbye to long wait times and inconvenient office visits. With InHeal, you can access therapy from the comfort of your own home, office, or anywhere with an internet connection."
            headlines="The Importance of Regular Exercise"
          />
          <BlogCard
            img={img6}
            description="We believe in the power of human connection and the importance of building a trusting therapeutic relationship."
            headlines="Skin Health 101"
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
