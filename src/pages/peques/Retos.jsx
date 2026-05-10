import { Link } from "react-router-dom";
import styles from "./Retos.module.css";
import { useEffect, useState } from "react";
const Retos = () => {
  const [diplomaActivo, setDiplomaActivo] = useState(false);

  useEffect(() => {
    const completados =
      localStorage.getItem("reto_contras") === "true" &&
      localStorage.getItem("reto_mensajes") === "true" &&
      localStorage.getItem("reto_datos") === "true";

    setDiplomaActivo(completados);
  }, []);
  return (
    <main className={styles.retosPage}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Mini retos digitales</h1>

          <p className={styles.description}>
            Pequeños desafíos para aprender seguridad en Internet jugando.
          </p>
        </div>

        <div className={styles.heroImage}>
          <img src="/Retos.png" alt="AlbaFactie mini retos" />
        </div>
      </section>

      <section className={styles.grid}>
        <Link to="/peques/retos/contras-seguras" className={styles.card}>
          <span className={styles.icon}>🔐</span>

          <h2>Contraseña segura</h2>

          <p>Aprende a crear contraseñas fuertes para proteger tus cuentas.</p>
        </Link>
        <Link to="/peques/retos/mensajes-seguros" className={styles.card}>
          <span className={styles.icon}>🕵️‍♀️</span>

          <h2>Mensaje sospechoso</h2>

          <p>Descubre si un mensaje es seguro o intenta engañarte.</p>
        </Link>
        <Link to="/peques/retos/Datos" className={styles.card}>
          <span className={styles.icon}>🛡️</span>

          <h2>Datos privados</h2>

          <p>
            Aprende qué cosas se pueden compartir y cuáles es mejor mantener
            privadas.
          </p>
        </Link>
        {diplomaActivo && (
          <Link to="/peques/retos/diploma" className={styles.diplomaCard}>
            🏆 Recoger mi diploma
          </Link>
        )}
      </section>
    </main>
  );
};

export default Retos;
