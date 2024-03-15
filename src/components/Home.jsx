import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className="  bg-[url('assets/img/home.jpeg')] bg-opacity-90 bg-no-repeat bg-cover">
      <div className=" min-h-screen bg-emerald-200 bg-opacity-30 flex flex-col  justify-center lg:px-32 px-5 text-white">
        <div className=" w-full lg:w-4/5 space-y-5 mt-10">
          <h1 className="text-5xl font-bold leading-tight">
            Empowering Health Choices for a Vibrant Life Your Trusted..
          </h1>
          <p className="font-medium">
            At InHeal, our mission is to bridge the gap in mental health care by
            providing a user-friendly platform that connects individuals with
            licensed therapists for virtual therapy sessions. We believe that
            everyone deserves access to quality mental health care, regardless
            of their location, schedule, or budget.
          </p>

          {/* <Button title="See Services" /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
