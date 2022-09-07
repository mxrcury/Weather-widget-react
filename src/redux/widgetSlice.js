import { createSlice } from '@reduxjs/toolkit';
import {getDataReq, getDataByDefaultReq} from './../components/api/apiRequests';

const initialState ={
    weatherData:{
        cityName:null,
        weather:{
            name:null
        },
        temp:null,
        tempFeelsLike:null,
        countryIndex:null,
        windSpeed:null
    },
    othersDay:[],
    isLoading:false
}

const widgetSlice = createSlice({
    name:'widget',
    initialState,
    reducers:{
        setCurrentDayData(state,action){
            const { name,weather,main,wind,sys } = action.payload
            state.weatherData.cityName = name
            state.weatherData.weather.name = weather[0].main
            state.weatherData.temp = Math.round(main.temp)
            state.weatherData.tempFeelsLike = Math.round(main.feels_like)
            state.weatherData.countryIndex = sys.country
            state.weatherData.windSpeed = wind.speed
        },
        setOtherDaysData(state,action){
            state.othersDay = action.payload
        },
        setLoading(state,action){
            state.isLoading = action.payload.isLoading 
        }
    }
})


export const { setCurrentDayData,setOtherDaysData } = widgetSlice.actions

export const widgetReducer = widgetSlice.reducer

export const getData = city=> dispatch =>{

    getDataReq(city).then(res=>{
        dispatch(setCurrentDayData(res))
    }).catch(error=>alert(error))

}

export const getDataByDefault = ()=> dispatch=>{
    getDataByDefaultReq().then(res=>{
        dispatch(setOtherDaysData(res))
    })
}