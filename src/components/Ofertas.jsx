import React from "react";
import ProductList from "./ProductList";

const Ofertas = () => {
    return (
        <div className="container ">
            <h1>Ofertas Especiales</h1>
            <ProductList category="ofertas" />
        </div>
    );
}

export default Ofertas;
