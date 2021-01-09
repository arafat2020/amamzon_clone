import moment from 'moment';
import React from 'react';
import ChackoutProduct from './ChackoutProduct';
import './Order.css'

const Order = ({ order }) => {
    console.log(order)
    return (
        <div className="order">
            <h2>Order</h2>
            
            {order.map(date => (
                <div className="order_loop">
                    <p><strong>Date:</strong> {moment.unix(date.data.created).format("MMMM Do YYYY, h:mma")}</p>
                    <p className="order_id"><strong>ID:</strong> {date.id}</p>
                    {date.data.basket.map(item => (
                        <ChackoutProduct
                            id={item.id}
                            title={item.title}
                            priching={item.priching}
                            rating={item.rating}
                            image={item.image}
                            btnHidden={true}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Order;