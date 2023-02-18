import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Color from './Color';

const Colors = () => {
  const colors = useLoaderData();
  //console.log(colors);
  return (
    <div className='container '>
      <h3 className='text-center'>colors: {colors.length} </h3>
      <div className='row'>
        {colors.map((color) => (
          <Color key={color.id} color={color} />
        ))}
      </div>
    </div>
  );
};

export default Colors;
