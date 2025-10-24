import React, {useEffect, useState} from "react";
import { Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";

const ProductList = ({ category = null }) => 
{
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let url = "https://fakestoreapi.com/products";
        
        if (category) {

        url =  `https://fakestoreapi.com/products/category/${category}`;
    }
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching products:", err);
                setLoading(false);
            });
    }, [category]);

    const handleAgregarAlCarrito = (product) => {
        alert(`Producto agregado al carrito: ${product.title}`);
    };

    if (loading) {
        return <div>Cargando productos...</div>;
    }

    return (
        <Row>
            {products.map(product => (
                <Col key={product.id} md={4} className="mb-4">
                    <ProductCard product={product} agregarAlCarrito={handleAgregarAlCarrito} />
                </Col>
            ))}
        </Row>
    );
}

export default ProductList;