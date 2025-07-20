import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import InputField from "./InputField";

const NewsletterPopup = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 15000);
    return () => clearTimeout(timer);
  }, []);

  const subscribed = () => {
    toast.success("Subscribed successfully!");
    setShow(false);
  };

  const notSubscribed = () => {
    toast.info("Make sure you subscribe next time!");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded max-w-sm w-full relative">
        <button
          onClick={notSubscribed}
          className="absolute top-2 right-2 text-xl"
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold mb-4">Sign up to our Newsletter</h2>
        <InputField
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button
          onClick={subscribed}
          className="bg-blue-600 text-white px-4 py-2 w-full"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsletterPopup;
