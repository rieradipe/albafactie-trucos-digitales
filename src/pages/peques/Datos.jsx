import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Datos.module.css";

const tarjetasIniciales = [
  { id: 1, texto: "🍦 Mi sabor de helado favorito", tipo: "compartir" },
  { id: 2, texto: "🏫 El nombre de mi colegio", tipo: "privado" },
  { id: 3, texto: "🎮 Mi videojuego favorito", tipo: "compartir" },
  { id: 4, texto: "⚽ El campo donde entreno", tipo: "privado" },
  { id: 5, texto: "🌈 Mi color favorito", tipo: "compartir" },
  { id: 6, texto: "🚌 A dónde voy mañana de excursión", tipo: "privado" },
];

const Datos = () => {
  const [tarjetas, setTarjetas] = useState(tarjetasIniciales);
  const [aciertos, setAciertos] = useState(0);
  const [mensaje, setMensaje] = useState("");

  const soltarTarjeta = (ev, zona) => {
    const id = Number(ev.dataTransfer.getData("id"));
    const tarjeta = tarjetas.find((item) => item.id === id);

    if (!tarjeta) return;

    if (tarjeta.tipo === zona) {
      setTarjetas(tarjetas.filter((item) => item.id !== id));
      setAciertos(aciertos + 1);
      setMensaje("✨ ¡Muy bien! Has colocado la tarjeta en su sitio.");
    } else {
      setMensaje("🤔 Casi... piensa si eso debería verlo cualquier persona.");
    }
  };
  if (tarjetas.length === 0) {
    localStorage.setItem("reto_datos", "true");
  }

  const terminado = tarjetas.length === 0;

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <Link to="/peques/retos" className={styles.backButton}>
          ↩ Mini retos
        </Link>
        {!terminado ? (
          <>
            <div className={styles.hero}>
              <div>
                <p className={styles.step}>Reto 3</p>
                <h1>🛡️ Datos privados</h1>
                <p className={styles.description}>
                  Arrastra cada tarjeta al lugar correcto.
                </p>
              </div>

              <img
                src="/AlbaFactieSecretos.png"
                alt="AlbaFactie datos privados"
                className={styles.image}
              />
            </div>

            <section className={styles.tarjetas}>
              {tarjetas.map((tarjeta) => (
                <div
                  key={tarjeta.id}
                  className={styles.tarjeta}
                  draggable
                  onDragStart={(ev) =>
                    ev.dataTransfer.setData("id", tarjeta.id)
                  }
                >
                  {tarjeta.texto}
                </div>
              ))}
            </section>

            <section className={styles.zonas}>
              <div
                className={styles.zonaCompartir}
                onDragOver={(ev) => ev.preventDefault()}
                onDrop={(ev) => soltarTarjeta(ev, "compartir")}
              >
                <h2>🌈 Se puede compartir</h2>
              </div>

              <div
                className={styles.zonaPrivada}
                onDragOver={(ev) => ev.preventDefault()}
                onDrop={(ev) => soltarTarjeta(ev, "privado")}
              >
                <h2>🔒 Mejor privado</h2>
              </div>
            </section>

            {mensaje && <p className={styles.mensaje}>{mensaje}</p>}

            <p className={styles.progreso}>
              Aciertos: {aciertos} / {tarjetasIniciales.length}
            </p>
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
              Ya sabes diferenciar qué cosas se pueden compartir y cuáles es
              mejor mantener privadas.
            </p>

            <p className={styles.medal}>⭐ Datos privados superado ⭐</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default Datos;
