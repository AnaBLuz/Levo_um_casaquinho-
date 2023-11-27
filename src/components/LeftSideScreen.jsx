import styled from "styled-components";
import casaco from './../assets/casaco.png'
import circle from './../assets/circle.png'
import lupa from './../assets/lupa.png'
import { useState } from "react";
import axios from "axios";

export default function LeftScreen(){
     
    const [cityName, setCityName] = useState('')
    const [temp, setTemp] = useState()

    const handleNameInputChange = (event) => setCityName(event.target.value)

function searchCity(){
    const API_key = import.meta.env.VITE_APIKEY;
    const apiWeatherURL= `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}`;
    axios.get(`${apiWeatherURL}`)
    .then((response) => {setTemp(response.data.main.temp)})
    .catch(e => {
        console.log("erro");
    });
}


    return(
        <ScreenContainer>
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
            <Temperature> 
                <div>
                <img src={circle} height="120px" width="120px"/>
                <div>{temp}</div>
                <div>°C</div>
                </div>
                <TempMsg>Céu Aberto</TempMsg>
            </Temperature>
            <Divisor></Divisor>
            <DataHorario>
                <p>16/11/2023</p>
                Quinta-feira, 16:32
            </DataHorario>
            <ToggleF>
               <TrackF> 
                 <KnobF></KnobF>
               </TrackF>
               <p>°F</p>
            </ToggleF>
            
        </ScreenContainer>
    
    );
}

const ScreenContainer = styled.div`
    background-color: white;
    width:662px;
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
    }
`

const Temperature = styled.div`
    width: 426px;
    height: 228px;
    margin-left: 90px;
    margin-top: 50px;
    
    div{
        display: flex;
        align-items: center;
        
      div {
        font-size:80px;
        font-family: 'Poppins';
        font-size: 110px;
        font-weight: 300;
        color: #EC6E4C;
      } 
    }
   
`
const TempMsg = styled.div`
    margin-left: 150px;
    margin-top: 40px;
    font-size: 30px;
`
const Divisor = styled.div`
    background-color: #EDEDED;
    width: 395px;
    border-radius: 5px;
    height: 5px;
    margin-left: 90px;
`

const DataHorario = styled.div`
    width: 215px;
    height: 80px;
    margin-top: 30px;
    margin-left: 200px;
    font-size: 24px;
    p{
        margin-left: 40px;
    }

`
const ToggleF = styled.div`
    width: 115px;
    height:48px;
    margin-left: 200px;
    display: flex;
    justify-content:space-between;
    align-items: center;
    p{
        font-family:'Poppins';
        font-size: 24px;
        font-weight:400;
        line-height: 48px;
    }
`
const KnobF = styled.div`
background: #FFFFFF;
box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.12);
border-radius: 16px;
width:27px;
height:27px;

`
const TrackF = styled.div`
background: #E9E9EA;
border-radius: 16px;
width: 51px;
height:31px;

`