import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const BackgroundSlider = () => {
  const images = [
    `${process.env.PUBLIC_URL}/assets/background.jpg`,
    `${process.env.PUBLIC_URL}/assets/image15.webp`,
    `${process.env.PUBLIC_URL}/assets/image05.jpg`,
    `${process.env.PUBLIC_URL}/assets/image14.webp`, // New image
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [opacity, setOpacity] = useState(1); // State to manage opacity

  useEffect(() => {
    const changeImage = () => {
      setIsFading(true);
      setOpacity(0.5); // Change opacity when fading in
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsFading(false);
        setOpacity(1); // Reset opacity after changing the image
      }, 1000); // Fade out duration
    };

    const interval = setInterval(changeImage, 6000); // Total duration for each image (5s display + 1s fade out)

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Container
      fluid
      className={`d-flex align-items-center justify-content-center vh-100`}
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease-in-out, opacity 1s ease-in-out',
        opacity: opacity, // Apply opacity
      }}
    >
      <div className="text-center text-light">
        <h1
          className="text-success"
          style={{
            transition: 'opacity 1s ease-in-out',
            opacity: isFading ? 0 : 1,
          }}
        >
          <strong>Welcome To the Food Share Network Admin Portal</strong>
        </h1>
        <p
          style={{
            transition: 'opacity 1s ease-in-out',
            opacity: isFading ? 0 : 1,
          }}
        >
          
        </p>
      </div>
    </Container>
  );
};

export default BackgroundSlider;