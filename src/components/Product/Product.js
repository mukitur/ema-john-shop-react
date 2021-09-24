import React from 'react';
import './Product.css';


const Product = (props) => {
    const { name, img, seller, price, stock } = props.product;
    // console.log(props)
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>

            <div>
                <h4 className="product-name">{name}</h4>
                <p>by: {seller}</p>
                <h5>${price}</h5>
                <p>only {stock} left in stock - order soon</p>
                <button onClick={() => props.handleAddToCart(props.product)} className="btn-regular">Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;