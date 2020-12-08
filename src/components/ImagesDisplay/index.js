import React from 'react';
import { FiDownload } from 'react-icons/fi';

import './styles.css'

const Form = ({ images }) => {

  return (
    <div className="imagesWrapper">
        {images.length === 0 && (
          <div className="observationsWrapper">
            <h2>Some observations</h2>
            <div>
              <p>This app is still on development, so keep in mind that: </p>
              <ul>
                <li>It doesn't work for photos from private accounts;</li>
                <li>In case of multiple photos in the same post, only the first one will be shown here;</li>
                <li>This process can take a while, something about 5 to 30 seconds;</li>
                <li>If it takes more than 30 seconds, close and try again later.</li>
              </ul>
            </div>
          </div>
        )}

        {images.src === 'Loading' && (
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
                            <div class="overlay">
                              <FiDownload class="icon" />
                          </div>
                        </div>
                    )
                }) 
        )}
    </div>
  );
};

export default Form;