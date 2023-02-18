import React from 'react';
import { Link } from 'react-router-dom';

const Color = ({ color }) => {
  //console.log(color);
  const { albumId, id, thumbnailUrl, title, url } = color;
  return (
    <div className='col-md-6 col-lg-4 my-3'>
      <div className='card' style={{ width: '18rem' }}>
        <img src={thumbnailUrl} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to={`/color-details/${id}`} className='btn btn-primary'>
            Color details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Color;
