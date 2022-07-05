import axios from 'axios';
import { useState, useEffect } from 'react';
import './imagemodal.css';

function ImageModal({ id }) {
    
    const [photo, setPhoto] = useState()

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then((response) => {
            setPhoto(response.data.url)
        })
    }, [])

  return (
    <div className="image-modal-container">
        <img src={photo} alt="" className='image-modal-body'/>
    </div>
  );
}

export default ImageModal;
