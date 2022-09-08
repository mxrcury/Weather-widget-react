import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from 'styled-components'
import { useDispatch } from 'react-redux';
import { getData } from './../../redux/widgetSlice';

const FormWrapper = styled.form`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 50px;
`;
const Input = styled.input`
  width:31%;
  background: transparent;
  border-radius: 5px;
  outline: 1px solid ${props=>props.theme.outlineColor};
  font: inherit;
  display: block;
  cursor: text;
  appearance: auto;
  word-spacing: normal;
  text-rendering: auto;
  border: 0;
  color:${props=>props.theme.outlineColor};
  padding: 0 5px;
  &::placeholder{
    color:${props=>props.theme.placeholder}
  }
  &:hover {
    outline: 1px solid ${props=>props.theme.outlineColorHover};
  }
`;
const Search = styled.button`
    border-radius:5px;
    background:transparent;
    outline:0;
    width:13%;
    margin-left:9px;
    border:0;
    outline: 1px solid ${props=>props.theme.outlineColor};
    transition:.2s ease;
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:center;
    &:hover{
        background:${props=>props.theme.outlineColor};
        opacity:.8;
    }
`

const Form = ({ darkTheme }) => {

  const { register, handleSubmit,reset } = useForm({
    defaultValues:{
      city:''
    }
  });
  const theme = useTheme()
  const dispatch = useDispatch()



  const handleSearch = (value) =>{
    dispatch(getData(value.city))
    reset()
  }

  return (
    <FormWrapper onSubmit={handleSubmit(handleSearch)}>
      <Input
        theme={darkTheme ? theme.default : theme.dark}
        {...register("city", { required: true, maxLength: 25 })}
        placeholder="Enter a city"
      />
      <Search theme={darkTheme ? theme.default : theme.dark} >
        <SearchIcon htmlColor={darkTheme ? 'black' : "white"} />
      </Search>
    </FormWrapper>
  );
};

export default Form;
