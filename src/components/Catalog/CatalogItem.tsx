import { Link } from "react-router-dom";
import styles from "./CatalogItem.module.scss";
import { ItemInfoButton } from "./ItemInfoButton";
interface CatalogItemProps {
    id: number | string;
    title: string;
    price: number;
}

export const CatalogItem = (props: CatalogItemProps) => {
    return (
        <div className={styles.item}>
            <img className={styles.image} src="https://all-mods.ru/wp-content/uploads/2018/09/five-nights-at-freddys-serie-aterrorizante-terror.jpg" alt="item"/>
            <p className={styles.title}>{props.title}</p>

            <p>Price:</p>

            <p className={styles.price}>{props.price}</p>
            <p className={styles.view_more}>
                <ItemInfoButton itemId={props.id}/>
            </p>
        </div>
    )
}
