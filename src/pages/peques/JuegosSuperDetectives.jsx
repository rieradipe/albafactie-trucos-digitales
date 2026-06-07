import { useNavigate } from "react-router-dom";
import styles from "./JuegosSuperDetectives.module.css";

const JuegosSuperDetectives = () => {
  const navigate = useNavigate();

  return (
    <main className={styles.page}>
      <section className={styles.classroom}>
        <img
          src="/AlbaFactiePizarra2.png"
          alt="AlbaFactie SuperDetective"
          className={styles.image}
        />

        <div className={styles.buttons}>
          <button
            onClick={() => navigate("/peques/superdetectives/caso-nuevo-amigo")}
          >
            📂 Caso 1: El caso del nuevo amigo
          </button>

          <button
            onClick={() =>
              navigate("/peques/superdetectives/caso-mensaje-extrano")
            }
          >
            📂 Caso 2: El mensaje extraño
          </button>

          <button
            onClick={() =>
              navigate("/peques/superdetectives/caso-regalo-sorpresa")
            }
          >
            📂 Caso 3: El regalo sorpresa
          </button>
        </div>
      </section>
    </main>
  );
};

export default JuegosSuperDetectives;
