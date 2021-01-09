import React, { useContext, useEffect, useState } from 'react';
import { db } from './firebase';
import { UserContext } from './Op-stateprovider';
import Order from './Order';
import './Orders.css'

const Orders = () => {
    const user = useContext(UserContext);
    const [order, setOrder] = useState([]);
    const name = user.name;
    useEffect(() => {
        if (name) {
            db.collection('users')
                .doc(name?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snpshot => {
                    setOrder(snpshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
            })
        }
    }, [name]);
    console.log(order)
    return (
        <div>
            <h1>Your Orders</h1>
            <Order order={order} />
        </div>
    );
};

export default Orders;