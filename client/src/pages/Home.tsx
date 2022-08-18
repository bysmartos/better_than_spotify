import { IonContent, IonPage } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import Blob from '../components/Blob';
import { SearchBar } from '../components/SearchBar';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <SearchBar/>
        <ExploreContainer />
        <Blob/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
