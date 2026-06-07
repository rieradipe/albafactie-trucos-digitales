import { useState } from "react";
import styles from "./CasoNuevoAmigo.module.css";
import { useNavigate } from "react-router-dom";
const CasoNuevoAmigo = () => {
  const [paso, setPaso] = useState(1);
  const navigate = useNavigate();

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        {paso === 1 && (
          <>
            <h1>🕵️ Caso 1: El nuevo amigo</h1>

            <p>Un chic@ está jugando en una plataforma online.</p>
            <p>Alguien empieza a hablarle por el chat.</p>
            <p>Todo parece normal al principio...</p>

            <div className={styles.guideBox}>
              <strong>🧠 Misión SuperDetective</strong>

              <p>Las mejores detectives no adivinan.</p>

              <p>Observan.</p>

              <p>Hacen preguntas.</p>

              <p>Buscan pistas antes de actuar.</p>

              <p className={styles.finalQuestion}>
                🔎 ¿Hay algo que no te termine de encajar?
              </p>
            </div>

            <button onClick={() => setPaso(2)}>🔎 Investigar caso</button>
          </>
        )}

        {paso === 2 && (
          <>
            <h1>💬 Conversación</h1>

            <div className={styles.chat}>
              <p>
                <strong>NuevoAmigo22:</strong> Hola 😊
              </p>

              <p>
                <strong>NuevoAmigo22:</strong> He visto que también te gustan
                los juegos de aventuras.
              </p>

              <p>
                <strong>NuevoAmigo22:</strong> ¿Quieres jugar una partida otro
                día?
              </p>
            </div>

            <div className={styles.guideBox}>
              <strong>🧠 Pista de AlbaFactie:</strong>
              <p>
                {" "}
                De momento parece una conversación tranquila, pero un
                SuperDetective no se queda solo con la primera impresión.
              </p>
            </div>

            <p className={styles.question}>
              🔎 ¿Qué sabemos realmente de NuevoAmigo22?
            </p>

            <button onClick={() => setPaso(3)}>🔎 Buscar más pistas</button>
          </>
        )}

        {paso === 3 && (
          <>
            <h1>🕵️ Más pistas</h1>

            <div className={styles.chat}>
              <p>
                <strong>NuevoAmigo22:</strong> ¿Cuántos años tienes?
              </p>

              <p>
                <strong>Tú:</strong> 10
              </p>

              <p>
                <strong>NuevoAmigo22:</strong> Yo también 😊
              </p>

              <p>
                <strong>NuevoAmigo22:</strong> ¿En qué colegio estudias?
              </p>

              <p>
                <strong>NuevoAmigo22:</strong> Creo que vivimos cerca.
              </p>

              <p>
                <strong>NuevoAmigo22:</strong> No hace falta decírselo a tus
                padres.
              </p>
            </div>

            <div className={styles.guideBox}>
              <strong>🕵️ Pregunta SuperDetective:</strong>
              <p>Ahora sí empiezan a aparecer pistas importantes:</p>
              <ul>
                <li>Pregunta información personal.</li>
                <li>Dice que vive cerca.</li>
                <li>Pide que no se lo cuentes a tus padres.</li>
              </ul>
            </div>

            <p className={styles.question}>
              ¿Qué haría una SuperDetective en este momento?
            </p>

            <button onClick={() => setPaso(4)}>
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
            <div className={styles.guideBox}>
              <strong>💜 Conclusión de AlbaFactie:</strong>
              <p>
                No siempre sabemos quién está detrás de una pantalla. Por eso no
                compartimos datos personales con personas que solo conocemos por
                Internet.
              </p>
              <p>
                Las personas de confianza no te piden que ocultes conversaciones
                importantes.
              </p>
            </div>

            <p className={styles.question}>
              Cuando algo no encaja, habla con un adulto de confianza.
            </p>

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

export default CasoNuevoAmigo;
