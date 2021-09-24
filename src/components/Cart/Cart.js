import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    //console.log(cart)

    //Calculate Total
    const totalReducer = (previous, product) => previous + product.price;
    const total = cart.reduce(totalReducer, 0);

    //shipping caclulate
    const shipping = 20;

    //Calculate Tax
    const tax = (total + shipping) * 0.1;

    //Calculate GrandTotal
    const grandTotal = total + shipping + tax;

    return (
        <div className="cart">
            <h3 className="order-summery-text">Order Summery</h3>
            <p>Items Ordered:{props.cart.length}</p>
            <h5>Total: {total}</h5>
            <h5>Shipping Cost: {shipping}</h5>
            <h5>Tax: {tax}</h5>
            <h3>Grand Total: {grandTotal}</h3>

        </div>
    );
};

export default Cart;