import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchDetail } from '../../adapters/store/slices/common/detailSlice';
import SpinnerLoading from '../components/common/SpinnerLoading';
import BannerError from '../components/common/BannerError';
import AddFavoritosButton from '../components/common/AddFavoritosButton';
import { Carousel } from 'react-bootstrap';
import RatingCircle from '../components/common/CustomCard/RatingCircle';


const DetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { details, status, error } = useSelector((state) => state.detail);

  useEffect(() => {
    if (!location.state || !location.state.id) {
      navigate('/');
      return;
    }

    const { id, type = 'Pelicula' } = location.state;
    dispatch(fetchDetail({ id, type }));
  }, [location.state, navigate, dispatch]);


  if (!details) {
    return null;
  }

  return (
    <div className="container py-5 ">
        {status === 'loading' && <SpinnerLoading />}
        {status === 'failed' && <BannerError message={error} />}
        <div className="row p-4 d-flex align-items-center container-detail">
            <div className="col-lg-6">
                <Carousel interval={4500} fade>
                    {details.posterPath && <Carousel.Item key={details.id}>
                        <img
                            className="w-100 img-carousel rounded"
                            src={details.posterPath}
                            alt={details.title}
                            
                        />
                    </Carousel.Item>}
                    {details.backdropPath && <Carousel.Item key={details.id + 1}>
                        <img
                            className="w-100 img-carousel rounded"
                            src={details.backdropPath}
                            alt={details.title}

                        />
                    </Carousel.Item>}
                
                </Carousel>
            </div>
            <div className="col-lg-6">
                <h2 className="fw-bold">{details.title}</h2>
                <div className='row m-3 py-3'>
                    <div className="col-md-6">
                        <ul className='lista-generos w-100'>
                            <p><strong>Géneros: </strong></p>
                            {details.genres.map(genre => <li>{genre}</li>)}
                        </ul>
                    </div>
                    <div className='d-flex align-items-center justify-content-evenly col-md-6'>
                        <p><strong>Valoracion:</strong></p>
                        <RatingCircle voteAverage={details.voteAverage} />

                    </div>
                </div>

                <h5 className="my-4">Fecha de lanzamiento: {details.releaseDate}</h5>
                <h5 className="my-4">Popularidad: {details.popularity}</h5>
                <h5 className="my-4">{details.mediaType}</h5>
                <p className="mb-4">
                    {details.overview ? details.overview : "No se tiene información detallada de este elemento."}
                </p>
                <div>
                    <AddFavoritosButton itemId={details.id} type={details.mediaType} />
                </div>
            </div>
        </div>
    </div>
  )


};

export default DetailPage;
// return (
//   <div className="container">
//     {status === 'loading' && <SpinnerLoading />}
//     {status === 'failed' && <BannerError message={error} />}
//     <h1>{details.title || details.name}</h1>
//     <img src={details.backdropPath} alt={details.title} className="" />
//     <p>{details.overview}</p>
//     <p>Fecha de lanzamiento: {details.releaseDate}</p>
//     <p>Popularidad: {details.popularity}</p>
//   </div>
// );