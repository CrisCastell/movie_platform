import React from 'react';
import Slider from 'react-slick';
import CustomCard from './CustomCard/CustomCard';
import SpinnerLoading from './SpinnerLoading';
import BannerError from './BannerError';
// import './MediaSlider.css'; 

const CardSlider = ({ items, loading, error}) => {



    
    const settings = {
        dots: false,          // No mostrar los puntos de paginación
        infinite: true,       // Hacer que el slider sea infinito
        speed: 500,           // Velocidad del deslizamiento
        slidesToShow: 4,      // Mostrar 6 películas por fila
        slidesToScroll: 1,    // Deslizar de a una película
        responsive: [         // Responsividad para diferentes tamaños de pantalla
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
    };


    return (
      <div className="container mt-4">
          {loading && <SpinnerLoading />}
          {error && <BannerError message={error} />}
          <div className="media-slider row">
            
            {(!error && !loading) && (
            <Slider {...settings}>
              {items.map((item) => {
                return(
                <CustomCard key={item.id} item={item} />
              )})}
            </Slider>
            )}
          </div>
      </div>
  );
};

export default CardSlider;
