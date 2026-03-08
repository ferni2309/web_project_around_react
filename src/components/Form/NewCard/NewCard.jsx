import React, { useState, useEffect } from 'react';
import PopupWithForm from '../PopupWithForm';

function NewCard({ isOpen, onClose, onAddPlaceSubmit }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlaceSubmit({ name, link });
  }

  return (
    <PopupWithForm 
      title="Nuevo lugar" 
      name="new-card" 
      isOpen={isOpen} 
      onClose={onClose} 
      onSubmit={handleSubmit}
    >
      <input 
        type="text" 
        className="form__input" 
        placeholder="Título" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        required 
        minLength="2"
      />
      <span className="form__input-error"></span>
      <input 
        type="url" 
        className="form__input" 
        placeholder="Enlace a la imagen" 
        value={link}
        onChange={(e) => setLink(e.target.value)}
        required 
      />
      <span className="form__input-error"></span>
    </PopupWithForm>
  );
}

export default NewCard;
