import React from 'react';
import edyfraImg from '../assets/Edyfra logo.jpeg';
import exaechoImg from '../assets/EXAECHO_logo.jpg';
import lawfirmImg from '../assets/Screenshot 2025-06-12 235449.png';
import jiraniimg from '../assets/jirani Eats pic.png';

const projects = [
  {
    title: "Edyfra",
    description: "Edyfra is an education-focused web platform built to support Kenya's Competency-Based Curriculum (CBC). It allows students to input their academic results and intelligently matches them with ideal peer study partners based on subject strengths and weaknesses. The system promotes collaborative learning and academic growth through tailored student pairings. Built as a team project, Edyfra reflects innovation in personalized education support.",
    image: edyfraImg,
    link: "#"
  },
  {
    title: "EXAECHO",
    description: " EXAECHO is an AI-assisted academic revision tool built for students at all levels — from primary to university. The platform allows users to upload past papers and receive AI-generated revision questions aligned with their curriculum. EXAECHO is CBC-compliant and designed to simplify exam preparation through smart, on-demand content generation. It has earned recognition in regional hackathons for its practical application of education and AI.",
    image: exaechoImg,
    link: "#"
  },
  {
    title: "CHACHA AND COMPANY Website",
    description: "This is a fully responsive, multi-page website developed for Chacha and Company Advocates — a professional law firm. The site features a clean layout with dedicated pages for Home, About, Attorneys, Services, and Contact. Built using HTML, CSS, JavaScript, and Bootstrap, the website reflects modern legal professionalism and enhances the firm's online presence with easy navigation and a user-friendly interface.",
    image: lawfirmImg,
    link: "#"
  },
  {
    title: "Jirani Eats",
    description: "  Jirani Eats is a community-powered food ordering app designed to connect users with local food vendors, home chefs, and small eateries. The platform empowers neighborhoods by making it easy to discover and order home-cooked meals from trusted local kitchens. Jirani Eats brings visibility to informal food businesses, supporting grassroots entrepreneurship while offering convenience to customers through a clean, mobile-first design.",
    image: jiraniimg,
    link: "#"
  }
];

function Projects() {
  return (

    <section id="projects" className="container my-5">
      <h2 className="text-center mb-4">Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-8 col-lg-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img src={project.image} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.link} className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
