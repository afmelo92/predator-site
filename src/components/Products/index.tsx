import Image from 'next/image';
import ProductDetail from './components/ProductDetail';

import styles from './Products.module.scss';

const Details: React.FC = () => (
  <div className={styles.main}>
    <h1>O que fazemos por você</h1>
    <div className={styles.eye1}>
      <Image
        src="/hero-eye.svg"
        alt="predator eye image"
        width={64}
        height={64}
      />
    </div>
    <ProductDetail
      imgUrl="/pc.svg"
      title="Desenvolvimento de sites e aplicações"
      description="As tecnologias mais avançadas aliadas a um design moderno com
      poder de converter muitas vendas e atender milhões de clientes.
      A Predator Labs desenvolve seu website, landing page ou aplicação do jeito que
      você precisa."
      id="info"
      right
    />
    <ProductDetail
      imgUrl="/adsmgt.svg"
      title="Gerenciamento de tráfego online"
      description="Quer vender online? Quer mais visualizações? Nosso gerenciamento
      de tráfego é a resposta. Temos técnicas longamente testadas para garantir que o
      seu negócio apareça para as pessoas certas na medida certa. Facebook, Instagram,
      Google, TikTok... não importa o lugar, nós sabemos como caçar clientes e views."
      id="ads"
    />
    <ProductDetail
      imgUrl="/strategy.svg"
      title="Estratégias digitais"
      description="Ok, você já tem um negócio mas ele não vende o tanto quanto gostaria?
      É um(a) influencer e ainda não tem as visualizações que sempre sonhou? Estamos há
      muito tempo nessa selva digital e conhecemos todos os atalhos para levar você junto
      até seu objetivo. Construímos a estratégia digital adequada para que você esteja
      sempre no topo."
      id="estrategia"
      right
    />
  </div>
);

export default Details;
