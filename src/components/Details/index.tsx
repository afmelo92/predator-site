import Image from 'next/image';
import ProductDetail from './components/ProductDetail';

import styles from './Details.module.scss';

const Details: React.FC = () => (
  <div className={styles.main}>
    <h1>O método</h1>
    <div className={styles.eye1}>
      <Image
        src="/hero-eye.svg"
        alt="predator eye image"
        width={64}
        height={64}
      />
    </div>
    <ProductDetail
      imgUrl="/info.svg"
      title="Levantamento de informações"
      description="Faremos uma reunião com você e sua equipe para entender melhor
      seu negócio, objetivos, e clientes."
      id="info"
    />
    <ProductDetail
      imgUrl="/plan.svg"
      title="Planejamento e estratégia"
      description="Deixe que nós pensamos por você. Visando uma performance imbatível, usamos esses dados
      junto de nossas táticas já experimentadas para traçar a melhor estratégia."
      right
      id="ads"
    />
    <ProductDetail
      imgUrl="/exec.svg"
      title="Execução"
      description="Para melhorar seus resultados online, seja em vendas, visualizações
      ou cliques, executamos a estratégia multicanal mais adequada para seus objetivos.
      Analisaremos os dados e aplicamos métodos consolidados para impulsionar seu negócio."
      id="estrategia"
    />
  </div>
);

export default Details;
