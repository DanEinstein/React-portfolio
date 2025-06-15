import React from 'react';

const testimonials = [
  {
    name: "Adv. Mary Wanjiku",
    position: "Law Firm Client",
    feedback:
      "Danson delivered a clean, professional website for my law firm. He was clear, communicative, and truly understood what we needed. Highly recommended!",
  },
  {
    name: "Canol Okoth",
    position: "Team mate Edyfra",
    feedback:
      "Working with Danson was inspiring. He’s not just a frontend developer, he’s a visionary. His contribution to Edyfra helped us win two hackathons.",
  },
  {
    name: "Pharies Muiruri",
    position: "Peer at Maseno University",
    feedback:
      "Danson is always ready to help and share what he learns. His dedication to projects like EXAECHO motivates the rest of us to level up.",
  },
  {
    name: "Hackathon Judge",
    position: "Western Innovation Hackathon",
    feedback:
      "Danson's presentation of Edyfra stood out with clarity and purpose. His frontend execution was excellent for a student project.",
  },
];

const Testimonials = () => {
  return (
    <section className="container my-5" id="testimonials">
      <h2 className="text-center mb-4">Testimonials</h2>
      <div className="row">
        {testimonials.map((t, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <p className="card-text fst-italic">"{t.feedback}"</p>
              </div>
              <div className="card-footer bg-white border-0">
                <h5 className="card-title mb-0">{t.name}</h5>
                <small className="text-muted">{t.position}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
