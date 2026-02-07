import { useState } from 'react';
import styles from '../style/products.module.css';
import { useOutletContext } from 'react-router';
import boyPng from '../assets/boy.png';
import girlPng from '../assets/girl.png';
import jeweleryPng from '../assets/jewelery.png';
import electronicsPng from '../assets/electronics.png';
import ProductCard from './ProductCard';

function Products() {
    const [category, setCategory] = useState("men's clothing");
    const [isOpen, setIsOpen] = useState(false);
    const [products, productsInCart, setProductsInCart] = useOutletContext();

    function handleClick(category) {
        setCategory((prevCategory) => category);
        setIsOpen(false);
    }

    return (
        <div className={styles.body}>
            <div className={`${styles.sideBar} ${isOpen ? styles.open : ''}`} onClick={() => setIsOpen(prev => !prev)}>
                {
                    isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z" /></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" /></svg>
                    )
                }
            </div>

            <div className={`${styles.filter} ${isOpen ? styles.active : ''}`}>
                <h3>Categories</h3>
                <div className={styles.btnDiv}>
                    <button className={`${styles.btn} ${styles.boyBtn} ${category === "men's clothing" ? styles.activeCategory : ""}`} onClick={() => handleClick("men's clothing")}>
                        <p>Men's Collection</p>
                        <div><img src={boyPng} alt="boy" /></div>
                    </button>
                    <button className={`${styles.btn} ${styles.girlBtn} ${category === "women's clothing" ? styles.activeCategory : ""}`} onClick={() => handleClick("women's clothing")}>
                        <p>Women's Collection</p>
                        <div><img src={girlPng} alt="girl" /></div>
                    </button>
                    <button className={`${styles.btn} ${styles.jeweleryBtn} ${category === "jewelery" ? styles.activeCategory : ""}`} onClick={() => handleClick("jewelery")}>
                        <p>Jewelery</p>
                        <div><img src={jeweleryPng} alt="jewelery" /></div>
                    </button>
                    <button className={`${styles.btn} ${styles.electronicsBtn} ${category === "electronics" ? styles.activeCategory : ""}`} onClick={() => handleClick("electronics")}>
                        <p>Electronics</p>
                        <div><img src={electronicsPng} alt="electronics" /></div>
                    </button>
                </div>
            </div>

            <div className={styles.products}>
                {
                    products.filter(product => product.category == category).map(product => (
                        <ProductCard product={product} key={product.id} productsInCart={productsInCart} setProductsInCart={setProductsInCart} />
                    ))
                }
            </div>
        </div>
    )
}

export default Products;