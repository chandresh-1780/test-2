import React from "react";
import styles from "./content.module.scss";

const Content = () => {
  return (
    <div className={styles.contentMainDiv}>
      <div className={styles.contentContainer}>
        <div className={styles.testSection}>
          <div className={styles.questionContent}>
            <p>
              Prova com 10 questões gerais sobre a matéria de ciências humanas.
            </p>
            <br />
            <p>O que são as Ciências Humanas?</p>
            <br />
            <p>
              A área das Ciências Humanas é o conjunto de ciências que tem como
              objeto de estudo o ser humano. Entre as ciências da área de
              humanas, estão a Filosofia, Sociologia ou Ciências Sociais,
              História, Geografia, Letras, Teologia, Antropologia, Comunicação
              Social, Psicologia, Linguística, Artes, entre outras.
            </p>
          </div>
        </div>

        <div className={styles.registrationForm}>
          <h2>Cadastro</h2>
          <form className={styles.form}>
            <input type="text" placeholder="nome 15" />
            <input type="email" placeholder="email" />
            <input type="password" placeholder="senha" />
            <div className={styles.formBtm}>
              <p>Já tem uma conta?</p>
              <button type="submit" className={styles.formBtmBtn}>
                Concluir
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Content;
