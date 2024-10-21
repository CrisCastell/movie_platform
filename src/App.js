import { Routes, Route } from 'react-router-dom';
import Inicio from './ui/pages/InicioPage';
import Peliculas from './ui/pages/PeliculasPage';
import TvShows from './ui/pages/TvShowsPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/peliculas" element={<Peliculas />} />
          <Route path="/tv-shows" element={<TvShows />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
