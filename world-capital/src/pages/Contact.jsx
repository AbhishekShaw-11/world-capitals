import React from "react";

const handleFormSubmit=(formData)=>{
  const formInputData = Object.fromEntries(formData.entries());
  //console.log(formInputData)
}
const Contact = () => {
  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            required
            placeholder="Enter your name"
            name="username"
            autoComplete="false"
          />
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email address"
            name="email"
            required
            autoComplete="false"
          />
          <textarea
            className="form-control"
            rows="10"
            placeholder="Enter your message"
            name="message"
            autoComplete="false"
          ></textarea>
          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
