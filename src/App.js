import { Routes, Route } from 'react-router-dom';
// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';
// Components
import Header from './ui/components/common/Header';
import Inicio from './ui/pages/InicioPage';
import Peliculas from './ui/pages/PeliculasPage';
import TvShows from './ui/pages/TvShowsPage';
import Footer from './ui/components/common/Footer/Footer';
import DetailPage from './ui/pages/DetallePage';
import FavoritosPage from './ui/pages/FavoritosPage';
import NotFoundPage from './ui/pages/NotFoundPage';
import {ToastContainer } from 'react-toastify';


function App() {
  return (
    <div className="App">
      <Header />
      <main className='container-fluid p-0'>
      <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/peliculas" element={<Peliculas />} />
          <Route path="/tv-shows" element={<TvShows />} />
          <Route path="/favoritos" element={<FavoritosPage />} />
          <Route path="/detalle" element={<DetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer />  {/* Contenedor para las notificaciones */}

    </div>
  );
}

export default App;
