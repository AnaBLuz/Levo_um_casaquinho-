import styled from 'styled-components';
import LeftScreen from './LeftSideScreen';
import MainScreen from './MainScreen';


export default function FullScreen(){
    

    return(
        <ScreenContainer>
            <LeftScreen />
            <MainScreen />
        </ScreenContainer>
               
    )
}

const ScreenContainer = styled.div`
    background-color: #D8D8D8;
    width: 1912px;
    height: 1072px;
    display:flex;

`