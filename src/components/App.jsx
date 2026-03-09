import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({ name: "", about: "", avatar: "" });
  const [cards, setCards] = useState([]);

  // Cargar datos iniciales
  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setCurrentUser(userData);
        setCards(cardsData);
      })
      .catch((err) => console.log("Error inicial:", err));
  }, []);

  // Actualizar perfil
  const handleUpdateUser = (data) => {
    api.setUserInfo(data)
      .then((newUserData) => {
        setCurrentUser(newUserData);
      })
      .catch((err) => console.log("Error al actualizar perfil:", err));
  };

  // Actualizar avatar
  const handleUpdateAvatar = (data) => {
    api.setUserAvatar(data)
      .then((newUserData) => {
        setCurrentUser(newUserData);
      })
      .catch((err) => console.log("Error al actualizar avatar:", err));
  };

  // Añadir nueva tarjeta
  const handleAddPlaceSubmit = (data) => {
    api.addCard(data)
      .then((newCard) => {
        setCards([newCard, ...cards]);
      })
      .catch((err) => console.log("Error al añadir tarjeta:", err));
  };

  // Like/dislike tarjeta
  const handleCardLike = (card) => {
    const isLiked = card.isLiked;
    api.changeLikeStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
      })
      .catch((err) => console.error("Error en like:", err));
  };

  // Eliminar tarjeta
  const handleCardDelete = (card) => {
    api.deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => console.log("Error al eliminar:", err));
  };

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <div className="page">
        <Header />
        <Main
          cards={cards}
          onUpdateUser={handleUpdateUser}
          onUpdateAvatar={handleUpdateAvatar}
          onAddPlaceSubmit={handleAddPlaceSubmit}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;