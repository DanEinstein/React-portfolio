function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <p>
          Designed and developed by{' '}
          <a
            href="https://www.linkedin.com/in/danson-githuka"
            className="text-info"
            target="_blank"
            rel="noopener noreferrer"
          >
            Danson Githuka
          </a>{' '}
          &copy; {new Date().getFullYear()}
        </p>

        <div className="d-flex justify-content-center gap-4 mt-3">
          <a
            href="https://github.com/DanEinstein"
            className="text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github" style={{ fontSize: '1.5rem' }}></i>
          </a>

          <a
            href="https://www.linkedin.com/in/danson-githuka"
            className="text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i>
          </a>

          <a
            href="mailto:githukadanson23@gmail.com"
            className="text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-envelope-fill" style={{ fontSize: '1.5rem' }}></i>
          </a>

          <a
            href="https://wa.me/254712484071"
            className="text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-whatsapp" style={{ fontSize: '1.5rem' }}></i>
          </a>

          <a
            href="https://www.instagram.com/your_instagram_username"
            className="text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram" style={{ fontSize: '1.5rem' }}></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
