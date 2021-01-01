import React, { useContext } from 'react';
import './ChackoutProduct.css'
import { UserContext } from './Op-stateprovider';

const ChackoutProduct = ({ id, title, priching, rating, image }) => {
    const user = useContext(UserContext)
    const removeFromBasket = () => {
        user.reCount({
            type: "REMOVE_FROM_BASKET",
            item: {
                id: id,
                title: title,
                priching: priching,
                rating: rating,
                image: image
            }
        })
    }
    return (
        <div className="chackoutproduct">
            <img className="chackoutproduct__img" src={image} alt="img"/>
            <div className="chackoutproduct__ingo">
                <p className="chackoutproduct__title">{title}</p>
                <p className="chackoutproduct__price">
                    <small>$</small>
                    <strong>{priching}</strong>
                </p>
                <div className="chackoutproduct__rating">
                {Array(rating).fill().map((_, i) => {
                       return <p>⭐</p>
                   })}
                </div>
                <button onClick={removeFromBasket} >Remove from Basket</button>
            </div>
        </div>
    );
};

export default ChackoutProduct;