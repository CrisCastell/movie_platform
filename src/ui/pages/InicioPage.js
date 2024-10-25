import React, { useEffect, useState } from 'react';
import { fetchPeliculasHome } from '../../core/useCases/pelicula/fetchPeliculasHome';
import { fetchTvShowsHome } from '../../core/useCases/tvShow/fetchTvShowsHome';
//Components
import MediaItemCarousel from '../components/common/MediaItemCarousel';
import CardSlider from '../components/common/CardSlider';

const InicioPage = () => {
  const [peliculasData, setPeliculasData] = useState({
    populares: [],
    tendencias: [],
    mejorValoradas: [],
  });
  const [tvShowsData, setTvShowsData] = useState({
    populares: [],
    tendencias: [],
    mejorValoradas: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const peliculas = await fetchPeliculasHome();
        const tvShows = await fetchTvShowsHome();
        setPeliculasData(peliculas);
        setTvShowsData(tvShows);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);



  

  return (
    <div className="home-page container-fluid px-0">
        <div className='carousel-container'>
          <MediaItemCarousel loading={loading} caption={true} items={peliculasData.populares} error={error}/>
        </div>


        <section className="section mb-6">
          <h2 className='mb-5'>Tendencias de Películas</h2>
          <CardSlider loading={loading} error={error} items={peliculasData.tendencias} />
        </section>
        
        <section className="section mb-6">
          <h2 className='mb-5'>Tendencias de TV Shows</h2>
          <CardSlider loading={loading} error={error} items={tvShowsData.tendencias} />
        </section>

        <section className="section mb-6">
          <h2 className='mb-5'>Películas mejor valoradas</h2>
          <CardSlider loading={loading} error={error} items={peliculasData.mejorValoradas} />
        </section>

        <section className="section mb-6">
          <h2 className='mb-5'>TV Shows mejor Valorados</h2>
          <CardSlider loading={loading} error={error} items={tvShowsData.mejorValoradas} />
        </section>

        <section className="section mb-6">
          <h2 className='mb-5'>Películas populares</h2>
          <CardSlider loading={loading} error={error} items={peliculasData.populares} />
        </section>

        <section className="section mb-6">
          <h2 className='mb-5'>TV Shows populares</h2>
          <CardSlider loading={loading} error={error} items={tvShowsData.populares} />
        </section>
    </div>
  );
};

export default InicioPage;
