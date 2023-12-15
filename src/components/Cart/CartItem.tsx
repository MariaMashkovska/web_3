import { useAppDispatch } from '../../hooks/redux.store.hooks';
import { removeFromCart } from './cart.slice';

import styles from "./CartItem.module.scss";

interface CartItemProps {
    id: string | number;
    model: string;
    price: number
    amount: any;
}

export function CartItem(props: CartItemProps) {
    const dispatch = useAppDispatch();
    const handleRemoveFromCart = (productId: string | number) => dispatch(removeFromCart(productId)) 

    return (
        <div className={styles.item}>
            <div className={styles.description}>
                <img className={styles.image} src="https://all-mods.ru/wp-content/uploads/2018/09/five-nights-at-freddys-serie-aterrorizante-terror.jpg" alt="product" />
                <p className={styles.name}>{props.model}</p>
            </div>
            <div className={styles.remove}>
                <div>
                    <p>Price: <span className={styles.bold}>{props.price * props.amount}</span></p>
                    <p className={styles.amount}>Amount: <span className={styles.bold}>{props.amount}</span></p>
                </div>
                <button className={styles.button} onClick={() => handleRemoveFromCart(props.id)}>Remove</button>
            </div>
        </div>
    )
}
