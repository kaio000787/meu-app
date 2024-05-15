import React, { useState } from "react";

import "./Contato.css";

function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  function enviarFormulario(event) {
    event.preventDefault();

    console.log("Formulario enviado");

    const texto = `nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`;

    const numeroWhatapp = import.meta.env.VITE_WHATSAPP_NUMBER; 5581982562343

    const linkWhatapp = `https://api.whatsapp.com/send?phone=${numeroWhatapp}&text=${encodeURIComponent(texto)}`;

    window.open(linkWhatapp, `_blank`);

  }

  function mascaraTelefone(event){
    const texto = event.target.value;
    const textoApenasNumeros = texto.replace(/\D/g, '').substring(0, 11);

    let telefoneFormatado = textoApenasNumeros.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    
    if (textoApenasNumeros.length < 11) {
        telefoneFormatado = textoApenasNumeros.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    }
      
    setTelefone(telefoneFormatado);

   }

  return (
    
      <form onSubmit={enviarFormulario}>

        <fieldset>
          <label htmlFor="input-nome">nome</label>
          <input
            type="text"
            name="input-nome"
            id="input-nome"
            placeholder="Digite seu nome"
            required
            minLength="2"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="input-email">E-mail</label>
          <input
            type="email"
            name="input-email"
            id="input-email"
            placeholder="Digite seu E-mail"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="input-tel">Telefone</label>
          <input
            type="tel"
            name="input-tel"
            id="input-tel"
            placeholder="(99) 99999-9999"
            required
            pattern="^\(\d{2}\) \d{5}-\d{4}$"
            maxLength="15"  
            value={telefone}
            onChange={(event) => mascaraTelefone(event)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="input-msg">Mensagem</label>
          <textarea
            name="input-msg"
            id="input-msg"
            cols="30"
            rows="10"
            value={mensagem}
            onChange={(event) => setMensagem(event.target.value)}
          ></textarea>
        </fieldset>

        <center>
          <input type="submit" value="ENVIAR" className="button" />
        </center>
     
      </form>

  );
}

export default Contato;
