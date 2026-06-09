import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CasoRegaloSorpresa.module.css";

const CasoRegaloSorpresa = () => {
  const [paso, setPaso] = useState(1);
  const navigate = useNavigate();

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        {paso === 1 && (
          <>
            <h1>🎁 Caso 3: El regalo sorpresa</h1>

            <p>Un chic@ está navegando tranquilamente.</p>
            <p>De repente aparece un mensaje con un premio.</p>
            <p>Parece emocionante... pero toca investigar.</p>

            <div className={styles.guideBox}>
              <strong>🧠 Misión SuperDetective</strong>

              <p>Las mejores detectives no se dejan llevar por la emoción.</p>
              <p>Respiran.</p>
              <p>Observan.</p>
              <p>Buscan pistas antes de hacer clic.</p>

              <p className={styles.finalQuestion}>
                🔎 ¿Hay algo que te parezca demasiado bonito para ser verdad?
              </p>
            </div>

            <button onClick={() => setPaso(2)}>🔎 Investigar regalo</button>
          </>
        )}

        {paso === 2 && (
          <>
            <h1>🎁 Premio recibido</h1>

            <div className={styles.chat}>
              <p>
                <strong>Mensaje:</strong> ¡Felicidades! Has ganado un regalo
                sorpresa.
              </p>

              <p>Solo tienes que tocar el botón para reclamarlo.</p>

              <p>Oferta disponible por poco tiempo.</p>
            </div>

            <div className={styles.guideBox}>
              <strong>🧠 Pista de AlbaFactie</strong>

              <p>
                A veces los mensajes usan regalos para que actuemos sin pensar.
              </p>

              <p className={styles.finalQuestion}>
                🔎 ¿Qué sabemos realmente de este premio?
              </p>
            </div>

            <button onClick={() => setPaso(3)}>🔎 Buscar más pistas</button>
          </>
        )}

        {paso === 3 && (
          <>
            <h1>🕵️ Más pistas</h1>

            <div className={styles.chat}>
              <p>🎁 Premio especial: tarjeta regalo gratuita.</p>
              <p>Para recibirla, escribe tu nombre, dirección y teléfono.</p>
              <p>También puedes compartirlo con 5 amigos para ganar más.</p>
            </div>

            <div className={styles.guideBox}>
              <strong>🕵️ Pregunta SuperDetective</strong>

              <ul>
                <li>🎁 Promete un regalo sin explicar bien por qué.</li>
                <li>⏰ Mete prisa.</li>
                <li>📍 Pide datos personales.</li>
                <li>📢 Te anima a compartirlo con más gente.</li>
              </ul>

              <p className={styles.finalQuestion}>
                💭 ¿Hay algo que no te termine de encajar?
              </p>
            </div>
            <button
              onClick={() => {
                localStorage.setItem("insigniaPelota", "true");
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
                src="/pelota.png"
                alt="Insignia Pelota CiberSegura"
                className={styles.badgeImage}
              />

              <h3>🏅 Insignia conseguida</h3>

              <p>
                <strong>Pelota CiberSegura</strong>
              </p>

              <p>Has aprendido a jugar con cabeza.</p>
            </div>

            <div className={styles.guideBox}>
              <strong>💜 Conclusión de AlbaFactie</strong>

              <p>
                No todo lo que brilla online es un regalo. A veces un premio
                sirve para conseguir nuestros datos o que compartamos algo sin
                pensar.
              </p>

              <p>
                Antes de aceptar regalos o premios en Internet, detente, observa
                y consulta con un adulto de confianza.
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

export default CasoRegaloSorpresa;
