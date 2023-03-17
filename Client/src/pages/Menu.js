import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import "../styles/Menu.css";
import axios from "../axios";


function Menu() {
    const [products, setProducts] = useState("");
    useEffect(() => {
        const fetchdata = async () => {
            const data = await axios.get('/products/get');
            setProducts(data);
        };
        fetchdata();
    }, [])
    return (
        <div className="menu">
            <h1 className="menuTitle">Available Options</h1>
            <div className="menuList">
                {products &&
                    products?.data.map((product) => (
                        <Card
                            image={product.imageURL}
                            id={product._id}
                            price={product.price}
                            title={product.title}
                        />
                    ))}
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>

    );
}

export default Menu;