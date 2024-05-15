import React from "react";
import kaioAvatar from "../../assets/kaio avatar.jpeg";

import "./Cabecalho.css";


function Cabecalho() {
    return (
        <header> 
            <img src={kaioAvatar} alt="foto de rosto de kaio"/>
            <h1 id="nome-perfil">Kaio César</h1>
            <h3 id="eventoSubtitulo">Desenvolvedor de software</h3>
        </header>
   )
}

export default Cabecalho;