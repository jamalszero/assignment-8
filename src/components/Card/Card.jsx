import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Card = ({card}) => {

    const {id, image, title, category, card_background_color, category_background_color, text_color} = card;

    

    return (
        <Link to={`/details/${id}`}>
            <div className="card card-compact" style={{backgroundColor: card_background_color}}>
                <figure><img className="w-full" src={image} alt="" /></figure>
                
                <div className="card-body">
                    <p className="w-min p-1 rounded-md font-medium" style={{backgroundColor: category_background_color, color: text_color}}>{category}</p>
                    <h2 className="font-bold text-lg" style={{color: text_color}}>{title}</h2>
                </div>
            </div>
        </Link>
    );
};

export default Card;