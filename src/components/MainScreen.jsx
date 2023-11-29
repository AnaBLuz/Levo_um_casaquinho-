import { useState } from 'react';
import styled from 'styled-components';
import Hoje from './Hoje';
import ProximosDias from './ProximosDias';


export default function MainScreen(props){

    const {cityName, temperatura, tempMin, tempMax, umidade, velVento, lon, lat} = props;
    const [activeTab, setActiveTab] = useState('Hoje');

    function handleChangeTab(tabName){
        setActiveTab(tabName)
    }

    function renderTabContent(){
        switch(activeTab){
            case 'Hoje':
                return <Hoje 
                cityName = {cityName}
                temperatura = {temperatura} 
                tempMin = {tempMin} 
                tempMax={tempMax}
                umidade={umidade}
                velVento={velVento}
                lon={lon}
                lat={lat}
                />
            case 'ProximosDias':
                return <ProximosDias
                cityName = {cityName}
                lon={lon}
                lat={lat}
                /> 
        }
    }

    return(
        <div>
        <Tabs>
            <TabHoje statusTab={activeTab} onClick={() => handleChangeTab('Hoje')}>Hoje</TabHoje>
            <TabProximosDias statusTab={activeTab} onClick={() => handleChangeTab('ProximosDias')}>Próximos Dias</TabProximosDias>
        </Tabs>
        <div>
            { renderTabContent()}
        </div>
        </div>
    )
}

const Tabs = styled.div`
    width: 509px;
    height: 48px;
    margin-top: 50px;
    margin-left: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const TabHoje = styled.div`
    font-family: 'Poppins';
    font-size: 48px;
    color: ${ props => props.statusTab === 'Hoje' ? 'black' : '#C8C8C8'} ;
    cursor: pointer;
`
const TabProximosDias = styled.div`
    font-family: 'Poppins';
    font-size: 48px;
    color: ${ props => props.statusTab === 'ProximosDias' ? 'black' : '#C8C8C8'} ;
    cursor: pointer;
    
`