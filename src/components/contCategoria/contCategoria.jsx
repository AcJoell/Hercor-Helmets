import React from "react";
import styles from "./contCategoria.module.css";
import Product from "../contProducto/contProducto.jsx";

const ContCategoria = () => {
  return (
    <div className={styles.container_categoria}>
      <div className={styles.container_categoria-title}>
        <p>container_categoria-title</p>
      </div>
      <div className={styles.container_categoria-lista}>
        <p>container_categoria-lista</p>
        <div className={styles.container-item}></div>
        <Product title="Mi titulo"/>
      </div>
    </div>
  );
};

export default ContCategoria;