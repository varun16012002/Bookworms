import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div>
      <style jsx>{`
        /* Styling the container */
        .contact-container {
          max-width: 900px;
          margin: 50px auto;
          padding: 20px;
          text-align: center;
          background: white;
          border-radius: 15px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          font-family: 'Arial', sans-serif;
        }

        /* Heading styles */
        h2 {
          font-size: 3rem;
          margin-bottom: 10px;
          color: black;
        }

        .intro-text {
          font-size: 1.5rem;
          margin-bottom: 30px;
          color: black;
        }

        /* Form styles */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        input[type='text'],
        input[type='email'],
        textarea {
          width: 100%;
          padding: 15px;
          font-size: 1rem;
          border-radius: 5px;
          border: 2px solid #ddd;
          transition: border-color 0.3s ease;
        }

        /* Input hover and focus effect */
        input[type='text']:focus,
        input[type='email']:focus,
        textarea:focus {
          border-color: #4caf50;
          outline: none;
        }

        /* Textarea styling */
        textarea {
          height: 200px;
          resize: none;
        }

        /* Button styles */
        .submit-btn {
          padding: 15px;
          background-color: #4caf50;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 1.2rem;
          cursor: pointer;
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }

        .submit-btn:hover {
          background-color: #45a049;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        /* Responsive styles */
        @media (max-width: 768px) {
          .contact-container {
            padding: 15px;
          }

          h2 {
            font-size: 2rem;
          }

          .intro-text {
            font-size: 1rem;
          }

          input[type='text'],
          input[type='email'],
          textarea {
            font-size: 0.9rem;
          }

          .submit-btn {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .contact-container {
            padding: 10px;
          }

          h2 {
            font-size: 1.8rem;
          }

          .intro-text {
            font-size: 0.9rem;
          }

          input[type='text'],
          input[type='email'],
          textarea {
            font-size: 0.8rem;
            padding: 10px;
          }

          .submit-btn {
            font-size: 0.9rem;
          }
        }
      `}</style>

      <div className="contact-container"  >
        <h2 >Contact Us </h2>
        <p className="intro-text">
        Books are journeys waiting to be discovered. Have a question or need help? We're here to guide you to your next adventure.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
