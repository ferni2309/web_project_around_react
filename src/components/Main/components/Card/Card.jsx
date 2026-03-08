import React, { useContext } from 'react'; // Importamos useContext
import { CurrentUserContext } from '../../../../context/CurrentUserContext'; // Importamos el contexto

export default function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  // 1. Suscribirse al contexto del usuario actual
  const currentUser = useContext(CurrentUserContext);

  // 2. Verificar si somos los dueños de la tarjeta (para mostrar el botón de eliminar)
  // Nota: En la API, card.owner es un objeto que contiene el _id
  const isOwn = card.owner._id === currentUser._id;

  // 3. Crear una variable para la clase del botón de eliminar según el PDF
  const cardDeleteButtonClassName = (
    `elements__delete ${isOwn ? 'elements__delete_visible' : 'elements__delete_hidden'}`
  );

  // 4. Verificar si el usuario actual ya le dio "like"
  const isLiked = card.likes.some(user => user._id === currentUser._id);
  const cardLikeButtonClassName = (
    `group__imagen-button ${isLiked ? 'group__imagen-button_active' : ''}`
  );

  const handleClick = () => onCardClick(card);
  const handleLikeClick = () => onCardLike(card);
  const handleDeleteClick = () => onCardDelete(card);

  return (
    <div className="cards">
      {/* El botón de borrar ahora usa la clase dinámica basada en el propietario */}
      <button 
        className={cardDeleteButtonClassName} 
        type="button" 
        aria-label="Eliminar tarjeta"
        onClick={handleDeleteClick}
      />
      <img 
        className="cards__imagen" 
        src={card.link} 
        alt={`Imagen de ${card.name}`} 
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
      />
      <div className="group">
        <h2 className="group__text">{card.name}</h2>
        <div className="group__like-container">
          <button
            aria-label="Me gusta"
            type="button"
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          />
          {/* Se recomienda añadir el contador de likes según el brief habitual */}
          <span className="group__like-count">{card.likes.length}</span>
        </div>
      </div>
    </div>
  );
}
