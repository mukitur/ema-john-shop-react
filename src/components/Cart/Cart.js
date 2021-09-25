import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    //console.log(cart)

    //Calculate Total
    const totalReducer = (previous, product) => previous + product.price;
    const total = cart.reduce(totalReducer, 0);

    //shipping caclulate
    const shipping = total > 100 ? 20 : 0;

    //Calculate Tax
    const tax = (total + shipping) * 0.1;

    //Calculate GrandTotal
    const grandTotal = total + shipping + tax;

    return (
        <div className="cart">
            <h3 className="order-summery-text">Order Summery</h3>
            <p>Items Ordered:{props.cart.length}</p>
            <h5>Total: {total.toFixed(2)}</h5>
            <h5>Shipping Cost: {shipping.toFixed(2)}</h5>
            <h5>Tax: {tax.toFixed(2)}</h5>
            <h3>Grand Total: {grandTotal.toFixed(2)}</h3>

        </div>
    );
};

export default Cart;