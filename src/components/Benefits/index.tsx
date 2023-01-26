import Conector from '../Conector';
import styles from './Benefits.module.scss';
import Bullet from './components/Bullet';

const Benefits: React.FC = () => (
  <div className={styles.main}>
    <div>
      <Bullet
        imgUrl="/eye.svg"
        title="Tenha mais visualizações"
        description="Apareça para muito mais pessoas e faça seu negócio/rede
        social decolar"
      />
      <Conector />
      <Bullet
        imgUrl="/clients.svg"
        title="Conquiste mais clientes"
        description="Selecione a pessoa certa e torne-a cliente com as ferramentas
        mais avançadas de segmentação de clientes"
      />
      <Conector />
      <Bullet
        imgUrl="/sell.svg"
        title="Venda mais"
        description="Converta cada contato em venda e fature alto no universo digital"
      />
    </div>
  </div>
);

export default Benefits;
