import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PersonasFalsas.module.css";

const PersonasFalsas = () => {
  const [step, setStep] = useState(0);

  const [dangerSelections, setDangerSelections] = useState([]);

  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleDangerSelect = (value) => {
    if (dangerSelections.includes(value)) return;

    const updated = [...dangerSelections, value];

    setDangerSelections(updated);

    if (updated.length === 1) {
      setMessage(
        "🌟 ¡Bien! Has encontrado una pista peligrosa. Busca otra más."
      );
    }

    if (updated.includes("colegio") && updated.includes("direccion")) {
      setMessage("");
      setStep(8);
    }
  };

  return (
    <main className={styles.personasPage}>
      {step === 0 && (
        <section className={styles.missionCard}>
          <div className={styles.imageBox}>
            <img
              src="/AlbaFactieOrdenador.png"
              alt="AlbaFactie investigando con un ordenador"
            />
          </div>

          <div className={styles.content}>
            <p className={styles.badge}>🕵️ Misión 1 de 3</p>

            <h1>¿Quién hay detrás de la pantalla?</h1>

            <p className={styles.description}>
              AlbaFactie ha encontrado unos mensajes sospechosos… ¿la ayudas a
              investigar?
            </p>

            <button className={styles.mainButton} onClick={() => setStep(1)}>
              🚀 Empezar misión
            </button>
          </div>
        </section>
      )}

      {step === 1 && (
        <section className={styles.gameCard}>
          <p className={styles.badge}>🕵️ Primera pista</p>

          <h2>AlbaFactie encontró dos mensajes...</h2>

          <div className={styles.chatBox}>
            <div className={styles.goodMessage}>
              😊 Hola, me gusta Minecraft.
            </div>

            <div className={styles.badMessage}>
              😈 No se lo digas a tus padres...
            </div>
          </div>

          <p className={styles.question}>¿Cuál parece sospechoso?</p>

          <div className={styles.answers}>
            <button onClick={() => setStep(2)}>😈 El segundo</button>

            <button onClick={() => setStep(3)}>😊 El primero</button>
          </div>
        </section>
      )}

      {step === 2 && (
        <section className={styles.resultCard}>
          <h2>⭐ ¡Muy bien detective!</h2>

          <p>
            Pedir secretos o decir “no se lo digas a tus padres” puede ser
            peligroso.
          </p>

          <button onClick={() => setStep(4)}>👉 Siguiente pista</button>
        </section>
      )}

      {step === 3 && (
        <section className={styles.resultCard}>
          <h2>😅 Ups...</h2>

          <p>El mensaje sospechoso era el segundo.</p>

          <p className={styles.tip}>
            💡 Los adultos seguros nunca piden secretos.
          </p>

          <button onClick={() => setStep(1)}>🔁 Intentarlo otra vez</button>
        </section>
      )}

      {step === 4 && (
        <section className={styles.gameCard}>
          <p className={styles.badge}>🕵️ Segunda pista</p>

          <h2>AlbaFactie encontró una pregunta rara...</h2>

          <div className={styles.chatBox}>
            <div className={styles.goodMessage}>
              😊 ¿Qué videojuego te gusta más?
            </div>

            <div className={styles.badMessage}>
              😈 ¿Tus padres están en casa ahora?
            </div>
          </div>

          <p className={styles.question}>¿Qué pregunta puede ser peligrosa?</p>

          <div className={styles.answers}>
            <button onClick={() => setStep(5)}>😈 La segunda</button>

            <button onClick={() => setStep(6)}>😊 La primera</button>
          </div>
        </section>
      )}

      {step === 5 && (
        <section className={styles.resultCard}>
          <h2>🌟 ¡Exacto!</h2>

          <p>
            Preguntar si tus padres están en casa puede ser una señal de
            peligro.
          </p>

          <p className={styles.tip}>
            💡 No compartas información sobre tu casa, tus horarios o tu
            familia.
          </p>

          <button onClick={() => setStep(7)}>👉 Última pista</button>
        </section>
      )}

      {step === 6 && (
        <section className={styles.resultCard}>
          <h2>😅 Casi...</h2>

          <p>La pregunta peligrosa era la segunda.</p>

          <p className={styles.tip}>
            💡 Si alguien pregunta cosas sobre tu casa o tu familia, avisa a un
            adulto.
          </p>

          <button onClick={() => setStep(4)}>🔁 Intentarlo otra vez</button>
        </section>
      )}

      {step === 7 && (
        <section className={styles.gameCard}>
          <p className={styles.badge}>🕵️ Tercera pista</p>

          <h2>AlbaFactie encontró demasiada información...</h2>

          <p className={styles.question}>
            ¿Qué información NO deberíamos compartir?
          </p>

          {message && <p className={styles.feedback}>{message}</p>}

          <div className={styles.infoCards}>
            <button className={styles.safeCard} onClick={() => setStep(9)}>
              🎮 Mi videojuego favorito
            </button>

            <button
              className={styles.dangerCard}
              onClick={() => handleDangerSelect("colegio")}
            >
              🏫 El nombre de mi colegio
            </button>

            <button className={styles.safeCard} onClick={() => setStep(9)}>
              🌈 Mi color favorito
            </button>

            <button
              className={styles.dangerCard}
              onClick={() => handleDangerSelect("direccion")}
            >
              📍 Mi dirección
            </button>
          </div>
        </section>
      )}

      {step === 8 && (
        <section className={styles.resultCard}>
          <h2>🏆 ¡Increíble detective!</h2>

          <p>El nombre del colegio y la dirección son datos privados.</p>

          <p className={styles.tip}>
            💡 Nunca compartas dónde vives o estudias con desconocidos.
          </p>

          <button onClick={() => setStep(10)}>🏆 Recibir mi placa</button>
        </section>
      )}

      {step === 9 && (
        <section className={styles.resultCard}>
          <h2>😅 Casi...</h2>

          <p>Esa información no era peligrosa.</p>

          <p className={styles.tip}>
            💡 Tu dirección o tu colegio sí deben mantenerse en privado.
          </p>

          <button
            onClick={() => {
              setDangerSelections([]);
              setMessage("");
              setStep(7);
            }}
          >
            🔁 Intentarlo otra vez
          </button>
        </section>
      )}

      {step === 10 && (
        <section className={styles.finalCard}>
          <img
            src="/RecompensaPlaca.png"
            alt="Placa detective Equipo RieraDiPe"
            className={styles.badgeImage}
          />

          <h2>¡Ya eres SuperDetective Digital!</h2>

          <p>
            Has superado todas las pistas y ahora formas parte del equipo bueno
            de RieraDiPe.
          </p>

          <p className={styles.tip}>
            🌟 Recuerda: los superdetectives cuidan su información y ayudan a
            los demás.
          </p>

          <button
            onClick={() => {
              setDangerSelections([]);
              setMessage("");
              navigate("/peques/juegos");
            }}
          >
            🔄 Volver a jugar
          </button>
        </section>
      )}
    </main>
  );
};

export default PersonasFalsas;
