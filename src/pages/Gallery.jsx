import React, { useState } from 'react';
import { mentorData } from '../data/mentorData';
import { FiX } from 'react-icons/fi';
import '../styles/gallery.css';

const Gallery = () => {
  const { gallery } = mentorData;
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <div className="container">
          <h1>Gallery</h1>
          <p>Memories from conferences, workshops, and academic events</p>
        </div>
      </div>

      <div className="container section pt-0">
        <div className="gallery-grid">
          {gallery.map((image) => (
            <div 
              className="gallery-item" 
              key={image.id}
              onClick={() => openLightbox(image)}
            >
              <img src={image.src} alt={image.alt} className="gallery-img" loading="lazy" />
              <div className="gallery-overlay">
                <span className="gallery-caption">{image.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <div className={`lightbox ${selectedImage ? 'active' : ''}`} onClick={closeLightbox}>
        {selectedImage && (
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
              <FiX />
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} className="lightbox-img" />
            <div className="lightbox-caption">{selectedImage.caption}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
