import React, {useState, useEffect} from 'react';
import { CircleRating } from './CircleRating.styled';

const RatingCircle = ({ voteAverage }) => {
    const average = parseFloat(voteAverage).toFixed(2)

    const [borderColor, setBorderColor] = useState('')

    useEffect(() => {
      if (average >= 6){
        setBorderColor('#1dbf73')
      } else if (average >= 4){ 
        setBorderColor('#ffcc00')
      }
    }, [average])
    
  
    return (
      <div className='d-flex flex-row-reverse'>
        <CircleRating style={{borderColor: borderColor}}>
          {average}
        </CircleRating>
      </div>

    );
  };
  
  export default RatingCircle;