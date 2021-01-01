import React, {  useContext } from 'react';
import { UserContext } from './Op-stateprovider';
import './Product.css'
// import { StateContext } from './StateProvider';
// import reducer, { initialState } from './reducer';
// import { useStateValue } from './StateProvider';

const Product = ({ id, title, priching, rating, image }) => {    

    // const [count,reCount] = useReducer(reducer, initialState)
    // console.log(count.basket.length)
    const user = useContext(UserContext)
    // console.log(pusher)
    const addToBasket = () => {
        // reCount({
        //     type: "ADD_TO_BASKET",
        //     item: {
        //         id: id,
        //         title: title,
        //         priching: priching,
        //         rating: rating,
        //         image: image
        //     }
        // })
        user.reCount({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                priching: priching,
                rating: rating,
                image: image
            }
        })
        // console.log(user.location)
       
        // console.log(user)
        // let intel = 0
        //  let incremant= intel++
        // console.log(incremant)
        // user.setName(count.basket.length)
    }
    return (
        <div className="product">
            <div className="product_info">
                <p>{ title }</p>
                <p className="product__priching" >
                    <small>$</small>
                    <strong>{priching}</strong>
                </p>
                <div className="productrating">
                    {Array(rating).fill().map((_, i) => {
                       return <p>⭐</p>
                   })}
                </div>
            </div>
            <img
                src={image}
                alt="item_img"
            />
            <button
                onClick={addToBasket}
            >Add To Basket</button>
        </div>
    );
};

export default Product;