import { useState } from "react";
import styles from "./CasoMensajeExtrano.module.css";
import { useNavigate } from "react-router-dom";
const CasoMensajeExtrano = () => {
  const [paso, setPaso] = useState(1);
  const navigate = useNavigate();

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        {paso === 1 && (
          <>
            <h1>📱 Caso 2: El mensaje extraño</h1>

            <p>Un chic@ está usando Internet tranquilamente.</p>
            <p>De repente recibe un mensaje inesperado.</p>
            <p>¿Será importante?</p>

            <div className={styles.guideBox}>
              <strong>🧠 Misión SuperDetective</strong>

              <p>Las mejores detectives no actúan con prisa.</p>

              <p>Leen.</p>

              <p>Observan.</p>

              <p>Piensan antes de pulsar.</p>

              <p className={styles.finalQuestion}>
                🔎 ¿Hay algo que te llame la atención?
              </p>
            </div>

            <button onClick={() => setPaso(2)}>🔎 Investigar mensaje</button>
          </>
        )}

        {paso === 2 && (
          <>
            <h1>💬 Mensaje recibido</h1>

            <div className={styles.chat}>
              <p>⚠️ Hola.</p>

              <p>Hemos detectado un problema con tu cuenta.</p>

              <p>Debes revisarlo cuanto antes.</p>
              <p>Haz clic aquí para solucionarlo.</p>
            </div>

            <div className={styles.guideBox}>
              <strong>🧠 Pista de AlbaFactie</strong>

              <p>Algunos mensajes intentan que actuemos muy rápido.</p>

              <p>
                Cuando alguien nos mete prisa, merece la pena detenerse unos
                segundos.
              </p>

              <p className={styles.finalQuestion}>
                🔎 ¿Qué sabemos realmente de este mensaje?
              </p>
            </div>

            <button onClick={() => setPaso(3)}>🔎 Buscar más pistas</button>
          </>
        )}

        {paso === 3 && (
          <>
            <h1>🕵️ Más pistas</h1>

            <div className={styles.chat}>
              <p>
                ⚠️ Si no haces clic en los próximos 5 minutos, perderás tu
                cuenta.
              </p>

              <p>Haz clic aquí:</p>

              <p>
                <strong>www.arreglo-rapido-ahora.com</strong>
              </p>
            </div>

            <div className={styles.guideBox}>
              <strong>🕵️ Pregunta SuperDetective</strong>

              <ul>
                <li>⏰ Mete prisa.</li>
                <li>🔗 Tiene un enlace extraño.</li>
                <li>😟 Intenta preocuparnos.</li>
                <li>📢 No sabemos quién lo envía.</li>
              </ul>

              <p className={styles.finalQuestion}>
                💭 ¿Hay algo que no te termine de encajar?
              </p>
            </div>

            <button
              onClick={() => {
                localStorage.setItem("insigniaPatines", "true");
                setPaso(4);
              }}
            >
              ✅ Resolver con AlbaFactie
            </button>
          </>
        )}

        {paso === 4 && (
          <>
            <h1> Caso resuelto 🏆</h1>

            <div className={styles.rewardBox}>
              <img
                src="/superDetective4.png"
                alt="AlbaFactie felicitando"
                className={styles.rewardImage}
              />

              <h2>🌟 ¡Buen trabajo, SuperDetective!</h2>

              <p>Has observado.</p>
              <p>Has hecho preguntas.</p>
              <p>Has buscado pistas antes de actuar.</p>
            </div>
            <div className={styles.badgeBox}>
              <img
                src="/patines2.png"
                alt="Insignia Patines Tranquilos"
                className={styles.badgeImage}
              />

              <h3>🏅 Insignia conseguida</h3>

              <p>
                <strong>Patines Tranquilos</strong>
              </p>

              <p>Has aprendido a detenerte y pensar antes de actuar.</p>
            </div>

            <div className={styles.guideBox}>
              <strong>💜 Conclusión de AlbaFactie</strong>

              <p>
                Los mensajes importantes no dejan de ser importantes porque te
                tomes unos minutos para pensar.
              </p>

              <p>
                Cuando algo te mete mucha prisa, detente, observa y pide ayuda
                si la necesitas.
              </p>
            </div>

            <button
              onClick={() => navigate("/peques/superdetectives/misiones")}
            >
              🕵️ Volver a los casos
            </button>
          </>
        )}
      </section>
    </main>
  );
};

export default CasoMensajeExtrano;
