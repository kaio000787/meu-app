import React from "react";

import "./Curriculo.css";
import data from "./Curriculo.json";

function Curriculo() {
    return (
        <>
            <section>
                <h2>curriculo</h2>
                <p>{data.resumo}</p>
            </section>

            <section>

                <h2>acadêmico</h2>
               <ul> 
                    {data.experienciaAcademica.map((item, index) => (
                        <li key={index}>
                            <b>({item.dataInicio} - {item.dataFim})</b> {item.titulo};
                        </li>
                    ))}
                </ul>
                
            </section>
            
            <section>
                <h2>objetivo profissional</h2>
               <ul> 
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