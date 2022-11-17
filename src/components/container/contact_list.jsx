import React from "react";
import { Contact } from "../../models/contact.class";
import ContactComponent from "../pure/contact";

const ContactListComponent = () => {
  const defaultContact = new Contact(
    "Nicolas",
    "Misseri",
    "nicomisseri1@gmail.com",
    false
  );

  return (
    <div>
      <h1>Your contacts:</h1>
      <ContactComponent contact={defaultContact}></ContactComponent>
    </div>
  );
};

export default ContactListComponent;
