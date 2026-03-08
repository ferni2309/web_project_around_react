import React, { useContext } from 'react'; // Importamos useContext
import { CurrentUserContext } from '../../context/CurrentUserContext'; // Importamos el contexto
import editAvatarIcon from '../../assets/images/EditAvatar.png';
import editButtonIcon from '../../assets/images/EditButton.png';
import addButtonIcon from '../../assets/images/addButton.png';
import Card from './components/Card/Card';

// Nota: initialCards debe venir ahora desde el estado en App.jsx a través de props
function Main({ 
  onEditProfileClick, 
  onAddPlaceClick, 
  onEditAvatarClick, 
  onCardClick, 
  onRemoveCardClick,
  cards // Recibe las tarjetas por props desde App
}) {
  
  // 1. Suscripción al contexto para obtener los datos del usuario
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar">
          {/* 2. Usamos currentUser.avatar en lugar de la imagen estática */}
          <img 
            src={currentUser.avatar} 
            alt={`Foto de ${currentUser.name}`} 
            className="profile__imagen" 
          />
          <button type="button" className="profile__EditAvatar" onClick={onEditAvatarClick}>
            <img src={editAvatarIcon} alt="Editar avatar" />
          </button>
        </div>
        <div className="profile__info">
          {/* 3. Usamos currentUser.name y currentUser.about */}
          <h1 className="profile__name">{currentUser.name}</h1>
          <button type="button" className="profile__EditButton" onClick={onEditProfileClick}>
            <img src={editButtonIcon} alt="Editar perfil" />
          </button>
          <h2 className="profile__acerca-de-mi">{currentUser.about}</h2>
        </div>
        <button type="button" className="profile__AddButton" onClick={onAddPlaceClick}>
          <img src={addButtonIcon} alt="Agregar" />
        </button>
      </section>

      <section className="elements">
        <ul className="cards__list" style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '20px' }}>
          {/* 4. Renderizamos el array de tarjetas que viene del estado de App */}
          {cards.map((card) => (
            <Card 
              key={card._id} 
              card={card} 
              onCardClick={onCardClick}
              onRemoveCardClick={onRemoveCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
