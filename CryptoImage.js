import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/cryptoimage.css"; 

const CatImages = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchCatImages = () => {
    setLoading(true); 
    axios
      .get("https://api.thecatapi.com/v1/images/search?limit=20")
      .then((response) => {
        setImages(response.data); 
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error fetching cat images:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCatImages(); 
  }, []);

  if (loading) {
    return <p>Loading cat images...</p>;
  }

  return (
    <div className="cat-images-container">
      <h2>Cat Images</h2>
      <button className="refresh-button" onClick={fetchCatImages}>
        Refresh Images
      </button>
      <div className="cat-images-grid">
        {images.map((cat, index) => (
          <div key={index}>
            <img
              src={cat.url}
              alt={`Cat ${index + 1}`}
              width={200}
              height={200}
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatImages;
