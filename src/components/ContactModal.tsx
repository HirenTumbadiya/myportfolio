import React, { useState } from "react";
import Modal from "react-modal";

interface ContactModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onRequestClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Contact Form Modal"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          maxWidth: "400px",
          maxHeight: '410px',
          width: "100%",
          height: "100%",
          margin: "auto",
          borderRadius: "20px"
        },
      }}
    >
      <h2 className=" text-2xl font-bold underline">Contact Form</h2>
      <p className=" text-sm font-medium">Lets get in touch</p>
      <form onSubmit={handleSubmit} className=" py-5">
        <div className="mb-4">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Name:"
            className=" border-2 px-2 py-1 border-grey w-full rounded-md"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email:"
            className=" border-2 px-2 py-1 border-grey w-full rounded-md"
          />
        </div>
        <div className="mb-4">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
            placeholder="Send Message."
            className=" border-2 px-2 py-1 border-grey w-full rounded-md"
          />
        </div>
        <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white w-full px-4 py-2 rounded-md">
          Send
        </button>
      </form>
    </Modal>
  );
};

export default ContactModal;
