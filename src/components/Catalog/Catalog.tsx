import styles from "./Catalog.module.scss";
import { CatalogItem } from "./CatalogItem";
import { Filter } from "./../FilterItems/Filter";
interface dataProps {
    id: number;
    title: string;
}



export const Catalog = () => {
    const data: dataProps[] = [
        {"id": 1,"title": "Pizzeria1"},
        {"id": 2,"title": "Pizzeria2"},
        {"id": 3,"title": "Pizzeria3"},
        {"id": 4,"title": "Pizzeria4"},
    ]

    const itemList = data.map( (item) => <CatalogItem key={item.id} title={item.title}/>)
    
    return (
        <div>
            <h1 className={styles.catalogTitle}>Catalog</h1>
            <Filter />
            <div className={styles.wrapper}>
                {itemList}
            </div>
        </div>
    )

    
}