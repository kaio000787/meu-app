import React from "react";

import "./Curriculo.css";
import data from "./Curriculo.json";

function Curriculo() {
    return (
        <>
            <section>
                <h2 style={{textAlign: "center"}}>curriculo</h2>
                <p>{data.resumo}</p>
            </section>

            <section>

                <h2 style={{textAlign: "center"}}>acadêmico</h2>
               <ul style={{textAlign: "center"}}>
                    {data.experienciaAcademica.map((item, index) => (
                        <li key={index}>
                            <b>({item.dataInicio} - {item.dataFim})</b> {item.titulo};
                        </li>
                    ))}
                </ul>
                
            </section>
            
            <section>
                <h2 style={{textAlign: "center"}}>objetivo profissional</h2>
               <ul style={{textAlign: "center"}}> 
                   {data.objetivoProfissional.map((item, index) => (
                        <li key={index}>
                            <b>({item.dataInicio} - {item.dataFim})</b> {item.titulo};
                        </li>
                    ))}
                </ul>

            </section>
        </>

    )
}

export default Curriculo;