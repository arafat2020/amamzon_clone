import React, { useContext } from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format'
import { UserContext } from './Op-stateprovider';


const Subtotal = () => {
    const user = useContext(UserContext)
    const arr = user.count.basket.map((basket) => basket.priching)
    function getSum(total, num) {
        return total + num;
      }
    console.log(arr.reduce(getSum,0))

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={value => 
                    
                        <div>
                        <p>
                            subtotal ({user.count.basket.length} items):<strong>{ value}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type='checkbox' /> This order contains a gift
                        </small>
                      </div>
                    
                }
                decimalScale={2}
                value={arr.reduce(getSum,0)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div>
    );
};

export default Subtotal;