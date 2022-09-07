import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from 'styled-components'

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
  color:${props=>props.theme.darkColor};
  padding: 0 5px;
  &:hover {
    outline: 1px solid rgba(80, 80, 80, 1);
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
    &:hover{
        background:${props=>props.theme.outlineColor};
        opacity:.8;
    }
`

const Form = ({ handleClick }) => {
  const { register, handleSubmit } = useForm();
  const theme = useTheme()

  return (
    <FormWrapper onSubmit={handleSubmit(handleClick)}>
      <Input
        theme={theme.default}
        {...register("city", { required: true, maxLength: 25 })}
        placeholder="Enter a city"
      />
      <Search theme={theme.default} >
        <SearchIcon color="black" />
      </Search>
    </FormWrapper>
  );
};

export default Form;
