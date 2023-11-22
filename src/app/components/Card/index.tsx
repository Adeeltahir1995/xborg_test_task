import React from "react";
import Image from "next/image";

import styles from "./index.module.scss";

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card = ({ title, description, image }: CardProps) => {
  return (
    <div className={styles["card"]}>
      <div className={styles["card__title"]}>{title}</div>
      <div className={styles["card__description"]}>{description}</div>
      <Image src={image} alt={"value of network gaming card"} />
    </div>
  );
};

export default Card;
