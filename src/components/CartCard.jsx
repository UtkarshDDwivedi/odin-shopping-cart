import styles from '../style/cartCard.module.css';

function CartCard({ product, productsInCart, setProductsInCart }) {
    if (!product) return null;

    const cartItem = productsInCart.find(item => item.id === product.id);
    const qty = cartItem?.qty || 0;

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
            <div className={styles.product}>
                <div className={styles.holder}>
                    <img src={product.image} alt={product.title} />
                </div>

                <div className={styles.description}>
                    <h3> {window.innerWidth > 515 ? product.title : product.title.slice(0, 20) + '...'} </h3>
                    <p>${product.price}</p>
                </div>
            </div>

            <div className={styles.buttons}>
                <div className={styles.qtyControl}>
                    <button onClick={handleDecrease}>−</button>
                    <div><p>{qty}</p></div>
                    <button onClick={handleIncrease}>+</button>
                </div>
            </div>
        </div>
    );
}

export default CartCard;