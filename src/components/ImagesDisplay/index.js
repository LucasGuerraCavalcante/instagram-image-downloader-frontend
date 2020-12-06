import React from 'react';

import './styles.css'

const Form = ({ images }) => {

  return (
    <div className="imagesWrapper">
        {images.length === 0 && (<p>...</p>)}

        {images.src == 'Loading' && (
          <div className="loadingWrapper">
            <div className="title">
              <h2>Loading</h2>
            </div>
            <div className="loader" />
          </div>
        )}

        {images.length >= 1 && (
                images.map((image) => {
                    console.log(image)
                    return (
                        <div key={image.alt} className="imgBox" >
                            <img src={image.src} alt={image.alt} className="image" />
                            <span className="imgAlt" >{image.alt}</span>
                        </div>
                    )
                }) 
        )}
    </div>
  );
};

export default Form;