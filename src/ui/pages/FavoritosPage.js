import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFavoritos} from '../../adapters/store/slices/favorito/favoritosSlice';
import CustomCard from '../components/common/CustomCard/CustomCard'
import SpinnerLoading from '../components/common/SpinnerLoading';
import BannerError from '../components/common/BannerError';
import FavoritesSwitch from '../components/favoritos/switchFavoritos';
import { useNavigate } from 'react-router-dom';

const FavoritosPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const { items: favoritos, status, error } = useSelector((state) => state.favoritos);
  const [type, setType] = useState('Peliculas');
  const authToken = localStorage.getItem('authToken');
  const accountId = localStorage.getItem('accountId');

  useEffect(() => {
    // Si el usuario no está autenticado, redirigir al inicio
    if (!authToken || !accountId) {
      navigate('/');
      return;
    }

    dispatch(fetchFavoritos({ type }));
    
  }, [type, dispatch, authToken, accountId, navigate]);

  const handleTypeChange = (newType) => {
    setType(newType);
  };


  return (
    <div className='container-fluid'>
      <h1 className='mt-5'>Favoritos</h1>
      <FavoritesSwitch selectedType={type} onTypeChange={handleTypeChange} />
      <div className='container'>
        <div className='row'>
            {status === 'loading' && <SpinnerLoading/>}
            {status === 'failed' && <BannerError message={`Ha ocurrido un error al cargar el catálogo: ${error}`}/>}
            {status === 'succeeded' && favoritos.map((item) => (
              <CustomCard key={item.id} item={item} favorito={true} />
            ))}
            {(status !== 'loading' && favoritos.length === 0) && (
              <div className='container favoritos-wrapper'>
                <div>
                  <h5>No se encontraron elementos</h5>

                </div>
              </div>
            )}
        </div>
        
      </div>

    </div>
  );
};

export default FavoritosPage;
