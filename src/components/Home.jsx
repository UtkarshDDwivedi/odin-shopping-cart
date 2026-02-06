import { useEffect, useState, useRef } from "react";
import styles from '../style/home.module.css';
import { useNavigate } from "react-router";

import tShirt from '../assets/t-shirt.png';

function Home() {
    const navigate = useNavigate();

    const productRef = useRef(null);

    function handleMouseMove(e) {
        const el = productRef.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left; // mouse X inside element
        const y = e.clientY - rect.top;  // mouse Y inside element

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -((y - centerY) / centerY) * 15; // max 15deg
        const rotateY = ((x - centerX) / centerX) * 15;

        el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    }

    function handleMouseLeave() {
        const el = productRef.current;
        if (!el) return;

        el.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
    }


    return (
        <div className={styles.body}>
            <div className={styles.stars}>
                <span className={styles.star}>✦</span>
                <span className={styles.star}>✧</span>
                <span className={styles.star}>✦</span>
                <span className={styles.star}>✧</span>
                <span className={styles.star}>✦</span>
                <span className={styles.star}>✧</span>
            </div>

            <div className={styles.content}>
                <div>
                    <h2>Welcome</h2>
                    <p>A SHOPPING EXPERIENCE LIKE NONE OTHER</p>
                </div>

                <button onClick={() => navigate('/products')}>
                    Explore Catalogue
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" /></svg>
                </button>
            </div>

            <div className={styles.productWrapper} ref={productRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                <div className={styles.product}>
                    <img src={tShirt} alt="product" />
                </div>
            </div>
        </div>
    );
}

export default Home;