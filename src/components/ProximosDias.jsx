import styled from "styled-components";

export default function ProximosDias(){
    return(
        <>
        <Cidade>São Paulo</Cidade>
        <LatLong>Lat:  44.34    Long: 10.99 </LatLong>
        <Grafico></Grafico>
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
const Grafico = styled.div`
    width: 1080px;
    height: 430px;
    background-color: white;
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
    div{
        color: #96a7f2;
        
    }
`
