import React from 'react';
import { addToFavoritesUseCase } from '../../../core/useCases/favoritos/fetchFavoritos';
import { Button } from './CustomBtn/CustomBtn.styled';
import { toast } from 'react-toastify';


const AddFavoritosButton = ({ itemId, type }) => {

  const handleAddToFavorites = async () => {
    try {
      await addToFavoritesUseCase(itemId, type);
      toast.success('Agregado a favoritos correctamente.');
    } catch (err) {
      toast.error(err.message)
    }
  };

  return (
    <div>
      <Button className='mr-2 btn mb-3' onClick={handleAddToFavorites}>Agregar a Favoritos</Button>
    </div>
  );
};

export default AddFavoritosButton;