import React from "react";
import styled from "styled-components";
import { useTheme } from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect,useState } from 'react'
import { getDataByDefault } from './../../redux/widgetSlice';
import Preloader from "../PreloaderModal/Preloader";
import CloudIcon from '@mui/icons-material/Cloud';

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  background: ${(props) => props.theme.darkBackground};
  border-radius: 12px;
  height: 280px;
  padding: 10px 20px 0px;
  color: ${(props) => props.theme.color};
`;
const Title = styled.h1`
  font-size: 26px;
`;
const SwitchButton = styled.input`
  display: flex;
  margin: 0 auto;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const Grid = styled.div`
  display: grid;
  place-content: center;
`;
const Icon = styled.img`
  width: 40px;
  height: 40px;
`;
const Subtitle = styled.p`

`
const Cards = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
`
const Card = styled.div`
  width:170px;
  border-radius:10px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-top:20px;
  padding: 3px 10px 5px;
  background:${props=>props.theme.uniqueColor};
`


const Widget = () => {
  const theme = useTheme();
  const dispatch = useDispatch()
  const [currentTime,setCurrentTime] = useState(null)

  useEffect( ()=>{
    dispatch(getDataByDefault())
    setInterval(() =>{
      setCurrentTime(new Date().toLocaleString())
    },1000)
  },[])


  const {othersDay,weatherData} = useSelector(state=>state.widget)

  return (
    <>
    {weatherData.weather.name === null ? <Preloader/> : <Wrapper theme={theme.default}>
    <SwitchButton type="checkbox" />
    <GridContainer>
      <Grid>
        <Title>{weatherData.cityName}</Title>
        <Subtitle>{currentTime}</Subtitle>
        <Cards>
          {othersDay.map(el=><Card theme={theme.default}>
            <span>{el.name}</span> 
            <span>{`${String(Math.round(el.main.temp)).slice(0,2)},${String(Math.round(el.main.temp)).slice(2,3)}`} °C</span>
          </Card>)}
        </Cards>
      </Grid>
      <Grid>
      {weatherData.weather.name === 'Clear' && <CloudIcon/>}
        <Icon src={weatherData.weather.name === 'Clear'} />
        <SwitchButton type='checkbox' />
        <h1>27</h1>
        <h2>Feels like: 24</h2>
      </Grid>
    </GridContainer>
  </Wrapper>}
  </>
  )
};

export default Widget;
