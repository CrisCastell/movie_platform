import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTvShows } from '../../core/useCases/fetchTvShows';


const TvShowsPage = () => {
  
  const dispatch = useDispatch();
  const tvShows = useSelector((state) => state.tvShows.items);
  const status = useSelector((state) => state.tvShows.status);


  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTvShows());
    }
  }, [status, dispatch]);




  return (
    <div>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && tvShows.map((tvShow) => (
        <div key={tvShow.id}>
          <h2>{tvShow.title}</h2>
          <p>{tvShow.overview}</p>
        </div>
      ))}
    </div>
  );
};

export default TvShowsPage;
