import Image from 'next/image';
import React from 'react';
import styles from './Bullet.module.scss';

type BulletProps = {
  title: string
  description: string
  imgUrl: string
};

const Bullet: React.FC<BulletProps> = ({ imgUrl, title, description }) => (
  <div className={styles.main}>
    <div className={styles.image}>
      <Image
        src={imgUrl}
        alt="product"
        fill
      />
    </div>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

export default Bullet;
