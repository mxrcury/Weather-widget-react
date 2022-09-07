import { Button, TextField } from "@mui/material";
import Container from "@mui/material/Container";
import styled from "styled-components";
import { useForm } from 'react-hook-form'
import Form from "./components/Form/Form";
import Widget from './components/Widget/Widget';




const App = () => {

  const {register} = useForm()

  const handleSearch = (value) =>{
    console.log(value)
  }

  return (
    <Container maxWidth="sm" fixed>
      <Form handleClick={handleSearch} />
      <Widget/>
    </Container>
  );
};

export default App;
