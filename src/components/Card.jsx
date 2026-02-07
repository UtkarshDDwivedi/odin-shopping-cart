import styles from '../style/card.module.css';

function Card({ product, productsInCart, setProductsInCart }) {
    if (!product) return null;

    const cartItem = productsInCart.find(item => item.id === product.id);
    const qty = cartItem?.qty || 0;

    function handleAddToCart() {
        setProductsInCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);

            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                );
            } else {
                return [...prevCart, { id: product.id, qty: 1 }];
            }
        });
    }

    function handleIncrease() {
        setProductsInCart(prev =>
            prev.map(item =>
                item.id === product.id
                    ? { ...item, qty: item.qty + 1 }
                    : item
            )
        );
    }

    function handleDecrease() {
        setProductsInCart(prev =>
            prev
                .map(item =>
                    item.id === product.id
                        ? { ...item, qty: item.qty - 1 }
                        : item
                )
                .filter(item => item.qty > 0) // remove if qty becomes 0
        );
    }

    return (
        <div className={styles.card}>
            <div className={styles.holder}>
                <img src={product.image} alt={product.title} />
            </div>

            <div className={styles.description}>
                <div className={styles.infoBlock}>
                    <h3> {product.title.length < 50 ? product.title : product.title.slice(0, 50) + '...'} </h3>
                    <p> ${product.price} </p>
                </div>
                {
                    qty === 0 ? (
                        <button onClick={handleAddToCart} className={styles.cartBtn}>
                            ADD TO CART
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke='#925d19'>
                                <path d="M5 9C5 7.89543 5.89543 7 7 7H17C18.1046 7 19 7.89543 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M15 10V6C15 4.34315 13.6569 3 12 3V3C10.3431 3 9 4.34315 9 6V10" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    ) : (
                        <div className={styles.qtyControl}>
                            <button onClick={handleDecrease}>−</button>
                            <div>{qty}</div>
                            <button onClick={handleIncrease}>+</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Card;