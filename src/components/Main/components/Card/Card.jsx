import React, { useState } from 'react';

export default function Card({ card, onCardClick, onRemoveCardClick }) {
  const { name, link, isLiked } = card;
  const [liked, setLiked] = useState(isLiked);

  const handleLikeClick = () => setLiked(!liked);
  const handleClick = () => onCardClick(card);

  return (
    <div className="cards">
      <button 
        className="elements__delete" 
        type="button" 
        aria-label="Eliminar tarjeta"
        onClick={onRemoveCardClick}
      />
      <img 
        className="cards__imagen" 
        src={link} 
        alt={`Imagen de ${name}`} 
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
      />
      <div className="group">
        <h2 className="group__text">{name}</h2>
        <button
          aria-label="Me gusta"
          type="button"
          className={`group__imagen-button ${liked ? 'group__imagen-button_active' : ''}`}
          onClick={handleLikeClick}
        />
      </div>
    </div>
  );
}
