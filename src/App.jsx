import React, { useState } from 'react'
import './App.css'


function App() {
  const [cor, setCor] = useState("vermelha");
  const [mensa, setMensa] = useState( "PARE!!!" );
  


  function trocaSinaleira() {
    if (cor == "vermelha") {
      setCor("amarela");
      setMensa(`ATENÇÃO`)
    } else if (cor == "amarela") {
      setCor("verde");
      setMensa(`Siga em frente`)
    } else {
      setCor("vermelha");
      setMensa(`PARE!!!!`)
    }
  }

  return (
    <>
    <h1>Aula de Trânsito - Escola Avenida</h1>
    <h2>Cores da Sinaleira</h2>
    <hr />
    
    <img src={`${cor}.png`}alt="Sinaleira" onClick={trocaSinaleira}/>
    <h3 className={`estilo-${cor}`}>{mensa}</h3>
    <p className='obs'>Obs.: Clique sobre a imagem para trocar o sinal</p>
    </>
  )
}

export default App
