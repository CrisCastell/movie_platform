import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTvShows, setPage} from '../../adapters/store/slices/tvShow/tvShowsSlice';
import CustomCard from '../components/common/CustomCard/CustomCard'
import SearchBar from '../components/common/SearchBar/SearchBar';
import Paginator from '../components/common/Paginator';
import SpinnerLoading from '../components/common/SpinnerLoading';
import BannerError from '../components/common/BannerError';

const TvShowsPage = () => {
  
  const dispatch = useDispatch();
  const tvShows = useSelector((state) => state.tvShows.items);
  const status = useSelector((state) => state.tvShows.status);
  const currentPage = useSelector((state) => state.tvShows.currentPage);
  const totalPages = useSelector((state) => state.tvShows.totalPages);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchTvShows({ page: currentPage}));
  }, [dispatch, currentPage]);


  
  const handleSearch = (term) => {
    setSearchTerm(term);
    dispatch(fetchTvShows({ page: 1, query: term })); 
  };


  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };





  return (
    <div className='container'>
      <h1 className='mt-5'>Tv Shows</h1>
      < SearchBar onSearch={handleSearch}/>
      <div className='container'>
        <div className='row'>
            {status === 'loading' && <SpinnerLoading/>}
            {status === 'failed' && <BannerError message={"Ha ocurrido un error al cargar el catálogo"}/>}
            {status === 'succeeded' && tvShows.map((tvShow) => (
              <CustomCard key={tvShow.id} item={tvShow} />
            ))}
        </div>

        <Paginator
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={handlePageChange}  />

      </div>
    </div>
  );
};

export default TvShowsPage;
