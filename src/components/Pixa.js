import React, { useState } from 'react';

const Pixa = () => {
  const [input, setInput] = useState('');
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    const response = await fetch(`https://pixabay.com/api/?key=43785969-ea6127d8302b0bc63b7e1d26d&q=${input}&image_type=photo&pretty=true`);
    const data = await response.json();
    setImages(data.hits);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search "
      />
      <button onClick={fetchImages}>Search</button>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {images.map((image) => (
          <a key={image.id} href={image.largeImageURL} target="_blank" rel="noopener noreferrer" style={{ width: '20%', margin: '0.3%' }}>
            <img src={image.webformatURL} alt={image.tags} style={{ width: '90%', height: 'auto' }} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Pixa;