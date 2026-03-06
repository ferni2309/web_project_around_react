
function RemoveCard() {
  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log("Tarjeta eliminada");
  };

  return (
    <form className="form form_type_remove" name="remove-card" onSubmit={handleSubmit}>
      <button 
        type="submit" 
        className="form__submit form__submit_type_remove"
      >
        Sí
      </button>
    </form>
  );
}

export default RemoveCard;
