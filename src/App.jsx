import React from "react";

import api from "./api";

import "./App.css";

import BarraNavegacao from "./componentes/BarraNavegacao/BarraNavegacao";
import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Rodape from "./componentes/Rodape/Rodape";


import Curriculo from "./componentes/Curriculo/Curriculo";
import Portfolio from "./componentes/Portfolio/Portfolio";
import Contato from "./componentes/Contato/Contato";


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [informacao, setInformacoes] = React.useState({});
  const [curriculo, setCurriculo] = React.useState({});
  const [portfolio, setPortfolio] = React.useState({});

  const fetchDados = async () => {
    try {
      const informacoes = await api.get("/informacoes/1");
      setInformacoes ({
        foto: informacoes.data.foto,
        nome: informacoes.data.nome,
        cargo: informacoes.data.cargo,
      });
console.log(curriculo)
      const experienciaAcademica = await api.get("/experiencias?tipo=academico");
      const experienciaProfissional = await api.get("/experiencias?tipo=profissional");

      setCurriculo ({
        resumo: informacoes.data.resumo,
        experienciaAcademica: experienciaAcademica.data,
        experienciaProfissional: experienciaProfissional.data
        

      });
      

      const portfolio = await api.get("/portfolio")
      setPortfolio (portfolio.data)

    } catch (error) {
      console.error('Erro ao carregar os dados:', error);
    }
  };

  React.useEffect(() => {
    fetchDados();
  }, []);
 
  return (
    <>

    <Cabecalho informacao={informacao}></Cabecalho>

    <BrowserRouter>
      <BarraNavegacao></BarraNavegacao>
      <Routes>
        <Route index element={<Curriculo curriculo={curriculo} />} />
        <Route path="/portfolio" element={<Portfolio portfolio={portfolio} />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
    <Rodape></Rodape>
    </>
  );
}

export default App;
