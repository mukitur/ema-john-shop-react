import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Rating from 'react-rating';


const Product = (props) => {
    const { name, img, seller, price, stock, star } = props.product;
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
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color rating-icon"
                    fullSymbol="fas fa-star icon-color rating-icon"
                    readonly
                ></Rating>
                <br /> <br />
                <button onClick={() => props.handleAddToCart(props.product)} className="btn-regular"> <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;