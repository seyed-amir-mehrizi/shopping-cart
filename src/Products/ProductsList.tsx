import React, { useState } from 'react';

interface IProduct {
    id: number,
    price: number,
    title: string
}

const initialProducts = [
    { title: 'game', price: 60, id: 1 },
    { title: 'football', price: 70, id: 2 },
    { title: 'basketball', price: 55, id: 3 },
];
function ProductsList() {
    const [products, setProducts] = useState<IProduct[]>(initialProducts);
    const handleAddProduct = () => {
        setProducts(prevProducts => [...prevProducts, { title: 'Jodu', price: 32, id: 4 }])
    }
    return (
        <div>
            <h2>Games List</h2>
            {
                products.map((product) => {
                    return <div key={Math.random()}>
                        <span>{product.title} : {product.price}</span>
                    </div>
                })
            }
            <button onClick={handleAddProduct}>Add Product</button>
        </div>
    )
}

export default ProductsList
