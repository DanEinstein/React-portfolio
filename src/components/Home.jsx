import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function Home() {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        "Frontend Developer",
        "React Enthusiast",
        "Coding Consultant",
        "Tech Explorer 🚀"
      ],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true,
    });

    // Cleanup on unmount
    return () => typed.destroy();
  }, []);

  return (
    <section id="home" className="d-flex align-items-center justify-content-center vh-100 text-center bg-light">
      <div>
        <h1 className="display-4 fw-bold">Hi, I'm Danson Githuka</h1>
        <h2 className="lead">
          <span ref={typedElement}></span>
        </h2>
        <a href="#contact" className="btn btn-primary mt-4">Get In Touch</a>
      </div>
    </section>
  );
}

export default Home;
