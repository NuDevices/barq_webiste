import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chip from "../assets/Chip.png"; // Background Image

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    role: "",
    email: "",
    phone: "",
    interest: [] as string[],
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      const checked = target.checked;

      setFormData((prevState) => ({
        ...prevState,
        interest: checked
          ? [...prevState.interest, value]
          : prevState.interest.filter((item) => item !== value),
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("Full Name", formData.fullName);
    formDataToSend.append("Role", formData.role);
    formDataToSend.append("Email", formData.email);
    formDataToSend.append("Phone", formData.phone);
    formDataToSend.append("Interest", formData.interest.join(", "));
    formDataToSend.append("Message", formData.message);

    try {
      const response = await fetch("https://formsubmit.co/e.castelli@barqtech.ae", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        alert("Error sending message.");
      }
    } catch (error) {
      alert("Error sending message.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* ✅ Navbar stays on top */}
      <div className="relative z-50">
        <Header />
      </div>

      {/* ✅ Background Image - Full Height */}
      <div className="absolute inset-0 -z-10">
        <img src={Chip} alt="Background" className="w-full h-full object-cover opacity-40" />
      </div>

      {/* ✅ Contact Form Section - Keeps Footer in Place */}
      <div className="flex-grow flex flex-col items-center justify-center px-6 py-20">
        <div className="relative z-10 bg-white p-10 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-4xl font-bold text-center">Contact Us</h2>
          <p className="text-lg text-gray-600 text-center mb-6">Nudge Tomorrow</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input type="text" name="fullName" placeholder="Full Name" className="w-full p-3 border rounded-lg bg-gray-100" onChange={handleChange} required />
            <input type="text" name="role" placeholder="Role" className="w-full p-3 border rounded-lg bg-gray-100" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" className="w-full p-3 border rounded-lg bg-gray-100" onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Phone" className="w-full p-3 border rounded-lg bg-gray-100" onChange={handleChange} required />

            <div>
              <p className="text-gray-700 font-medium mb-2">Interested in</p>
              {["NUDGEV V-2 PCIe FPGA Starter Kit", "NUDGEV V-20 AI Edge Chip-on-board", "NUDGEV V-20 M.2 AI Edge accelerator module", "NUDGEV V-20 PCIe AI Accelerator card"].map((option) => (
                <label key={option} className="flex items-center space-x-3">
                  <input type="checkbox" value={option} className="form-checkbox h-5 w-5 text-black" onChange={handleChange} />
                  <span>{option}</span>
                </label>
              ))}
            </div>

            <textarea name="message" placeholder="Message" className="w-full p-3 border rounded-lg bg-gray-100" onChange={handleChange} required></textarea>
            <button type="submit" className="w-full bg-[#2CB2DD] text-white px-6 py-3 rounded-lg text-lg hover:bg-[#1A8CB3]">Submit</button>
          </form>
        </div>
      </div>

      {/* ✅ Footer is properly placed at the bottom */}
      <Footer />
    </div>
  );
};

export default Contact;

// <button className="">