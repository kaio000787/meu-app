import React from "react";
import { Link } from 'react-router-dom';

import "./BarraNavegacao.css";


function BarraNavegacao() {
    return (
        <nav>
          <ul>
              <li className="button"><Link to="/">curriculo</Link></li>
              <li className="button"><Link to="/portfolio">portfólio</Link></li>
              <li className="button"><Link to="/contato">contato</Link></li>
          </ul>
        </nav>
    );
}

export default BarraNavegacao;  