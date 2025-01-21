import React from 'react';

const StarRating = ({ rating }) => {
  const totalStars = 5; // Number of stars you want to show

  return (
    <div>
      {[...Array(totalStars)].map((_, index) => (
        <span key={index} className={index < rating ? 'text-warning' : 'text-muted'}>
          &#9733; {/* Unicode star character */}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
