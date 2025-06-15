import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Contact = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
         "Let's connect and build something impactful.",
        "Reach out—I'm always open to collaboration.",
        "Got an idea? Let's bring it to life.🚀"
      
        
      ],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true,
    });

    // Cleanup on unmount
    return () => typed.destroy();
  }, []);

  return (
    <section id="contact">
      <h2 className="text-center mb-4">Get in touch</h2>
      <div className="text-center">
        <span ref={typedElement} className="d-block mb-3" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}></span>
        <p> <a href="mailto:githukadanson23@gmail.com">Email</a></p>
        <p> <a href="tel:+254712484071">Phone</a></p>
        <div className="d-flex justify-content-center gap-4 mt-3">
          <a href="https://github.com/DanEinstein" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github" style={{ fontSize: '1.8rem' }}></i>
          </a>
          <a href="https://linkedin.com/in/dansongithuka" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin" style={{ fontSize: '1.8rem' }}></i>
          </a>
          <a href="mailto:githukadanson23@gmail.com">
            <i className="bi bi-envelope" style={{ fontSize: '1.8rem' }}></i>
          </a>
          <a href="https://wa.me/254712484071" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-whatsapp" style={{ fontSize: '1.8rem', color: '#25D366' }}></i>
          </a>
          <a href="https://instagram.com/your_instagram_username" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram" style={{ fontSize: '1.8rem', color: '#C13584' }}></i>
          </a>
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        <div className="col-md-8">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Write your message" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary px-4">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
