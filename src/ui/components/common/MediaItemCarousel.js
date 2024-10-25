import { Carousel } from 'react-bootstrap';
import React from 'react';
import SpinnerLoading from './SpinnerLoading';
import BannerError from './BannerError';

const MediaItemCarousel = ({ items, loading, error, caption }) => {
    
    if (loading) {
        return <SpinnerLoading />;
    }

    if (error) {
        return <BannerError message={error}/>;
    }
    
    return (
        <Carousel interval={4500} fade>
        {items.slice(0, 10).map((item) => (
            <Carousel.Item key={item.id}>
            <img
                className="w-100 img-carousel"
                src={item.backdropPath}
                alt={item.title}
            />
            {caption && <Carousel.Caption className='p-3'>
                <h3>{item.title}</h3>
                <p>{item.overview}</p>
            </Carousel.Caption>}
            </Carousel.Item>
        ))}
        </Carousel>
    );
}
  
  export default MediaItemCarousel;