function PopupWithForm({ title, name, children, isOpen, onClose, onSubmit }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button type="button" className="popup__close" onClick={onClose}></button>
        <h2 className="popup__title">{title}</h2>
        <form className="form" name={name} onSubmit={onSubmit}>
          {children}
          <button type="submit" className="popup__button">Guardar</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
