import React, { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../../context/CurrentUserContext';

function EditProfile({ isOpen, onUpdateUser }) {
  // 1. Suscripción al contexto (Pág. 4: "Componentes Main y Card están suscritos...") 
  // Nota: EditProfile también lo requiere para mostrar los datos actuales.
  const currentUser = useContext(CurrentUserContext);

  // 2. Estado local para los inputs (Variables descriptivas en camelCase - Pág. 2)
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  // 3. Efecto para cargar datos actuales (Pág. 3: "los datos se sustituyen por los actuales")
  useEffect(() => {
    if (currentUser.name && currentUser.about) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser, isOpen]);

  // Manejadores de cambio (Nombres comienzan con verbo - Pág. 3)
  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  // 4. Manejador de envío (Pág. 4: "controladores como handleUpdateUser se describen en App")
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <form className="form" name="edit-profile" onSubmit={handleSubmit}>
      <input 
        type="text" 
        className="form__input" 
        placeholder="Nombre" 
        required 
        minLength="2" 
        maxLength="40" 
        value={name || ''} 
        onChange={handleNameChange}
      />
      <span className="form__input-error"></span>
      
      <input 
        type="text" 
        className="form__input" 
        placeholder="Acerca de mí" 
        required 
        minLength="2" 
        maxLength="200" 
        value={description || ''} 
        onChange={handleDescriptionChange}
      />
      <span className="form__input-error"></span>
      
      <button type="submit" className="popup__button">Guardar</button>
    </form>
  );
}

export default EditProfile;
