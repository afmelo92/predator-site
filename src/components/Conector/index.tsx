import Image from 'next/image';
import React from 'react';

import styles from './Conector.module.scss';

type ConectorProps = {
  width?: number
  height?: number
};

const Conector: React.FC<ConectorProps> = ({ width = 64, height = 64 }) => (
  <div className={styles.main}>
    <Image
      src="/connector.svg"
      alt="predator conector"
      width={width}
      height={height}
    />
  </div>
);

export default Conector;
