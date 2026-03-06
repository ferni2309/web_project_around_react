import profileImage from '../../assets/images/profile.jpg';
import editAvatarIcon from '../../assets/images/EditAvatar.png';
import editButtonIcon from '../../assets/images/EditButton.png';
import addButtonIcon from '../../assets/images/addButton.png';
import Card from './components/Card/Card';

const initialCards = [
  { isLiked: false, _id: '5d1f0611d321eb4bdcd707dd', name: 'Yosemite Valley', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg' },
  { isLiked: false, _id: '5d1f064ed321eb4bdcd707de', name: 'Lake Louise', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg' },
];

function Main({ onEditProfileClick, onAddPlaceClick, onEditAvatarClick, onCardClick, onRemoveCardClick }) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar">
          <img src={profileImage} alt="Perfil" className="profile__imagen" />
          <button type="button" className="profile__EditAvatar" onClick={onEditAvatarClick}>
            <img src={editAvatarIcon} alt="Editar avatar" />
          </button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">Jacques Cousteau</h1>
          <button type="button" className="profile__EditButton" onClick={onEditProfileClick}>
            <img src={editButtonIcon} alt="Editar perfil" />
          </button>
          <h2 className="profile__acerca-de-mi">Explorador</h2>
        </div>
        <button type="button" className="profile__AddButton" onClick={onAddPlaceClick}>
          <img src={addButtonIcon} alt="Agregar" />
        </button>
      </section>

      <section className="elements">
        <ul className="cards__list" style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '20px' }}>
          {initialCards.map((card) => (
            <Card 
              key={card._id} 
              card={card} 
              onCardClick={onCardClick}
              onRemoveCardClick={onRemoveCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
