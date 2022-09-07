import Container from "@mui/material/Container";
import Form from "./components/Form/Form";
import Widget from './components/Widget/Widget';
import { useSelector } from 'react-redux';
import Preloader from "./components/PreloaderModal/Preloader";




const App = () => {

  const {weatherData} = useSelector(state=>state.widget)


  return (
    <Container maxWidth="sm" fixed>
      <Form />
       { weatherData.cityName === null ? <Preloader/> : <Widget/> }
    </Container>
  );
};

export default App;
