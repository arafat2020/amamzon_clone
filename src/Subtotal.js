import React, { useContext } from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format'
import { UserContext } from './Op-stateprovider';
import { useHistory } from 'react-router-dom';


const Subtotal = () => {
    const user = useContext(UserContext)
    const arr = user.count.basket.map((basket) => basket.priching)
    function getSum(total, num) {
        return total + num;
      }
    const history = useHistory()

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
            <button onClick={()=>history.push('/payment')}>Proceed to Checkout</button>
        </div>
    );
};

export default Subtotal;