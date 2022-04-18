import React from 'react';
import '../style/button.css';

function Boton({ texto, esBotonClic, manejarclic }) {
  return (
    <button
      className={esBotonClic ? 'boton-clic' : 'boton-reiniciar'}
      onClick={manejarclic}
    >
      {texto}
    </button>
  );
}
export default Boton;
