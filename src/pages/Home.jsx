import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MusicCard from "../components/MusicCard";
import "../styles/Home.css";

const Home = () => {
  const musicData = [
    { title: "Song 1", artist: "Artist 1", cover: "/assets/song1.png" },
    { title: "Song 2", artist: "Artist 2", cover: "/assets/song2.png" },
    // Adicione mais músicas aqui
  ];

  return (
    <div className="home">
      <Header />
      <div className="main-content">
        <Sidebar />
        <section className="music-list">
          {musicData.map((music, index) => (
            <MusicCard key={index} {...music} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Home;
