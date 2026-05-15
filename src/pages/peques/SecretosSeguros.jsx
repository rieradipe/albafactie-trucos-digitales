import { useState } from "react";
import styles from "./SecretosSeguros.module.css";

const SecretosSeguros = () => {
  const [step, setStep] = useState(0);

  return (
    <main className={styles.secretosPage}>
      {step === 0 && (
        <section className={styles.missionCard}>
          <div className={styles.imageBox}>
            <img
              src="/AlbaFactieSecretos.png"
              alt="AlbaFactie dudando con un móvil"
            />
          </div>

          <div className={styles.content}>
            <p className={styles.badge}>💜 Misión 2 de 3</p>

            <h1>💜 Cosas que cuidamos</h1>

            <p className={styles.description}>
              A veces un mensaje puede hacernos sentir raros, con dudas o
              incómodos. AlbaFactie te ayudará a escucharte.
            </p>

            <button className={styles.mainButton} onClick={() => setStep(1)}>
              🚀 Empezar misión
            </button>
          </div>
        </section>
      )}

      {step === 1 && (
        <section className={styles.gameCard}>
          <p className={styles.badge}>💭 Primera pista</p>

          <h2>¿Esto me hace sentir bien?</h2>

          <div className={styles.chatBox}>
            <div className={styles.goodMessage}>
              🎂 Es una sorpresa para el cumpleaños de mamá.
            </div>

            <div className={styles.badMessage}>
              😈 Envíame una foto y no se lo digas a nadie.
            </div>
          </div>
          <p className={styles.question}>
            ¿Cuál mensaje deberíamos contar a un adulto de confianza?
          </p>

          <div className={styles.answers}>
            <button onClick={() => setStep(2)}>😈 El segundo</button>
            <button onClick={() => setStep(3)}>🎂 El primero</button>
          </div>
        </section>
      )}

      {step === 2 && (
        <section className={styles.resultCard}>
          <h2>🌟 ¡Muy bien!</h2>

          <p>
            Si alguien te pide una foto y además te dice que no se lo cuentes a
            nadie, eso es una señal de alarma.
          </p>

          <p className={styles.tip}>
            💜 Si algo te hace sentir raro, puedes contárselo a un adulto de
            confianza.
          </p>

          <button onClick={() => setStep(4)}>👉 Siguiente pista</button>
        </section>
      )}

      {step === 3 && (
        <section className={styles.resultCard}>
          <h2>😅 Casi...</h2>

          <p>
            Una sorpresa de cumpleaños puede ser divertida. Pero pedir fotos en
            secreto no está bien.
          </p>

          <button onClick={() => setStep(1)}>🔁 Intentarlo otra vez</button>
        </section>
      )}

      {step === 4 && (
        <section className={styles.gameCard}>
          <p className={styles.badge}>🧠 Segunda pista</p>

          <h2>¿Qué harías?</h2>

          <p className={styles.bigMessage}>
            😈 “No se lo digas a tus padres, será nuestro secreto.”
          </p>

          <p className={styles.question}>¿Qué haría un detective digital?</p>

          <div className={styles.answers}>
            <button onClick={() => setStep(6)}>🤐 Guardarlo</button>
            <button onClick={() => setStep(5)}>💜 Contarlo a un adulto</button>
          </div>
        </section>
      )}

      {step === 5 && (
        <section className={styles.finalCard}>
          <img
            src="/NubeProtectora.png"
            alt="Nube de las cosas que cuidamos"
            className={styles.cloudBadge}
          />
          <h2> ¡Ya eres guardián de las cosas que cuidamos! </h2>
          <p>
            Has aprendido algo muy importante: Hay información importante que
            debemos cuidar, pero nunca guardar en secreto si nos hace sentir
            mal.
          </p>

          <p className={styles.tip}>
            💜 Ahora formas parte del equipo RieraDiPe: aquí cuidamos nuestra
            información, escuchamos lo que sentimos y pedimos ayuda cuando algo
            no está bien.
          </p>

          <button onClick={() => setStep(0)}>🔄 Volver a jugar</button>
        </section>
      )}

      {step === 6 && (
        <section className={styles.resultCard}>
          <h2>😟 Mejor no...</h2>

          <p>
            Si alguien te pide guardar un secreto que te hace dudar, lo mejor es
            contárselo a un adulto de confianza.
          </p>

          <button onClick={() => setStep(4)}>🔁 Intentarlo otra vez</button>
        </section>
      )}
    </main>
  );
};

export default SecretosSeguros;
