import React, { useState } from "react";
import Button from "../layouts/Button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = ({ closeForm }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://doctor-backend-henna.vercel.app/api/book",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      console.log("Order Booked successfully");
      toast.success("Appointment booked successfully!", {
        autoClose: 3000,
        onClose: closeForm, 
      });
    } catch (error) {
      // Handle error here
      console.error("Error:", error);
      toast.error("Error booking appointment. Please try again later.");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="popup-form absolute mt-12 text-black">
          <form
            className="w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl"
            onSubmit={handleSubmit}
          >
            <h1 className="text-4xl font-semibold text-center text-backgroundColor">
              Book Now
            </h1>
            <div className="flex flex-col">
              <input
                className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
                type="text"
                name="firstname"
                id="userFirstName"
                placeholder="First Name"
                value={formData.firstname}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <input
                className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
                type="text"
                name="lastname"
                id="userLastName"
                placeholder="Last Name"
                value={formData.lastname}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <input
                className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
                type="email"
                name="email"
                id="userEmail"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <input
                className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
                type="tel"
                name="phone"
                id="userNumber"
                placeholder="Phone No."
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-5">
              <Button title="Book Appointment" type="submit" />
              <ToastContainer />
              <button
                className="bg-backgroundColor text-white px-10 rounded-md bg-orange-400"
                onClick={closeForm}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
