import axios from "axios";

export const getDataReq = async (city) =>{
    
    try {
        const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=036750052c3aef3f8813dc36fa7cb7d5`)
        return data.data
    } catch (error) {
        alert(`Error: ${error}`)
    }
    // axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=05aa634b5698820a2d9932988aebd1aa`).then(data=>{return data}).catch(error=>alert(`Error: ${error}`))
}
export const getDataByDefaultReq = async (city)=>{
    const allData = []
    try {
        const firstCity = await await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=New York&appid=036750052c3aef3f8813dc36fa7cb7d5`)
        allData.push(firstCity.data)
    } catch (error) {
        alert(`Error: ${error}`)
    }
    try {
        const secondCity = await await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=036750052c3aef3f8813dc36fa7cb7d5`)
        allData.push(secondCity.data)
    } catch (error) {
        alert(`Error: ${error}`)
    }
    try {
        const thirdCity = await await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=036750052c3aef3f8813dc36fa7cb7d5`)
        allData.push(thirdCity.data)
    } catch (error) {
        alert(`Error: ${error}`)
    }
    try {
        const fourCity = await await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Africa&appid=036750052c3aef3f8813dc36fa7cb7d5`)
        allData.push(fourCity.data)
    } catch (error) {
        alert(`Error: ${error}`)
    }
    return allData
}
