import { useState, useEffect } from "react";
import styled from "styled-components"

export default function Hoje(props){
   
    const {cityName, temperatura, tempMin, tempMax, umidade, velVento, lon, lat} = props;
    const [resposta, setResposta] = useState('');

    useEffect(() => {
        console.log(cityName)
        if((temperatura/10) < 17 || (tempMin/10) < 17 || (tempMax/10) < 17){
            setResposta('Sim, leve um casaquinho!')
        }
        else{
            setResposta('Não, você não deve levar um casaquinho!')
        }

      }, []);

    return(
        <>
        <Cidade>{cityName}</Cidade>
        <LatLong><span>Lat:{lat}     </span> <span>Long:{lon}</span></LatLong>
        <InfosTemp> 
            <InfoTemp>
                <InfoTexto>Mínima</InfoTexto>
                <InfoValor>{Math.floor(tempMin/10)}° C</InfoValor>
            </InfoTemp>
            <InfoTemp>
                <InfoTexto>Máxima</InfoTexto>
                <InfoValor>{Math.floor(tempMax/10)}° C</InfoValor>
            </InfoTemp>
            <InfoTemp>
                <InfoTexto>Umidade</InfoTexto>
                <InfoValor>{umidade}%</InfoValor>
            </InfoTemp>
            <InfoTemp>
                <InfoTexto>Velocidade do Vento</InfoTexto>
                <InfoValor>{velVento}m/s</InfoValor>
            </InfoTemp>
        </InfosTemp>
        <Resposta> {resposta} </Resposta>
        <Creditos>Dados fornecidos pela <div>  Open Weather API</div></Creditos>
        </>
    );
}

const Cidade = styled.div`
    width: 754px;
    height: 108px;
    font-family:'Poppins';
    font-size: 150px;
    font-weight:400;
    margin-top: 50px;
    margin-left: 50px;
`
const LatLong = styled.div`
    width: 258px;
    height: 48px;
    font-family:'Poppins';
    font-size: 24px;
    margin-top: 50px;
    margin-left: 50px;
    display: flex;
`
const InfosTemp = styled.div`
    width: 1200px;
    height: 410px;
    display: flex;
    flex-wrap: wrap;
    
`
const InfoTemp = styled.div`
    background-color: #4D4494;
    border-radius: 32px;
    width: 500px;
    height: 180px;
    margin: 20px;
`
const InfoTexto = styled.div`
     font-family:'Poppins';
     color: #FFFFFF;
     font-size: 22px;
     font-weight:700;
     margin-top: 50px;
     margin-left: 30px;
     line-height: 24px;
`
const InfoValor = styled.div`
    font-family:'Poppins';
     color: #FFFFFF;
     font-size: 48px;
     margin-left: 30px;
     font-weight:600;
`
const Resposta = styled.div`
    font-family:'Poppins';
    color: #AFADAD;
    font-style: italic;
    line-height: 48px;
    margin-left: 20px;
    margin-top: 30px;
    font-size: 24px;
`
const Creditos = styled.div`
    width:405px;
    font-family: Poppins;
    font-size: 24px;
    font-weight: 400;
    line-height: 48px;
    margin-left: 20px;
    display: flex;
    justify-content: space-between;
    div{
        color: #96a7f2;
        
    }
`
