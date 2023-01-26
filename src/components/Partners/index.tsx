import Image from 'next/image';
import React from 'react';
import styles from './Partners.module.scss';

const Partners: React.FC = () => (
  <div className={styles.main}>
    <h1>Parceiros</h1>
    <div>
      <div className={styles.image}>
        <Image
          src="/google-ads.svg"
          alt="product"
          fill
        />

      </div>
      <div className={styles.image}>
        <Image
          src="/meta-ads.svg"
          alt="product"
          fill
        />

      </div>
    </div>
  </div>
);

export default Partners;
