import Image from 'next/image';
import styles from './Hero.module.scss';

function Hero() {
  let element: HTMLElement | null = null;

  function scrollToCall() {
    element = document?.getElementById('call');
    element?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  return (
    <div className={styles.main}>
      <div className={styles.call}>
        <h1>Transforme sua empresa em uma predadora digital</h1>
        <p>
          Com as tecnoglogias e métodos mais avançadas do mercado
          ajudamos você a construir um negócio digital sólido, lucrativo
          e duradouro.
        </p>
        <button type="button" onClick={() => scrollToCall()}>Quero ser predator</button>
      </div>
      <div className={styles.banner}>
        <div className={styles.hero1}>
          <Image
            src="/hero-img.svg"
            alt="banner"
            fill
          />
        </div>
        <div className={styles.eye1}>
          <Image
            src="/hero-eye.svg"
            alt="banner"
            width={64}
            height={64}
          />
        </div>
        <div className={styles.eye2}>
          <Image
            src="/hero-eye.svg"
            alt="banner"
            width={32}
            height={32}
          />
        </div>
        <div className={styles.eye3}>
          <Image
            src="/hero-eye.svg"
            alt="banner"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
