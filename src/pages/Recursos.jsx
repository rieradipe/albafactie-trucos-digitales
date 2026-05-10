import styles from "./Recursos.module.css";

const recursos = [
  {
    titulo: "🛡️ Seguridad digital",
    descripcion: "Consejos y ayuda para acompañar a peques en Internet.",
    enlaces: [
      {
        nombre: "INCIBE - Internet Segura for Kids",
        url: "https://www.is4k.es/",
      },
      {
        nombre: "UNICEF España",
        url: "https://www.unicef.es/",
      },
    ],
  },

  {
    titulo: "👩‍⚕️ Salud y bienestar infantil",
    descripcion:
      "Recursos sobre pantallas, emociones y acompañamiento familiar.",
    enlaces: [
      {
        nombre: "Asociación Española de Pediatría",
        url: "https://www.aeped.es/",
      },
    ],
  },

  {
    titulo: "☎️ Pedir ayuda",
    descripcion: "Si un peque necesita ayuda o apoyo emocional, no está solo.",
    enlaces: [
      {
        nombre: "Fundación ANAR",
        url: "https://www.anar.org/",
      },
    ],
  },
];

const Recursos = () => {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <h1>Familias, profes y peques acompañados</h1>

        <p className={styles.description}>
          Internet puede ser un lugar maravilloso cuando aprendemos a usarlo con
          seguridad, compañía y confianza.
        </p>
      </section>

      <section className={styles.grid}>
        {recursos.map((bloque) => (
          <article key={bloque.titulo} className={styles.card}>
            <h2>{bloque.titulo}</h2>

            <p>{bloque.descripcion}</p>

            <div className={styles.links}>
              {bloque.enlaces.map((enlace) => (
                <a
                  key={enlace.nombre}
                  href={enlace.url}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.link}
                >
                  {enlace.nombre}
                </a>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className={styles.footerText}>
        <p>
          💜 Internet forma parte de su vida. Acompañarlos también es parte de
          la nuestra.
        </p>
      </section>
    </main>
  );
};

export default Recursos;
