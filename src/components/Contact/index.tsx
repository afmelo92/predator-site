import Link from 'next/link';
import React from 'react';
import styles from './Contact.module.scss';

function Contact() {
  return (
    <div className={styles.main} id="call">
      <h1>Torne-se um predator agora</h1>
      <div>
        <Link href="https://api.whatsapp.com/send?phone=5541999013657&text=Ol%C3%A1%2C%20quero%20de%20ser%20a%20um%20predator">
          Fazer consulta no Whatsapp
        </Link>
      </div>
    </div>
  );
}

export default Contact;
