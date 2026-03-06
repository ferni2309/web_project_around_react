function NewCard() {
  return (
    <form className="form">
      <input type="text" className="form__input" placeholder="Título" required />
      <input type="url" className="form__input" placeholder="Enlace a la imagen" required />
      <button type="submit" className="popup__button">Crear</button>
    </form>
  );
}

export default NewCard;
