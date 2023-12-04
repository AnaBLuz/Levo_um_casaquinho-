import styled from "styled-components";
import axios from "axios";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { useState, useEffect } from "react";

export default function ProximosDias(props){
    const {cityName, lon, lat} = props;
    const [data, setData] = useState([])

    useEffect(() => {
        const API_key = import.meta.env.VITE_APIKEY;
        const apiWeatherURL= `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_key}&lang=pt_br`;
        axios.get(`${apiWeatherURL}`)
    .then((response) => {
        setData(response.data)
                         })
    .catch(e => {
        console.log("erro");
    });

      }, [{cityName}]);

    return(
        <>
        <Cidade>{cityName}</Cidade>
        <LatLong><p>Lat:{lat}     </p><p>Long:{lon}</p></LatLong>
        <Grafico>
        <LineChart width={600} height={300} data={data}>
            <Line type="monotone" dataKey="list[0].main.temp" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="list[0].main.temp" />
                <YAxis />
        </LineChart>
        </Grafico>
        <Creditos>Dados fornecidos pela <a href="https://openweathermap.org/">  Open Weather API</a></Creditos>
        </>
    );
}

const Cidade = styled.div`
    width: 754px;
    height: 108px;
    font-family:'Poppins';
    font-size: 120px;
    font-weight:400;
    margin-top: 50px;
    margin-left: 50px;
`
const LatLong = styled.div`
    width: 300px;
    height: 48px;
    font-family:'Poppins';
    font-size: 24px;
    margin-top: 50px;
    margin-left: 52px;
    display: flex;
    justify-content:space-between;
`
const Grafico = styled.div`
    width: 1080px;
    height: 430px;
    margin-top: 20px;
    margin-left: 50px;
`
const Creditos = styled.div`
    width:405px;
    font-family: Poppins;
    font-size: 24px;
    font-weight: 400;
    line-height: 48px;
    margin-left: 50px;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    a{
        color: #96a7f2;
        
    }
`
