import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPeliculas, setPage  } from '../../adapters/store/slices/pelicula/peliculasSlice';
import CustomCard from '../components/common/CustomCard/CustomCard'
import SearchBar from '../components/common/SearchBar/SearchBar';
import Paginator from '../components/common/Paginator';
import SpinnerLoading from '../components/common/SpinnerLoading';
import BannerError from '../components/common/BannerError';

const PeliculasPage = () => {

  const dispatch    = useDispatch();
  const peliculas   = useSelector((state) => state.peliculas.items);
  const status      = useSelector((state) => state.peliculas.status);
  const currentPage = useSelector((state) => state.peliculas.currentPage);
  const totalPages  = useSelector((state) => state.peliculas.totalPages);

  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    dispatch(fetchPeliculas({ page: currentPage}));
  }, [dispatch, currentPage]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    dispatch(fetchPeliculas({ page: 1, query: term })); 
  };


  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };





  return (
    <div className='container-fluid'>
      <h1 className='mt-5'>Peliculas</h1>
      < SearchBar 
        onSearch={handleSearch}
        />
      <div className='container'>
        <div className='row'>
            {status === 'loading' && <SpinnerLoading/>}
            {status === 'failed' && <BannerError message={"Ha ocurrido un error al cargar el catálogo"}/>}
            {status === 'succeeded' && peliculas.map((pelicula) => (
              <CustomCard key={pelicula.id} item={pelicula} />
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

export default PeliculasPage;
