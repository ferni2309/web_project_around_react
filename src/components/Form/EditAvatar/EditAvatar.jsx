import React, { useRef, useEffect } from 'react';
import PopupWithForm from '../PopupWithForm';

function EditAvatar({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef(); // Hook useRef para el input

  // Limpiar el input al abrir/cerrar
  useEffect(() => {
    avatarRef.current.value = '';
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm 
      title="Actualizar foto de perfil" 
      name="edit-avatar" 
      isOpen={isOpen} 
      onClose={onClose} 
      onSubmit={handleSubmit}
    >
      <input 
        ref={avatarRef}
        type="url" 
        className="form__input" 
        placeholder="Enlace a la imagen" 
        required 
      />
      <span className="form__input-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatar;
