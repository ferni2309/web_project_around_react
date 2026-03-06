function EditProfile() {
  return (
    <form className="form">
      <input type="text" className="form__input" placeholder="Nombre" required minLength="2" maxLength="40" />
      <span className="form__input-error"></span>
      <input type="text" className="form__input" placeholder="Acerca de mí" required minLength="2" maxLength="200" />
      <span className="form__input-error"></span>
      <button type="submit" className="popup__button">Guardar</button>
    </form>
  );
}

export default EditProfile;
