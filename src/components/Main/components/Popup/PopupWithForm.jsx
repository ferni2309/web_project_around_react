import React from "react";

function PopupWithForm({ name, title, children, buttonText, onClose, onSubmit }) {
  return (
    <div className={`popup__container popup_type_${name}`}>
      <button className="popup__close" type="button" onClick={onClose} />
      <h2 className="popup__title">{title}</h2>
      <form className="popup__form" name={name} onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  );
}

export default PopupWithForm;
