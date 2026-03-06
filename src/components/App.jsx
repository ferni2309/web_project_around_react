import { useState } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import Popup from './Main/components/Popup/Popup';
import EditProfile from './Form/EditProfile/EditProfile';
import NewCard from './Form/NewCard/NewCard';
import EditAvatar from './Form/EditAvatar/EditAvatar';
import ImagePopup from '../components/ImagePopup/ImagePopup';
import RemoveCard from './RemoveCard/RemoveCard';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isRemoveCardPopupOpen, setIsRemoveCardPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);
  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);
  const handleRemoveCardClick = () => setIsRemoveCardPopupOpen(true);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsRemoveCardPopupOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className="page">
      <Header />
      
      <Main 
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
        onCardClick={handleCardClick}
        onRemoveCardClick={handleRemoveCardClick}
      />

      <Footer />

      <Popup title="Editar perfil" name="edit-profile" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <EditProfile />
      </Popup>

      <Popup title="Nuevo lugar" name="new-card" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <NewCard />
      </Popup>

      <Popup title="Actualizar foto de perfil" name="edit-avatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <EditAvatar />
      </Popup>

      <Popup title="¿Estás seguro?" name="remove-card" isOpen={isRemoveCardPopupOpen} onClose={closeAllPopups}>
        <RemoveCard />
      </Popup>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
