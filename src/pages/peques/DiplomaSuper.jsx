import styles from "./DiplomaSuper.module.css";

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

const DiplomaSuper = () => {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <img
          src="/Diploma2.png"
          alt="AlbaFactie celebración"
          className={styles.heroImage}
        />

        <div className={styles.content}>
          <p className={styles.badge}>🏆 Diploma desbloqueado</p>

          <h1>¡Eres detective digital!</h1>

          <p className={styles.description}>
            Has completado los tres casos de SuperDetectives: observar antes de
            confiar, pensar antes de pulsar y jugar con cabeza.
          </p>

          <div className={styles.skills}>
            <div className={styles.skill}>🔎 Caso 1</div>

            <div className={styles.skill}>🛼 Caso 2</div>

            <div className={styles.skill}>⚽ Caso 3</div>
          </div>

          <section className={styles.diploma}>
            <h2>Diploma de Buen Super Detective Digital</h2>

            <p>
              AlbaFactie reconoce que has completado todos los casos digitales.
            </p>

            <div className={styles.stars}>⭐ ⭐ ⭐ ⭐ ⭐</div>

            <p className={styles.signature}>Con cariño,</p>

            <p className={styles.alba}>RieraDipe 💜</p>
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

export default DiplomaSuper;
