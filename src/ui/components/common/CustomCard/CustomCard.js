import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CardCustom, CardImageTop} from './CardCustom.styled' 
import { Button } from '../CustomBtn/CustomBtn.styled'
import RatingCircle from './RatingCircle'
import InfoModal from './InfoModal'
import AddFavoritosButton from '../AddFavoritosButton';
import removeFavoritosButton from '../removeFavoritosButton';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { removeFavorito } from '../../../../adapters/store/slices/favorito/favoritosSlice';
import { FaTrashAlt } from 'react-icons/fa';

const CustomCard = ({item, favorito}) => {

  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); 


  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);


  const handleViewDetails = () => {
    navigate('/detalle', { state: { id: item.id, type: item.mediaType} });

  };

  return (
    <div className="col-md-3">
        <CardCustom className='card'>
          <CardImageTop
            alt={item.title}
            src={item.posterPath}
            className="mt-2"
          />
          <div className="card-body">
            <h5
              className="card-title mb-4"
              onClick={handleShowModal}
            >
              {item.title}
            </h5>
            <div className='d-flex align-items-center justify-content-evenly mb-3'>
              <p><strong>Valoracion:</strong></p>
              <RatingCircle voteAverage={item.voteAverage} />

            </div>
            <Button className={`${!favorito && "mr-2"} mb-2 btn`} onClick={handleViewDetails}>Ver información completa</Button>
            {/* {!favorito && <AddFavoritosButton itemId={item.id} type={item.mediaType} />} */}
            {!favorito ? (
                <AddFavoritosButton itemId={item.id} type={item.mediaType} />
              ) : (

                <button
                  onClick={() =>
                    dispatch(removeFavorito({
                      type: item.mediaType,
                      mediaId: item.id,
                    }))
                  }
                  className="btn btn-danger mt-2"
                  style={{ color: '#000' }}
                  > 
                  <FaTrashAlt /> Eliminar de Favoritos
                </button>
              )}
            <InfoModal show={showModal} onHide={handleCloseModal} item={item} />
          </div>
        </CardCustom>
    </div>  
  )
}


export default CustomCard