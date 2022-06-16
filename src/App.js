import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import './App.css';

function App() {
    const url =
        'https://api.unsplash.com/photos/random?client_id=efRfbwx99wPBjE-Ftv2T7x48Tx7M8hd7xrRxovChFTI&count=30';

    const [images, setImages] = useState([]);

    const getImage = () => {
        axios.get(url).then((res) => {
            setImages(res.data);
        });
    };

    useEffect(() => {
        getImage();
    }, []);

    if (!images) {
        return <h1>Loading....</h1>;
    }

    return (
        <div className='App'>
            {images.map((image) => {
                return (
                    <LazyLoadImage
                        className='image'
                        effect='blur'
                        src={image.urls.regular}
                        alt={image.alt_description}
                        key={image.id}
                    />
                );
            })}
        </div>
    );
}

export default App;
