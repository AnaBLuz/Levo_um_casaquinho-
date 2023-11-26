import { useState, useEffect } from "react";
import styled from "styled-components"

export default function Hoje(){
    const [resposta, setResposta] = useState('AAA');

    useEffect(() => {
        let temp = 30;
        if(temp < 17 ){
            setResposta('Sim, leve um casaquinho!')
        }
        else{
            setResposta('Não, você não deve levar um casaquinho!')
        }

      }, []);

    return(
        <>
        <Cidade>São Paulo</Cidade>
        <LatLong>Lat:  44.34    Long: 10.99 </LatLong>
        <InfosTemp> 
            <InfoTemp>
                <InfoTexto>Mínima</InfoTexto>
                <InfoValor>31° C</InfoValor>
            </InfoTemp>
            <InfoTemp>
                <InfoTexto>Máxima</InfoTexto>
                <InfoValor>48°C</InfoValor>
            </InfoTemp>
            <InfoTemp>
                <InfoTexto>Umidade</InfoTexto>
                <InfoValor>64%</InfoValor>
            </InfoTemp>
            <InfoTemp>
                <InfoTexto>Velocidade do Vento</InfoTexto>
                <InfoValor>12 m/s</InfoValor>
            </InfoTemp>
        </InfosTemp>
        <Resposta> {resposta} </Resposta>
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
