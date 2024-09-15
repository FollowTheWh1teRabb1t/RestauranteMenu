"use-client"
import Image from 'next/image'
import styles from "./CampoDeBusca.module.css";
import Lupa from "../../../public/Assets/lupa.png"

const CampoDeBusca = ({textoBuscaDigitado, handleBusca}) => {
    return (
    <div className={styles.container}>
        <Image className={styles.icone} src={ Lupa } alt="icone"/>
        <input
        type='text'
        value={textoBuscaDigitado}
        onChange={(event) => handleBusca(event.target.value)}
        placeholder='Pesquise aqui um de nossos pratos'/>
    </div>
    )
}

export default CampoDeBusca