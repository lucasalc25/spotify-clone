import "../styles/Player.css";

const Player = () => {
  return (
    <div className="player">
      <div className="song-info">
        <img src="/assets/playing-song.png" alt="Song Cover" />
        <div>
          <h2>Song Title</h2>
          <p>Artist Name</p>
        </div>
      </div>
      <div className="controls">
        <button>⏮</button>
        <button>▶️</button>
        <button>⏭</button>
      </div>
      <div className="progress">
        <span>0:00</span>
        <progress value="30" max="100"></progress>
        <span>3:45</span>
      </div>
    </div>
  );
};

export default Player;
