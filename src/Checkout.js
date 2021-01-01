import React, { useContext } from 'react';
import ChackoutProduct from './ChackoutProduct';
import './Checkout.css'
import { UserContext } from './Op-stateprovider';
import Subtotal from './Subtotal';

const Checkout = () => {
    const user = useContext(UserContext)
    console.log(user.count.basket)
    const basketArr = user.count.basket
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img
                    className="checkout_ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt="add"
                />
                <div>
                    <h3>
                         {user.name? `Hello, ${user.name.email}`:''}
                    </h3>
                    <h2 className="checkout_title">
                        Your Shoping Basket
                    </h2>
                    {basketArr.map((item) => (<ChackoutProduct
                        id={item.id}
                        title={item.title}
                        priching={item.priching}
                        rating={item.rating}
                        image={item.image}
                    />)
                    )}
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal/>
            </div>
        </div>
    );
};

export default Checkout;