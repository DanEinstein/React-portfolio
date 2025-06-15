function Navbar() {
  return (
    <section id="navbar">
    <nav className="navbar navbar-expand-lg navbar-dark bg-info fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">Danson Githuka</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link  custom-text" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link  custom-text" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link  custom-text" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link  custom-text" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link  custom-text" href="#achievements">Achievements</a>
            </li>
              <li className="nav-item">
              <a className="nav-link  custom-text" href="#testimonials">Testimonials</a>
            </li>
            <li className="nav-item">
              <a className="nav-link  custom-text" href="#blog">Blog</a>
            </li>
          
            
            <li className="nav-item">
              <a className="nav-link  custom-text"  href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </section>
  );
}

export default Navbar;
// This code defines a Navbar component for a portfolio website using React and Bootstrap.