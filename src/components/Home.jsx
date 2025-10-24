import React from "react";
import ProductList from "./ProductList";

const Home = () => {
    return (
        <div className="container">
            <h1 className="my-4">Bienvenido a NanoShop</h1>
            <ProductList />
        </div>
    );
}

export default Home;