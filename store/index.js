const { configureStore } = require("@reduxjs/toolkit")

const getCart = () => {
    const existingCart = localStorage.getItem('next-lesson-cart');
    return existingCart ? JSON.parse(existingCart) : [];
}

const addToCart = item => {
    const cart = getCart();
    const itemExists = !!(cart.find(x => x.id === item.id));
    const newCart = !itemExists ? [...cart, item] : [...cart];
    localStorage.setItem('next-lesson-cart', JSON.stringify(newCart));
}

const reducer = (state = { getCart, addToCart }, action) => {
    switch (action.type) {
        default: return { ...state };
    }
}

const store = configureStore({ reducer });

export default store;