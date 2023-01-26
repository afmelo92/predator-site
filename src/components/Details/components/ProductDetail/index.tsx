import Image from 'next/image';
import React from 'react';

import styles from './ProductDetail.module.scss';

type ProductDetailProps = {
  imgUrl?: string
  title: string
  description: string
  right?: boolean
  children?: React.ReactNode
  id?: string
};

const ProductDetail: React.FC<ProductDetailProps> = ({
  children, imgUrl, title, description, right = false, id,
}) => (
  <div className={`${styles.main} ${right && styles.right}`} id={id}>
    {imgUrl && (
      <div className={`${styles.image} ${right && styles.right}`}>
        <Image
          src={imgUrl}
          alt="product"
          fill
        />
      </div>
    )}
    <div className={styles.text}>
      <h2>{title}</h2>
      <p>{description}</p>
      {children}
    </div>

  </div>
);

export default ProductDetail;
