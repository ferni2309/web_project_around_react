import { useContext, useState } from "react";
import Card from "./components/Card/Card";
import EditProfile from "./components/Popup/EditProfile/EditProfile";
import EditAvatar from "./components/Popup/EditAvatar/EditAvatar";
import NewCard from "./components/Popup/NewCard/NewCard";
import ImagePopup from "../ImagePopup/ImagePopup";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Main({ cards, onUpdateUser, onUpdateAvatar, onAddPlaceSubmit, onCardLike, onCardDelete }) {
  const { currentUser } = useContext(CurrentUserContext);

  // Estados de popups
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isNewCardPopupOpen, setIsNewCardPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  // Funciones para abrir/cerrar
  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);
  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);
  const handleNewCardClick = () => setIsNewCardPopupOpen(true);
  const handleCardClick = (card) => setSelectedCard(card);

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsNewCardPopupOpen(false);
    setSelectedCard(null);
  };

  return (
    <main className="content">
      <section className="profile">
        <div className="profile_avatar-container" onClick={handleEditAvatarClick}>
          <img src={currentUser.avatar || ""} alt="Avatar" className="profile_avatar" />
          <div className="profile_avatar-overlay"></div>
        </div>

        <div className="profile_info">
          <div className="profile_title-container">
            <h1 className="profile_name">{currentUser.name}</h1>
            <button className="profile_edit-button" type="button" onClick={handleEditProfileClick}></button>
          </div>
          <p className="profile_about">{currentUser.about}</p>
        </div>
        <button className="profile_add-button" type="button" onClick={handleNewCardClick}></button>
      </section>

      <section className="cards">
        <ul className="cards_list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={handleCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>

      {/* Popups */}
      <EditProfile isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={onUpdateUser} />
      <EditAvatar isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={onUpdateAvatar} />
      <NewCard isOpen={isNewCardPopupOpen} onClose={closeAllPopups} onAddPlaceSubmit={onAddPlaceSubmit} />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </main>
  );
}

export default Main;