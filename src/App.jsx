import React, { useState } from 'react'
import './App.css'


function App() {
  const [cor, setCor] = useState("vermelha");
  const mensagen = {
    vermelha: "PARE!",
    amarela: "ATENÇÃO!",
    verde: "SIGA!"
  };

  const cores = {
  vermelha: "red",
  amarela: "yellow",
  verde: "green" 
};

  function trocaSinaleira() {
    if (cor === "vermelha") {
      setCor("amarela");
    } else if (cor === "amarela") {
      setCor("verde");
    } else {
      setCor("vermelha");
    }
  }

  return (
    <>
    <h1>Aula de Trânsito - Escola Avenida</h1>
    <h2>Cores da Sinaleira</h2>
    <hr />
    
    <img src={`${cor}.png`}alt="Sinaleira" onClick={trocaSinaleira}/>
    <h3 style={{ color: cores[cor] }}>{mensagen[cor]}</h3>
    <p className='obs'>Obs.: Clique sobre a imagem para trocar o sinal</p>
    </>
  )
}

export default App
