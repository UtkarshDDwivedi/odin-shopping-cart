import { useState } from 'react';
import styles from '../style/products.module.css';
import { useOutletContext } from 'react-router';
import boyPng from '../assets/boy.png';
import girlPng from '../assets/girl.png';
import jeweleryPng from '../assets/jewelery.png';
import electronicsPng from '../assets/electronics.png';

function Products() {
    const [catalogue, setCatalogue] = useState([]);
    const products = useOutletContext();

    function handleClick(category) {
        setCatalogue((prevCatalogue) => products.filter(product => product.category == category));
    }

    return (
        <div className={styles.body}>
            <div className={styles.filter}>
                <h3>Categories</h3>
                <div className={styles.btnDiv}>
                    <button className={`${styles.btn} ${styles.boyBtn}`} onClick={() => handleClick("men's clothing")}>
                        <p>Men's Collection</p>
                        <div><img src={boyPng} alt="boy" /></div>
                    </button>
                    <button className={`${styles.btn} ${styles.girlBtn}`} onClick={() => handleClick("women's clothing")}>
                        <p>Women's Collection</p>
                        <div><img src={girlPng} alt="girl" /></div>
                    </button>
                    <button className={`${styles.btn} ${styles.jeweleryBtn}`} onClick={() => handleClick("jewelery")}>
                        <p>Jewelery</p>
                        <div><img src={jeweleryPng} alt="jewelery" /></div>
                    </button>
                    <button className={`${styles.btn} ${styles.electronicsBtn}`} onClick={() => handleClick("electronics")}>
                        <p>Electronics</p>
                        <div><img src={electronicsPng} alt="electronics" /></div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Products;