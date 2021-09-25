import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplayProducts(data)
            })
    }, [])

    //we stored data in local storage but , when refreshed it gone from cart, to solve the issure:
    useEffect(() => {
        const savedCart = getStoredCart();
        const storedCart = [];
        if (products.length) {
            for (const key in savedCart) {
                //console.log(key)
                const addedProduct = products.find(product => product.key === key);
                //console.log(key, addedProduct);
                storedCart.push(addedProduct);
            }
            setCart(storedCart);
        }
    }, [products])


    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
        //Set data to local Storage
        addToDb(product.key);
    }

    const handleSearch = event => {
        const searchText = event.target.value;

        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayProducts(matchedProducts);
    }

    return (
        <>
            <div className="search-container">
                <input onChange={handleSearch} type="Text" placeholder="Search Product" />
            </div>

            <div className="shop-container">
                <div className="product-container">
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>

                <div className="cart-container">

                    <Cart
                        cart={cart}
                    ></Cart>

                </div>

            </div>
        </>
    );
};

export default Shop;