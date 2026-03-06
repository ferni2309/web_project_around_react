export default function EditAvatar() {
  return (
    <form className="form">
      <input
        type="url"
        id="avatar-url"
        className="form__input"
        placeholder="Enlace a la imagen de perfil"
        required
      />
      <span className="form__input-error avatar-url-error"></span>
      
      <button type="submit" className="popup__button">
        Guardar
      </button>
    </form>
  );
}
