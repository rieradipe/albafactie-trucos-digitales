import { useNavigate } from "react-router-dom";
import styles from "./JuegosSuperDetectives.module.css";

const JuegosSuperDetectives = () => {
  const navigate = useNavigate();

  const tieneLupa = localStorage.getItem("insigniaLupa") === "true";
  const tienePatines = localStorage.getItem("insigniaPatines") === "true";
  const tienePelota = localStorage.getItem("insigniaPelota") === "true";

  const diplomaDesbloqueado = tieneLupa && tienePatines && tienePelota;

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

        <div className={styles.collection}>
          <h2>📓 Colección SuperDetective</h2>

          <div className={styles.badges}>
            <div className={styles.badgeItem}>
              <img
                src="/lupaCuriosa.png"
                alt="Insignia Lupa Curiosa"
                className={!tieneLupa ? styles.lockedBadge : ""}
              />
              <p>{tieneLupa ? "🔎 Lupa Curiosa" : "🔒 Caso 1"}</p>
            </div>

            <div className={styles.badgeItem}>
              <img
                src="/patines2.png"
                alt="Insignia Patines Tranquilos"
                className={!tienePatines ? styles.lockedBadge : ""}
              />
              <p>{tienePatines ? "🛼 Patines Tranquilos" : "🔒 Caso 2"}</p>
            </div>

            <div className={styles.badgeItem}>
              <img
                src="/pelota.png"
                alt="Insignia Pelota CiberSegura"
                className={!tienePelota ? styles.lockedBadge : ""}
              />
              <p>{tienePelota ? "⚽ Pelota CiberSegura" : "🔒 Caso 3"}</p>
            </div>
          </div>
        </div>

        {diplomaDesbloqueado && (
          <div className={styles.diplomaBox}>
            <h2>🎓 ¡Diploma desbloqueado!</h2>

            <p>Has completado los tres casos de SuperDetectives.</p>

            <button onClick={() => navigate("/peques/superdetectives/diploma")}>
              🎓 Ver diploma
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default JuegosSuperDetectives;
