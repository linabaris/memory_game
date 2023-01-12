import React from "react";
import BACK from '../img/back.jpg'


const Card = ({ data, handleChoice, flipped }) => {
    const handleClick = () => {
        handleChoice(data);
    }

    return (
        <div 
            className={`сard-playing ${flipped ? 'flip': ''}`} 
            onClick={handleClick}>
            <img 
                src={BACK} 
                alt='click me' 
                className="back-face" 
                data-cell-index={data.id}/>
            <img 
                src={data.image} 
                alt={data.face} 
                className="front-face" 
                data-cell-index={data.id} />
        </div>
    )
}

export default Card;