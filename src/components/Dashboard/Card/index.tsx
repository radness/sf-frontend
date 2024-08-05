import React from 'react';

const Card = ({card}: {card: any}) => {
    return (
        <div>{card.name}</div>
    );
};

export default Card;