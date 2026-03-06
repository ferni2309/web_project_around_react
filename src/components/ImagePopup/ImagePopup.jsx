function ImagePopup({ card, onClose }) {
  return (
    <div className={`image-popup ${card ? 'popup_opened' : ''}`}>
      <div className="image-popup__content">
        <button className="image-popup__close" onClick={onClose} type="button" />
        <img src={card?.link} alt={card?.name} className="image-popup__img" />
        <p className="image-popup__caption">{card?.name}</p>
      </div>
    </div>
  );
}
export default ImagePopup;
