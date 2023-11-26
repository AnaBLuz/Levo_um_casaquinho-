import { useState } from 'react';
import styled from 'styled-components';
import Hoje from './Hoje';
import ProximosDias from './ProximosDias';


export default function MainScreen(){
    const [activeTab, setActiveTab] = useState('Hoje');

    function handleChangeTab(tabName){
        setActiveTab(tabName)
    }

    function renderTabContent(){
        switch(activeTab){
            case 'Hoje':
                return <Hoje />
            case 'ProximosDias':
                return <ProximosDias /> 
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
`
const TabProximosDias = styled.div`
    font-family: 'Poppins';
    font-size: 48px;
    color: ${ props => props.statusTab === 'ProximosDias' ? 'black' : '#C8C8C8'} ;
    
`