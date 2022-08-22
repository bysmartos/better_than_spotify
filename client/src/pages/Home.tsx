import { IonContent, IonPage } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import Blob from '../components/Blob';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen class="no-scroll">
        <ExploreContainer />
        <Blob/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
