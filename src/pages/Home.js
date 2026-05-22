import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">

      <h1>MAC SPACE</h1>

      <p>
        Explore creativity, technology, and futuristic ideas with React Router.
      </p>

      <div className="button-container">

        <Link to="/about" className="btn about-btn">
          About
        </Link>

        <Link to="/contact" className="btn contact-btn">
          Contact
        </Link>

      </div>

      <div className="business-card">

<div className="profile-logo">

  <div className="mystery-face">

    <div className="eyes"></div>

  </div>

</div>

        <h2>John Michael Mamac</h2>

        <span>BSIT 2A</span>

        <p>
          Curious about who I am?
        </p>

      </div>

      <div className="box-container">

        <div className="card">POGI</div>
        <div className="card">SARAP</div>
        <div className="card">BANGO</div>

      </div>

    </div>
  );
}

export default Home;