import React from "react";
import styles from "./Cards.module.css";

const Card = ({ name, material, price, image }) => {
  return (
    <div className={styles.card}>
      <h2>Productos Nuevo</h2>
      <img src={image} alt={name} width={200} height={200} />
      <div className="card-content">
        <h3>{name}</h3>
        <p className={styles.material}>Material: {material}</p>
        <p className={styles.precio}>Precio: ${price}</p>
        <button>Ver Producto</button>
      </div>
    </div>
  );
};

const Store = () => {
  const furnitureData = [
    {
      name: "Silla de Madera",
      material: "Madera de roble",
      price: 150,
      image: "/assets/img/muebles/mueble6.JPG",
    },
    {
      name: "Mesa de Vidrio",
      material: "Vidrio templado",
      price: 300,
      image: "/assets/img/muebles/mueble9.JPG",
    },
    {
      name: "Sofá de Cuero",
      material: "Cuero genuino",
      price: 500,
      image: "/assets/img/muebles/mueble5.JPG",
    },
  ];

  return (
    <div className={styles.best}>
      {furnitureData.map((furniture, index) => (
        <Card
          key={index}
          name={furniture.name}
          material={furniture.material}
          price={furniture.price}
          image={furniture.image}
        />
      ))}
    </div>
  );
};

export default Store;
