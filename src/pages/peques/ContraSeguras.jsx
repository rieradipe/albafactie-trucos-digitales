import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ContraSeguras.module.css";

const preguntas = [
  {
    titulo: "Prueba 1",
    pregunta: "¿Cuál de estas llaves secretas es más fácil de adivinar?",
    opciones: [
      { texto: "1234", correcta: true },
      { texto: "LunaAzul!27", correcta: false },
      { texto: "NubeVerde82", correcta: false },
    ],
    explicacion:
      "Exacto. 1234 es muy fácil porque muchas personas la usan y se puede adivinar rápido.",
  },
  {
    titulo: "Prueba 2",
    pregunta: "¿Cuál parece una contraseña más segura?",
    opciones: [
      { texto: "perro", correcta: false },
      { texto: "mama", correcta: false },
      { texto: "SolRosa!48", correcta: true },
    ],
    explicacion:
      "¡Muy bien! Es mejor mezclar palabras, números y algún símbolo.",
  },
  {
    titulo: "Prueba 3",
    pregunta: "¿Qué harías con tu llave secreta?",
    opciones: [
      { texto: "Contarla en el patio", correcta: false },
      { texto: "Guardarla y pedir ayuda a un adulto", correcta: true },
      { texto: "Escribirla en un chat", correcta: false },
    ],
    explicacion:
      "¡Genial! Las contraseñas se guardan y solo se comparten con adultos de confianza.",
  },
];

const ContraSeguras = () => {
  const [actual, setActual] = useState(0);
  const [mensaje, setMensaje] = useState("");
  const [acertada, setAcertada] = useState(false);
  const [terminado, setTerminado] = useState(false);

  const preguntaActual = preguntas[actual];

  const responder = (opcion) => {
    if (opcion.correcta) {
      setAcertada(true);
      setMensaje(preguntaActual.explicacion);
    } else {
      setAcertada(false);
      setMensaje("Casi... piensa si esa llave sería fácil de adivinar.");
    }
  };

  const siguiente = () => {
    setMensaje("");
    setAcertada(false);

    if (actual === preguntas.length - 1) {
      localStorage.setItem("reto_contras", "true");
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
            <img
              src="/AlbaFactieSecretos.png"
              alt="AlbaFactie pensando en contraseñas seguras"
              className={styles.image}
            />

            <p className={styles.step}>{preguntaActual.titulo}</p>

            <h1>🔐 Contraseñas seguras</h1>

            <p className={styles.question}>{preguntaActual.pregunta}</p>

            <div className={styles.options}>
              {preguntaActual.opciones.map((opcion) => (
                <button
                  key={opcion.texto}
                  className={styles.option}
                  onClick={() => responder(opcion)}
                >
                  {opcion.texto}
                </button>
              ))}
            </div>

            {mensaje && (
              <div
                className={`${styles.message} ${
                  acertada ? styles.success : styles.error
                }`}
              >
                <p>{mensaje}</p>

                {acertada && (
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
              Ya sabes que las contraseñas son como llaves secretas para cuidar
              móviles, tablets y ordenadores.
            </p>
            <p className={styles.medal}>⭐ Contraseñas seguras superado ⭐</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default ContraSeguras;
