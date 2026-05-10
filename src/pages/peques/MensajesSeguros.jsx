import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./MensajesSeguros.module.css";

const preguntas = [
  {
    titulo: "Prueba 1",
    mensaje: "🎮 ¡Has ganado 9999 monedas gratis! Pulsa aquí rápido!!!",
    correcta: "sospechoso",
    explicacion:
      "Muy bien. Los regalos extraños o demasiado increíbles pueden ser trampas.",
  },
  {
    titulo: "Prueba 2",
    mensaje: "🤫 No se lo digas a tus padres. Pásame tu contraseña.",
    correcta: "sospechoso",
    explicacion:
      "Exacto. Nunca debes compartir contraseñas ni guardar secretos que te hagan sentir raro.",
  },
  {
    titulo: "Prueba 3",
    mensaje: "😟 Un mensaje te hace sentir incómodo o confundido...",
    correcta: "adulto",
    explicacion:
      "¡Perfecto! Siempre puedes pedir ayuda a un adulto de confianza.",
  },
];

const MensajesSeguros = () => {
  const [actual, setActual] = useState(0);
  const [mensaje, setMensaje] = useState("");
  const [correcta, setCorrecta] = useState(false);
  const [terminado, setTerminado] = useState(false);

  const pregunta = preguntas[actual];

  const responder = (respuesta) => {
    if (respuesta === pregunta.correcta) {
      setCorrecta(true);
      setMensaje(pregunta.explicacion);
    } else {
      setCorrecta(false);
      setMensaje(
        "Mmm... piensa si ese mensaje podría intentar engañar o hacer sentir mal."
      );
    }
  };

  const siguiente = () => {
    setMensaje("");
    setCorrecta(false);

    if (actual === preguntas.length - 1) {
      localStorage.setItem("reto_mensajes", "true");
      setTerminado(true);
      return;
    }

    setActual(actual + 1);
  };

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <Link to="/peques/retos" className={styles.backButton}>
          ↩ Mini retos
        </Link>

        {!terminado ? (
          <>
            <div className={styles.hero}>
              <div className={styles.text}>
                <p className={styles.step}>{pregunta.titulo}</p>

                <h1>🕵️‍♀️ Mensajes sospechosos</h1>

                <p className={styles.description}>
                  A veces aparecen mensajes raros en juegos, móviles o tablets.
                </p>
              </div>

              <div className={styles.imageBox}>
                <img
                  src="/AlbaFactieSecretos.png"
                  alt="AlbaFactie detective digital"
                />
              </div>
            </div>

            <div className={styles.chat}>
              <p>{pregunta.mensaje}</p>
            </div>

            <div className={styles.options}>
              <button
                className={styles.option}
                onClick={() => responder("seguro")}
              >
                ✅ Seguro
              </button>

              <button
                className={styles.option}
                onClick={() => responder("sospechoso")}
              >
                ⚠️ Sospechoso
              </button>

              {actual === 2 && (
                <button
                  className={styles.option}
                  onClick={() => responder("adulto")}
                >
                  💜 Pedir ayuda
                </button>
              )}
            </div>

            {mensaje && (
              <div
                className={`${styles.message} ${
                  correcta ? styles.success : styles.error
                }`}
              >
                <p>{mensaje}</p>

                {correcta && (
                  <button className={styles.nextButton} onClick={siguiente}>
                    Siguiente prueba
                  </button>
                )}
              </div>
            )}
          </>
        ) : (
          <div className={styles.final}>
            <img
              src="/AlbaFactieProfe.png"
              alt="AlbaFactie feliz"
              className={styles.finalImage}
            />

            <h1>🎉 ¡Reto completado!</h1>

            <p>
              Ya sabes detectar mensajes raros y pedir ayuda cuando algo no se
              siente bien.
            </p>

            <p className={styles.medal}>⭐ Mensajes sospechosos superado ⭐</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default MensajesSeguros;
