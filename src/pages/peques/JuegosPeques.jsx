import { useNavigate } from "react-router-dom";
import styles from "./ZonaPeques.module.css";

const JuegosPeques = () => {
  const navigate = useNavigate();

  return (
    <main className={styles.zonaPeques}>
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
    </main>
  );
};

export default JuegosPeques;
