import React, { useContext, useEffect, useState } from 'react';
import ChackoutProduct from './ChackoutProduct';
import { UserContext } from './Op-stateprovider';
import {Link, useHistory} from 'react-router-dom'
import './Payment.css'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import axios from './axios';

const Payment = () => {
    const user = useContext(UserContext);
    const basketArr = user.count.basket;
    const stripe = useStripe();
    const eliment = useElements();
    const [error, setError] = useState(null);
    const [disable, setDisable] = useState(true);
    const [success, setSuccess] = useState(false);
    const [prossesing, setProssesing] = useState("");
    const [cliendid, setClientid] = useState();
    const history = useHistory();

  
    const arr = user.count.basket.map((basket) => basket.priching)
    function getSum(total, num) {
        return total + num;
    }
    const totalPrice = arr.reduce(getSum, 0) * 100;
    useEffect(() => {
        const getClintId = async () => {
            const respons = await axios({
                method: 'post',
                url: `/payments.create?total=${totalPrice}`
            })
            setClientid(respons.data.clientSecret)
        }
        getClintId()
    },[totalPrice])

    console.log(cliendid)
    const handlSubmit = async (e) => {
        e.preventDefault();
        setProssesing(true)
        const payload = async()=> await stripe.confirmCardPayment(cliendid, {
            payment_method: {
                card: eliment.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            setSuccess(true);
            setError(null);
            setProssesing(false);
            user.reCount({
                type:'EMPYT_BASKET'
            })
            history.replace('/order')
        })
        payload()
    }
    const handleChange = e => {
        setDisable(e.empty);
        setError(e.error?e.error.massage:'')
    }

    return (
        <div className="payment">
            <div className="payment_container">
            <h1>
                Checkout (
                    <Link to="/checkout">{user.count.basket.length}</Link>
                )
            </h1>
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment_address">
                    <p>{user.name ? user.name.email : ''}</p>
                    <p>135,sultangonj</p>
                    <p>Reayer Bazer,Dhaka-1209</p>
                </div>
            </div>
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Reveiw Item and Delevery</h3>
                </div>
                <div className="payment_item">
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
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Payment Mathod</h3>
                </div>
                    <div className="payment_detail">
                        <form onSubmit={handlSubmit}>
                            <CardElement
                                onChange={handleChange}
                            />
                            <div className="payment_Pricecontainer">
                                <CurrencyFormat
                                    renderText={value => 
                                        <h3>Order Total: { value}</h3>
                    
                                      }
                                      decimalScale={2}
                                      value={arr.reduce(getSum,0)}
                                      displayType={"text"}
                                      thousandSeparator={true}
                                      prefix={"$"}
                                  />
                            </div>
                            <button disabled={
                                prossesing || disable || success
                            }>
                                <span>{ prossesing?<p>prossesing</p>:'Buy Now'}</span>
                            </button>
                            {error && <div>{error}</div>}
                        </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Payment;