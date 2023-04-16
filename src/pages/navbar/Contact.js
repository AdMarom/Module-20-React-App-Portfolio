import React, { useState } from "react";


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emptyFieldError, setEmptyFieldError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    setEmptyFieldError("");
    if (!name || !email || !message) {
      setEmptyFieldError("Please fill out all fields.");
      return;
    }
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    // Handle form submission logic here
    console.log(name, email, message);
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };


  return (
    <>
      {submitted ? (
        <div>Thank you for your submission!</div>
      ) : (
    
    <div>
      <h3>Contact</h3>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <div style={{ color: "red" }}>{emailError}</div>}
        </label>
        <br />
        <label>
          Message:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
        {emptyFieldError && <div style={{ color: "red" }}>{emptyFieldError}</div>}
      </form>
    </div>
      )}
      </>
  );
}
export default Contact;
