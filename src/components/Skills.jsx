import React from 'react';
import htmlLogo from '../assets/HTML.jpg';
import cssLogo from '../assets/css logo.jpg';
import jsLogo from '../assets/js logo.jpg';
import reactLogo from '../assets/react logo.jpg';
import nodelogo from '../assets/nodejs logo.jpg';
import Expresslogo from '../assets/Express Js.jpg';
import pythonLogo from '../assets/Python.jpg';
import phpLogo from '../assets/PHP logo.jpg';
import tailwindLogo from '../assets/tailwind.jpg';
import bootstrapLogo from '../assets/bootstrap logo.jpg';

function Skills() {
  return (
    <section id="skills" className="container my-5">
      <h2 className="text-center mb-5">Skills</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <h5>Frontend Development</h5>
          <ul className="list-unstyled">
            <li><img src={htmlLogo} alt="HTML" className="skill-logo" /> HTML</li>
            <li><img src={cssLogo} alt="CSS" className="skill-logo" /> CSS</li>
            <li><img src={jsLogo} alt="JavaScript" className="skill-logo" /> JavaScript</li>
            <li><img src={reactLogo} alt="React" className="skill-logo" /> React</li>
            <li><img src={tailwindLogo} alt="Tailwind CSS" className="skill-logo" /> Tailwind CSS</li>
            <li><img src={bootstrapLogo} alt="Bootstrap" className="skill-logo" /> Bootstrap</li>
          </ul>
        </div>

        <div className="col-md-6 mb-4">
          <h5>Backend Development</h5>
          <ul className="list-unstyled">
            <li><img src={nodelogo} alt="Node.js" className="skill-logo" /> Node.js</li>
            <li><img src={Expresslogo} alt="Express.js" className="skill-logo" /> Express.js</li>
            <li><img src={pythonLogo} alt="Python" className="skill-logo" /> Python</li>
            <li><img src={phpLogo} alt="PHP" className="skill-logo" /> PHP</li>
          </ul>
        </div>

        <div className="col-md-12">
          <h5>Other Skills</h5>
          <ul className="list-unstyled">
            <li>🧠 Problem Solving and Critical Thinking</li>
            <li>🗣️ Communication</li>
            <li>📐 System Design Thinking</li>
            <li>🛠️ Version Control (Git)</li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .skill-logo {
          width: 30px;
          height: 30px;
          margin-right: 10px;
          vertical-align: middle;
        }
        ul {
          padding-left: 0;
        }
        li {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          font-size: 1rem;
        }
      `}</style>
    </section>
  );
}

export default Skills;
