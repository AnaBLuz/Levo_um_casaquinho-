import styled from 'styled-components';
import LeftScreen from './LeftSideScreen';

export default function MainScreen(){
    return(
        <ScreenContainer>
            <LeftScreen />
            <div> BBBBBBBB </div>
        </ScreenContainer>

    )
}

const ScreenContainer = styled.div`
    background-color: #D8D8D8;
    width: 1912px;
    height: 1072px;
    display:flex;

`