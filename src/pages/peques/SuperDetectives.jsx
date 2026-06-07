import { useNavigate } from "react-router-dom";
import styles from "./SuperDetectives.module.css";

const SuperDetectives = () => {
  const navigate = useNavigate();

  return (
    <main className={styles.superDetectives}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>¡Hola, SuperDetective digital!</h1>

          <p className={styles.description}>
            Aprende a descubrir perfiles falsos, mensajes sospechosos y trampas
            online junto a AlbaFactie.
          </p>

          <button
            className={styles.mainButton}
            onClick={() => navigate("/peques/superdetectives/misiones")}
          >
            🕵️ Empezar misión
          </button>
        </div>

        <div className={styles.heroImage}>
          <img
            src="/public//SuperDetectives1.png"
            alt="AlbaFactie como SuperDetective digital"
          />
        </div>
      </section>
    </main>
  );
};

export default SuperDetectives;
