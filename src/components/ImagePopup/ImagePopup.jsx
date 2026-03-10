import React from "react";

function ImagePopup({ card }) {
  // Si no hay tarjeta seleccionada, no renderizamos nada
  if (!card) return null;

  return (
    <div className="popup__container-image">
      {/* Ya no hay botón cerrar aquí, lo pone el componente Popup */}
      <img 
        className="popup__image" 
        src={card.link} 
        alt={card.name} 
      />
      <p className="popup__caption">{card.name}</p>
    </div>
  );
}

export default ImagePopup;
