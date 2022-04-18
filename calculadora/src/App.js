import logo from './logo.svg';
import './App.css';
import logofree from './img/freecodecam.png';
import Boton from './components/Boton';

function App() {
  return (
    <div className="App">
      <div className="freeculcam-logo-contenedor">
        <img src={logofree} className="freeculcam-logo" />
      </div>
      <div className="contenedor-calculadora">
        <div className="fila">
          <Boton>1</Boton>
          <Boton>+</Boton>
        </div>
        <div className="fila"></div>
        <div className="fila"></div>
        <div className="fila"></div>
        <div className="fila"></div>
      </div>
    </div>
  );
}

export default App;
