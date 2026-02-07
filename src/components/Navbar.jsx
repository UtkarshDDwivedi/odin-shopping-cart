import { useState } from 'react';
import styles from '../style/navbar.module.css'
import { Link } from 'react-router';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <nav className={styles['nav-bar']}>
                <div className={styles.logo}>Aurora</div>

                <div className={`${styles.hamburger} ${isOpen ? styles.open : ''}`} onClick={() => setIsOpen(prev => !prev)}>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                </div>

                <div>
                    <ul className={`${styles['nav-links']} ${isOpen ? styles.active : ''}`}>
                        <li><Link to='/' onClick={() => setIsOpen(false)}>HOME</Link></li>
                        <li><Link to='products' onClick={() => setIsOpen(false)}>SHOP</Link></li>
                        <li><Link to='cart' onClick={() => setIsOpen(false)}>
                            CART
                            <svg className={styles.cartIcon} viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M5 9C5 7.89543 5.89543 7 7 7H17C18.1046 7 19 7.89543 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M15 10V6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6V10"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;