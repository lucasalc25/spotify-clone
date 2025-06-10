import "../styles/MusicCard.css";

const MusicCard = ({ title, artist, cover }) => {
  return (
    <div className="music-card">
      <img src={cover} alt={title} className="music-cover" />
      <div className="music-info">
        <h3>{title}</h3>
        <p>{artist}</p>
      </div>
    </div>
  );
};

export default MusicCard;
