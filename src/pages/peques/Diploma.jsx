import styles from "./Diploma.module.css";

let audio;

const reproducirSonido = () => {
  if (!audio) {
    audio = new Audio("/Recompensa.mp3");
  }

  if (audio.paused) {
    audio.volume = 1;

    audio.play();

    setTimeout(() => {
      const fade = setInterval(() => {
        if (audio.volume > 0.1) {
          audio.volume -= 0.1;
        } else {
          clearInterval(fade);

          audio.pause();

          audio.currentTime = 0;
        }
      }, 200);
    }, 6500);
  } else {
    audio.pause();

    audio.currentTime = 0;
  }
};

const Diploma = () => {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <img
          src="/Diploma.png"
          alt="AlbaFactie celebración"
          className={styles.heroImage}
        />

        <div className={styles.content}>
          <p className={styles.badge}>🏆 Diploma desbloqueado</p>

          <h1>¡Eres una detective digital!</h1>

          <p className={styles.description}>
            Has aprendido a proteger tus llaves secretas, detectar mensajes
            sospechosos y cuidar tus datos privados.
          </p>

          <div className={styles.skills}>
            <div className={styles.skill}>🔐 Contraseñas seguras</div>

            <div className={styles.skill}>🕵️ Mensajes sospechosos</div>

            <div className={styles.skill}>🛡️ Datos privados</div>
          </div>

          <section className={styles.diploma}>
            <h2>Diploma de Buen Detective Digital</h2>

            <p>
              AlbaFactie reconoce que has completado todos los mini retos
              digitales.
            </p>

            <div className={styles.stars}>⭐ ⭐ ⭐ ⭐ ⭐</div>

            <p className={styles.signature}>Con cariño,</p>

            <p className={styles.alba}>AlbaFactie 💜</p>
          </section>

          <div className={styles.soundBox}>
            <p>🔊 Activa el sonido para escuchar tu recompensa</p>

            <button className={styles.button} onClick={reproducirSonido}>
              🎵 Escuchar recompensa
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Diploma;
