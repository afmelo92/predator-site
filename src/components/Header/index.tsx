import Image from 'next/image';
import React from 'react';
import styles from './Header.module.scss';

function Header() {
  let element: HTMLElement | null = null;

  function scrollToAnchor(anchor: string): void {
    element = document?.getElementById(anchor);
    element?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  return (
    <header className={styles.main}>
      <div>
        <div className={styles.logo}>
          <Image
            src="logo.svg"
            alt="google ads logo"
            fill
          />
        </div>
        <div className={styles.menu}>
          <nav>
            <button type="button" onClick={() => scrollToAnchor('call')}>Quero ser Predator</button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
