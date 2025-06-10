import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <aside class="sidebar">
      <h2>Sua Biblioteca</h2>
      <div class="search">
        <input type="text" placeholder="Buscar..." />
      </div>
      <div class="menu-item">Músicas Curtidas</div>
      <div class="menu-item">Playlists</div>
    </aside>
  );
};

export default Sidebar;
