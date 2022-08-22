import './ExploreContainer.css';
import Login from "../components/Login";
import Dashboard from './Dashboard'

interface ContainerProps { }

const code = new URLSearchParams(window.location.search).get("code")

const ExploreContainer: React.FC<ContainerProps> = () => {
  console.log(code)

  return code ? <Dashboard code={code} /> : <Login />;
};

export default ExploreContainer;