import React from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../Catalog/Loader";
import { ItemContextProvider, useItemContext } from "./ItemContext";
import styles from "./ItemPage.module.scss";

const ItemPageContent = () => {
  const { item, loading } = useItemContext();

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.item__page}>
          <div className={styles.image__container}>
            <img
              className={styles.image}
              src="https://all-mods.ru/wp-content/uploads/2018/09/five-nights-at-freddys-serie-aterrorizante-terror.jpg"
              alt="device"
            />
          </div>
          <div className={styles.description}>
            <h1 className={styles.title}>{item?.model}</h1>
            <p className={styles.about}>{"IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME IT'S ME"}</p>
            <p className={styles.price}>${item?.price}</p>
          </div>
          <button
            style={{
              cursor: "pointer",
              textDecoration: "none",
              background: "none",
              marginTop: 400,
              border: "2px solid",
              fontSize: "1.5rem",
              fontWeight: 400,
              lineHeight: 1,
              textAlign: "center",
              padding: "0.25rem 0.5rem",
              color: "#20B2AA", // sea color
              transition: "0.8s",
            }}
            onClick={() => window.history.back()}
          >
            GO Back
          </button>
        </div>
      )}
    </div>
  );
};

const ItemPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <ItemContextProvider id={id}>
      <ItemPageContent />
    </ItemContextProvider>
  );
};

export default ItemPage;
