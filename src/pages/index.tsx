import Head from 'next/head';
import Benefits from '../components/Benefits';
import Conector from '../components/Conector';
import Contact from '../components/Contact';
import Details from '../components/Details';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import Products from '../components/Products';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Predator Labs |
          Desenvolvimento de sites e aplicações |
          Gerenciamento de tráfego |
          Marketing digital
        </title>
        <meta
          name="description"
          content="Conquiste mais visualizações e clientes com tráfego pago. Venda
          mais em seu site ou aplicação com os serviços de marketing digital da Predator Labs"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <Hero />
        <Conector height={96} />
        <Products />
        <Conector height={128} />
        <Contact />
        <Partners />
        <Conector height={128} />
        <Details />
        <Conector height={128} />
        <Benefits />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
