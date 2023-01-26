import React from 'react';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <div className={styles.main}>
      <h4>
        © Copyright
        {' '}
        {new Date().getFullYear()}
        {' '}
        <strong>Predator Labs.</strong>
        {' '}
        Todos os direitos reservados.
      </h4>

      <h4>
        CNPJ: XX.XXX.XXX/0001-XX
        Predator Labs – Negócios Digitais
      </h4>
    </div>
  );
}

export default Footer;
