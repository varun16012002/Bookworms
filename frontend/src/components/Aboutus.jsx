import React from 'react';

const AboutUs = () => {
  return (
    <div>
      <style jsx>{`
        /* Container styling */
        .about-container {
          max-width: 1100px;
          margin: 50px auto;
          padding: 20px;
          background-color: #f4f4f9;
          border-radius: 10px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          text-align: center;
          font-family: 'Arial', sans-serif;
        }

        /* Heading styles */
        h1 {
          font-size: 3rem;
          color: #333;
          margin-bottom: 20px;
        }

        h2 {
          font-size: 2rem;
          color: #500;
          margin-bottom: 30px;
        }

        /* Paragraph styling */
        p {
          font-size: 1.2rem;
          color: #666;
          line-height: 1.6;
          margin-bottom: 30px;
        }

        /* Mission Statement */
        .mission-statement {
          font-size: 1.5rem;
          color: #4CAF50;
          font-weight: bold;
          margin-bottom: 40px;
        }

        /* Image styling */
        .about-image {
        margin: auto;
    height: 500px;
    border-radius: 50px;
    margin-bottom: -112px;
    
        }

        /* Button styling */
        .cta-btn {
          padding: 15px 40px;
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 1.2rem;
          cursor: pointer;
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }

        .cta-btn:hover {
          background-color: #45a049;
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        }

        /* Responsive design */
        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem;
          }

          h2 {
            font-size: 1.7rem;
          }

          p {
            font-size: 1rem;
          }

          .cta-btn {
            font-size: 1rem;
            padding: 12px 30px;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 2rem;
          }

          h2 {
            font-size: 1.5rem;
            
          }

          p {
            font-size: 0.9rem;
          }

          .cta-btn {
            font-size: 0.9rem;
            padding: 10px 25px;
          }
        }
      `}</style>

      <div className="about-container">
        <h1>About Us</h1>
        <h2>Welcome to Your Favorite Bookworms</h2>
        <img
          src="https://png.pngtree.com/element_our/20190531/ourlarge/pngtree-cartoon-unbuttoned-book-image_1321550.jpg"
          alt="Bookshelf full of books"
          className="about-image"
        />
        <h2>
        "At our bookstore, every book is a gateway to new worlds, endless imagination, and unforgettable adventures."
          <h5>
              "Discover stories that stay with you forever—because every great journey begins with a single page."
           </h5>
        </h2   >
        <p>
        We believe in the transformative power of books. Our handpicked selection caters to all readers, from the classics that shaped history to the modern bestsellers igniting conversations today. Whether you're seeking the latest must-read or a hidden literary treasure, we’re here to guide you on your next great adventure.
        </p>
        <p className="mission-statement">
          “Our mission is to foster a love for reading and to create a community where books are celebrated.”
        </p>

      </div>
    </div>
  );
};

export default AboutUs;
