import { Button } from "../Button/Button";
import styles from "./CatalogItem.module.scss";

interface CatalogItemProps {
    key: number;
    title: string;
    /* content: string;
    price: number; */
}

export const CatalogItem = (props: CatalogItemProps) => {
    return (
        <div className={styles.catalogItem}>
            <img className={styles.itemImage} src="https://images.stopgame.ru/uploads/users/2021/616969/00116.vZmfYZS.png" alt="item"/>
            <p className={styles.itemTitle}>{props.title}</p>

            <p>IT`S ME</p>

            <p>666</p>
            <p><Button label="More"/></p>
        </div>
    )
}

