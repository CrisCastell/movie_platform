import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPeliculas } from '../../adapters/store/slices/pelicula/peliculasSlice';

const PeliculasPage = () => {

  const dispatch = useDispatch();
  const peliculas = useSelector((state) => state.peliculas.items);
  const status = useSelector((state) => state.peliculas.status);


  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPeliculas());
    }
  }, [status, dispatch]);




  return (
    <div>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && peliculas.map((pelicula) => (
        <div key={pelicula.id}>
          <h2>{pelicula.title}</h2>
          <p>{pelicula.overview}</p>
        </div>
      ))}
    </div>
  );
};

export default PeliculasPage;
