import React from "react";

import styles from "./index.module.scss";
import Image from "next/image";

interface ProfileCellProps {
  name: string;
  image: string;
  metaData: string;
  opposite: boolean;
}

const ProfileCell = ({ name, image, metaData, opposite }: ProfileCellProps) => {
  return (
    <div
      className={`${styles["profileCell__container"]} ${
        opposite ? styles["opposite"] : ""
      }`}
    >
      <div className={styles["profileCell"]}>
        <Image src={image} alt="profile avatar" width={64} />
        <p>{name}</p>
      </div>
      <div className={styles["profileCell__box"]}>
        <div dangerouslySetInnerHTML={{ __html: metaData }} />
      </div>
    </div>
  );
};

export default ProfileCell;
