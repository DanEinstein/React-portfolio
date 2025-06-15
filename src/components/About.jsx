import React from 'react';
import profileImage from '../assets/DansonProfile.jpeg'; // Ensure this image is square or let CSS handle it

function About() {
  return (
    <section id="about" className="container my-5">
      <h2 className="text-center mb-4">About Me</h2>
      <div className="row align-items-center">
        {/* Text first on large screens */}
        <div className="col-md-9 order-2 order-md-1">
          <p>
            I am a tenacious, self-taught frontend artisan — architecting digital interfaces that merge clarity, culture, and clean code. While pursuing my degree at <strong>Maseno University</strong>, I transform learning into creation through projects like <strong>EXAECHO</strong>, a platform that promotes academic equity through technology.
          </p>
          <p>
            My development philosophy is inspired by builders like <strong>Michael Munavu</strong>, whose full-stack mastery fuels my drive to deliver elegant, end-to-end solutions. Success in innovation-led hackathons has strengthened my belief that code, at its best, solves with intention and speaks with purpose.
          </p>
          <p>
            I'm currently seeking opportunities to contribute to impactful projects that challenge convention and elevate user experiences. Let’s connect and explore how we can build meaningful digital solutions together.
          </p>
        </div>

        {/* Image to the right on large screens */}
        <div className="col-md-3 text-center order-1 order-md-2 mb-4 mb-md-0">
          <img
            src={profileImage}
            alt="Danson Githuka"
            className="img-fluid rounded-circle shadow"
            style={{ width: '200px', height: '200px', objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
