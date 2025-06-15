import React from 'react';
import Edyfrawin from '../assets/Edyfra.jpeg';
import EdyfraKisii from '../assets/Edyfra kisii.jpg' 
import EXAECHO from '../assets/EXAECHO_logo.jpg'
import CHACHA from '../assets/chacha.png'// Assuming you have an image for this achievement



const achievements = [
  {
    title: ' MUCISA Hackathon 2025 – Winner',
    description: 'I participated in the MUCISA Hackathon hosted by the School of Computing at Maseno University. Competing against other talented students, my team and I built a practical tech solution that stood out for its creativity and real-world impact. We walked away as winners, and it gave me the confidence to keep building and innovating through code.',
    image:Edyfrawin,
    
  },
  {
    title: 'Western Region Hackathon Winner',
    description: 'Secured 1st place in the Western Region Research & Innovations Hackathon with Edyfra.This was a larger, multidisciplinary competition involving participants from various universities across the western region of Kenya. Edyfra once  again earned us the top spot. It was a proud moment that proved our ideas could scale and truly make a difference.',
    image:EdyfraKisii,
  },
  {
    title: 'EXAECHO Project Launch',
    description:' EXAECHO is one of my proudest achievements , a platform that helps students revise more effectively. With EXAECHO, learners can upload past papers, and the system generates new, similar questions to help them prepare better.It’s designed to be user-friendly and accessible, making exam preparation easier for students at all levels. EXAECHO has been recognized in various tech competitions for its innovative approach to education.',
    image: EXAECHO,
  },
 
  {
    title: 'Developed Law Firm Website',
    description: 'I developed a professional website for Chacha and Company Advocates, a law firm. The site features a clean, modern design with dedicated pages for Home, About, Attorneys, Services, and Contact. It’s fully responsive and built using HTML, CSS, JavaScript, and Bootstrap. This project enhanced my skills in web development and client communication.',
    image: CHACHA, // Assuming you have an image for this achievement
  },
  
];

function Achievements() {
  return (
    <section id="achievements" className="bg-light">
    <div className="container my-5">
      <h2 className="text-center mb-4">Achievements</h2>
      <div className="row">
        {achievements.map((achievement, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="p-4 shadow rounded bg-light h-100">
                <img src={achievement.image} alt={achievement.title} className="img-fluid mb-3 rounded" />
              <h5>{achievement.title}</h5>
              <p>{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}

export default Achievements;
