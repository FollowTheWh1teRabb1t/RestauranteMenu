"use client";

import styles from "./Categorias.module.css";
import Image from 'next/image';

const Categorias = ({ handleFiltro, botaoClicado }) => {
  return (
    <section className={styles.secao_categorias}>
      <div className={styles.container_botoes}>
        <button
          className={botaoClicado === "Entradas" ? styles.acenderBtn : styles.apagarBtn}
          onClick={() => handleFiltro("Entradas")}
        >
          <Image
            className={styles.icone}
            src="/assets/entrada.png" // Caminho relativo à pasta public
            alt="ícone"
            width={24} // Ajuste conforme necessário
            height={24} // Ajuste conforme necessário
          />
          Entradas
        </button>

        <button
          className={botaoClicado === "Massas" ? styles.acenderBtn : styles.apagarBtn}
          onClick={() => handleFiltro("Massas")}
        >
          <Image
            className={styles.icone}
            src="/assets/massa.png"
            alt="ícone"
            width={24}
            height={24}
          />
          Massas
        </button>

        <button
          className={botaoClicado === "Carnes" ? styles.acenderBtn : styles.apagarBtn}
          onClick={() => handleFiltro("Carnes")}
        >
          <Image
            className={styles.icone}
            src="/assets/carne.png"
            alt="ícone"
            width={24}
            height={24}
          />
          Carnes
        </button>

        <button
          className={botaoClicado === "Bebidas" ? styles.acenderBtn : styles.apagarBtn}
          onClick={() => handleFiltro("Bebidas")}
        >
          <Image
            className={styles.icone}
            src="/assets/bebidas.png"
            alt="ícone"
            width={24}
            height={24}
          />
          Bebidas
        </button>

        <button
          className={botaoClicado === "Saladas" ? styles.acenderBtn : styles.apagarBtn}
          onClick={() => handleFiltro("Saladas")}
        >
          <Image
            className={styles.icone}
            src="/assets/salada.png"
            alt="ícone"
            width={24}
            height={24}
          />
          Saladas
        </button>

        <button
          className={botaoClicado === "Sobremesas" ? styles.acenderBtn : styles.apagarBtn}
          onClick={() => handleFiltro("Sobremesas")}
        >
          <Image
            className={styles.icone}
            src="/assets/sobremesa.png"
            alt="ícone"
            width={24}
            height={24}
          />
          Sobremesas
        </button>
      </div>
    </section>
  );
};

export default Categorias;
