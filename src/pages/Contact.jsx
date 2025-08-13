import React from "react";
import Together from "../components/Contact/Together";
import Address from "../components/Contact/Address";
import ContactForm from "../components/Contact/ContactForm";
import ContactHeader from "../components/Contact/AboutHeader";

const Contact = () => {
  return (
    <div>
      <ContactHeader/>
      <Together />
      <Address />
      <ContactForm />
    </div>
  );
};

export default Contact;
