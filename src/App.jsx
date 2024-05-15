import React from "react";

import "./App.css";

import BarraNavegacao from "./componentes/BarraNavegacao/BarraNavegacao";
import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Rodape from "./componentes/Rodape/Rodape";


import Curriculo from "./componentes/Curriculo/Curriculo";
import Portfolio from "./componentes/Portfolio/Portfolio";
import Contato from "./componentes/Contato/Contato";


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
 
  return (
    <>
      <Cabecalho></Cabecalho>
    
      <BrowserRouter>
      <BarraNavegacao></BarraNavegacao>
        <Routes>
          <Route index element={<Curriculo />} />
          <Route path="Portfolio" element={<Portfolio />} />
          <Route path="Contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
      
      <Rodape></Rodape>
    </>
  )
}

export default App;
