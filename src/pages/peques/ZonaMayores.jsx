import styles from "./ZonaMayores.module.css";

const ZonaMayores = () => {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.text}>
          <p className={styles.badge}>Para familias y profes</p>

          <h1>Educar en Internet también es cuidar</h1>

          <p>
            Soy madre de familia numerosa, trabajadora, y sé que la vida muchas
            veces no nos da ni un respiro. Aun así, hay aprendizajes que no
            podemos dejar para después.
          </p>

          <p>
            Igual que enseñamos a una niña o a un niño a no cruzar en rojo, a no
            irse con una persona desconocida o a pedir ayuda si algo le
            incomoda, también necesitamos enseñarles a moverse por Internet.
          </p>

          <p>
            Internet no es “malo”. Al contrario: nos conecta, nos abre puertas,
            nos permite aprender, crear, jugar y descubrir el mundo. Pero como
            cualquier espacio, también necesita normas, acompañamiento y mirada
            adulta.
          </p>

          <p>
            Esta zona nace para que los peques aprendan seguridad digital
            jugando: sin miedo, sin culpa y con palabras que puedan entender.
          </p>
        </div>

        <div className={styles.imageBox}>
          <img src="/Familia.png" alt="Ilustración familiar de AlbaFactie" />
        </div>
      </section>
    </main>
  );
};

export default ZonaMayores;
