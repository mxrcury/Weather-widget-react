import Container from "@mui/material/Container";
import Form from "./components/Form/Form";
import Widget from "./components/Widget/Widget";
import { useSelector } from "react-redux";
import Preloader from "./components/PreloaderModal/Preloader";
import { useEffect, useState } from "react";
import { Switch } from "react-switch-input";

const App = () => {
  const { weatherData } = useSelector((state) => state.widget);
  const [darkTheme, setDarkTheme] = useState(true);
  useEffect(()=>{
    document.body.style.background = '#E6E2DD'
  },[])

  return (
    <Container maxWidth="sm" fixed>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Switch
          theme={"one"}
          value={darkTheme}
          style={{ width: "120px" }}
          onChange={() => {
            setDarkTheme(!darkTheme);
            darkTheme ? document.body.style.background = '#373A36' : document.body.style.background = '#E6E2DD'
            darkTheme ? document.body.style.color = '#E6E2DD' : document.body.style.color = '#E6E2DD'
          }}
        />
        <label style={{fontSize:'13px'}} > switch theme</label>
      </div>
      <Form darkTheme={darkTheme} />
      {weatherData.cityName === null ? <Preloader /> : <Widget darkTheme={darkTheme} />}
    </Container>
  );
};

export default App;
