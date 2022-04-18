import freecodecam from './img/freecodecam.png';
import './App.css';
import Contador from './components/Contador';
import Boton from './components/Boton';
import { useState } from 'react';

function App() {
  //creando mi primer Hoots
  const [numeclic, setNumclics] = useState(0);
  // Creo una array funtion manejarclic
  const manejarclic = () => {
    setNumclics(numeclic + 1);
  };

  const reiniciarcouter = () => {
    setNumclics(0);
  };
  return (
    <div className="App">
      <div className="freecodecam-logo-contenedor">
        <img
          className="freecodecam-logo"
          src={freecodecam}
          alt="Logo Free codecamp"
        />
      </div>
      <div className="contenedor-principal">
        <Contador numclic={numeclic} />
        <Boton texto="Clic" esBotonClic={true} manejarclic={manejarclic} />

        <Boton
          texto="Reiniciar"
          esBotonClic={false}
          manejarclic={reiniciarcouter}
        />
      </div>
    </div>
  );
}

export default App;
