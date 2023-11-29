import styled from "styled-components";
import circle from './../assets/circle.png'


export default function LeftScreen(props){
     
    const {temperatura,description, ano, mes, dia, hora, minutos,  diaSemana} = props;
    const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

    return(
        <ScreenContainer>
            <Temperature> 
                <div>
                <img src={circle} height="120px" width="120px"/>
                <div>{Math.floor(temperatura-273,15)}</div>
                <div>°C</div>
                </div>
                <TempMsg>{description}</TempMsg>
            </Temperature>
            <Divisor></Divisor>
            <DataHorario>
                <p>{dia} <span>/</span>{mes} <span>/</span> {ano}</p>
                <div>{diasDaSemana[diaSemana]}<span>, </span>{hora}<span>:</span>{minutos}</div>
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