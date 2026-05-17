import { useNavigate } from "react-router-dom";
import styles from "./ZonaPeques.module.css";

const ZonaPeques = () => {
  const navigate = useNavigate();

  return (
    <main className={styles.zonaPeques}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>¡Hola, detective digital!</h1>

          <p className={styles.description}>
            Aprende a moverte por Internet de forma segura jugando con
            AlbaFactie.
          </p>

          <button
            className={styles.mainButton}
            onClick={() => navigate("/peques/juegos")}
          >
            🚀 Empezar aventura
          </button>
        </div>

        <div className={styles.heroImage}>
          <img src="/ZonaPequsSaludo.png" alt="AlbaFactie saludando" />
        </div>
      </section>
    </main>
  );
};

export default ZonaPeques;
