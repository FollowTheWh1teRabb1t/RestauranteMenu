"use-client"
import Image from 'next/image'
import styles from "./CampoDeBusca.module.css";
const CampoDeBusca = ({textoBuscaDigitado, handleBusca}) => {
    return (
    <div className={styles.container}>
       <Image
                className={styles.icone}
                src="/assets/lupa.png" // Caminho relativo à pasta public
                alt="icone"
                width={24} // Defina a largura da imagem
                height={24} // Defina a altura da imagem
            />
        <input
        type='text'
        value={textoBuscaDigitado}
        onChange={(event) => handleBusca(event.target.value)}
        placeholder='Pesquise aqui um de nossos pratos'/>
    </div>
    )
}

export default CampoDeBusca