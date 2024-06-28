import React from "react";

import "./Cabecalho.css";

function Cabecalho(props) {

     const { nome, cargo, foto } = props.informacao;

    return (
        <header> 
            <img src={foto} alt="foto de rosto de kaio"/>
            <h1 id="nome-perfil">{ nome }</h1>
            <h3 id="eventoSubtitulo">{ cargo }</h3>
        </header>
   )
}

export default Cabecalho;