import styled from 'styled-components';
import LeftScreen from './LeftSideScreen';
import MainScreen from './MainScreen';
import lupa from './../assets/lupa.png'
import { useState, useEffect } from "react";
import axios from "axios";
import casaco from './../assets/casaco.png'



export default function FullScreen(){
    
    const [cityName, setCityName] = useState('Belém')
    const [temp, setTemp] = useState('');
    const [description, setDescription] = useState('');
    const [tempMin, setTempMin] = useState('');
    const [tempMax, setTempMax] = useState('');
    const [umidade, setUmidade] = useState('');
    const [velVento, setvelVento] = useState('');
    const [lon, setLon] = useState('');
    const [lat, setLat] = useState('');

    const [timeStamp, setTimeStamp] = useState('');
    const data = new Date(timeStamp * 1000); 
    const ano = data.getFullYear();
    const mes = data.getMonth() + 1; // Os meses em JavaScript são indexados de 0 a 11
    const dia = data.getDate();
    const hora = data.getHours();
    const minutos = data.getMinutes();
    const diaSemana = data.getDay();


    const handleNameInputChange = (event) => setCityName(event.target.value)

useEffect(() => {
    searchCity()
      }, []);

function searchCity(){
    const API_key = import.meta.env.VITE_APIKEY;
    const apiWeatherURL= `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}&lang=pt_br`;
    axios.get(`${apiWeatherURL}`)
    .then((response) => {
                         setTemp(response.data.main.temp)
                         setTimeStamp(response.data.dt) 
                         setDescription(response.data.weather[0].description)
                         setTempMin(response.data.main.temp_min)
                         setTempMax(response.data.main.temp_max)
                         setUmidade(response.data.main.humidity)
                         setvelVento(response.data.wind.speed) 
                         setLon(response.data.coord.lon)
                         setLat(response.data.coord.lat)
                         setCityName(cityName)
                         })
    .catch(e => {
        console.log("erro");
    });
}

    return(
        <ScreenContainer>
        <LateralMenu>
            <Logo>
                <img src={casaco} height="120px" width="120px"/>
                <div>Levo um casaquinho?</div>
            </Logo>
            <SearchBar>
                <img src={lupa}  
                height="30px" 
                width="30px"
                onClick={searchCity}
                />
                <input 
                type="text" 
                placeholder="Procure por uma cidade" 
                onChange={handleNameInputChange}
                />
            </SearchBar>
            <LeftScreen 
            temperatura = {temp}
            description = {description}
            ano = {ano}
            mes = {mes}
            dia = {dia}
            hora = {hora}
            minutos = {minutos}
            diaSemana = {diaSemana}   
            />
        </LateralMenu>
            <MainScreen
            cityName ={cityName}
            temperatura= {temp}
            tempMin={tempMin}
            tempMax={tempMax}
            umidade={umidade}
            velVento={velVento}
            lon = {lon}
            lat = {lat}
            />
        </ScreenContainer>
               
    )
}

const ScreenContainer = styled.div`
    background-color: #D8D8D8;
    width: 1912px;
    height: 1072px;
    display:flex;

`

const Logo = styled.div`
    
    height: 120px;
    margin-top: 50px;
    margin-left: 59px;
    display: flex;
    justify-content:space-between;
    align-items: center;
    div{
        font-family: 'Poppins';
        font-size: 70px;
        line-height:50px;
        font-weight: 600;
        flex-wrap:wrap;
        margin-left: 10px;
    }
    
    
    
`
const SearchBar = styled.div`
    width: 500px;
    height: 80px;
    margin-left: 88px;
    margin-top: 50px;
    background-color:#EDEDEF;
    border-radius: 24px;
    display: flex;
    align-items: center;
    input {
        padding: 0.8rem;
        border:none;
        background-color:#EDEDEF;
        font-family:'Montserrat';
        font-size:22px;
        font-weight:500;
        line-height:24px;
        color:#424243;
    }
    img{
        margin-left: 30px;
        cursor: pointer;
    }
`

const LateralMenu = styled.div`
    background-color: white;
`