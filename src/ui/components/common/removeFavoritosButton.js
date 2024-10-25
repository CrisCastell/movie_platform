import React from 'react';
import { removeFavorito } from '../../../adapters/store/slices/favorito/favoritosSlice'
import { Button } from './CustomBtn/CustomBtn.styled';
import { FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

const removeFavoritosButton = ({ itemId, type }) => {



  const handleRemoveFavorite = async () => {
    try {
      await removeFavorito(itemId, type);
      toast.success('Agregado a favoritos correctamente.');
    } catch (err) {
      toast.error(err.message)
    }
  };

  return (
    <div>
      <Button className='mr-2 btn btn-danger mb-3' onClick={handleRemoveFavorite}>
        <FaTrashAlt />
        Eliminar de Favoritos
      </Button>
    </div>
  );
};

export default removeFavoritosButton;