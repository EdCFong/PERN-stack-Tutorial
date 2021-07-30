import React from 'react';

const StarRating = ({ rating }) => {

    const starts = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            starts.push(<i key={i} className="fas fa-star text-warning"></i>);
        }
        else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
            starts.push(<i key={i} className="fas fa-star-half-alt text-warning"></i>);
        }
        else {
            starts.push(<i key={i} className="far fa-star text-warning"></i>);
        }
    }

    return (
        <>
            {starts}
        </>
    )
}

export default StarRating;