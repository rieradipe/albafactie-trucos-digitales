import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="hero">
      <div className="hero-card">
        <div className="albafactie-avatar">
          <img src="/AlbaFactieProfe.png" alt="Saludos" />
        </div>

        <p className="eyebrow">Tu guía virtual de seguridad digital</p>

        <h1>Hola, soy AlbaFactie</h1>

        <p className="hero-text">
          Te acompaño para aprender pequeños trucos digitales de forma fácil,
          divertida y sin miedo.
        </p>

        <div className="speech-bubble">
          “No aprendemos con miedo. Aprendemos jugando y acompañados.”
        </div>

        <div className="hero-actions">
          <Link to="/peques">
            <button>Soy peque</button>
          </Link>

          <Link to="/mayores">
            <button>Soy mayor</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
