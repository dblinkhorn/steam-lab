import React from "react";
import ContactForm from "../ContactForm";
import "../ContactForm.css";

const Contact = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='contact__form-outer-container'>
            <ContactForm />
        </div>
    );
};

export default Contact;
