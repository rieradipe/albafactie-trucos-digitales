import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ZonaPeques.module.css";
const ZonaPeques = () => {
  const [aventuraIniciada, setAventuraIniciada] = useState(false);
  const navigate = useNavigate();
  return (
    <main className={styles.zonaPeques}>
      {!aventuraIniciada && (
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1>¡Hola, detective digital!</h1>

            <p className={styles.description}>
              Aprende a moverte por Internet de forma segura jugando con
              AlbaFactie.
            </p>

            <button
              className={styles.mainButton}
              onClick={() => setAventuraIniciada(true)}
            >
              🚀 Empezar aventura
            </button>
          </div>

          <div className={styles.heroImage}>
            <img src="/ZonaPequsSaludo.png" alt="AlbaFactie saludando" />
          </div>
        </section>
      )}

      {aventuraIniciada && (
        <section className={styles.classroom}>
          <img
            src="/ZonaPequesPizarra.png"
            alt="AlbaFactie profesora explicando"
            className={styles.classroomImage}
          />

          <div className={styles.topicButtons}>
            <button onClick={() => navigate("/peques/personas-falsas")}>
              🛡️ Detecta peligros
            </button>
            <button onClick={() => navigate("/peques/secretos-seguros")}>
              🔐 Secretos Seguros
            </button>
            <button onClick={() => navigate("/peques/retos")}>
              🎮 Mini-Retos
            </button>
          </div>
        </section>
      )}
    </main>
  );
};

export default ZonaPeques;
