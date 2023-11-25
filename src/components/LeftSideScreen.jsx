import styled from "styled-components";
import casaco from './../assets/casaco.png'

export default function LeftScreen(){
    return(
        <ScreenContainer>
            <Logo>
                <img src={casaco} height="120px" />
                <div>Levo um casaquinho?</div>
            </Logo>
        </ScreenContainer>

    );
}

const ScreenContainer = styled.div`
    background-color: white;
    width:662px;
`

const Logo = styled.div`
    width: 550px;
    height: 120px;
    margin-top: 50px;
    margin-left: 59px;
    display: flex;
    font-family: 'Poppins';
    font-size: 48px;
    line-height:48px;
    font-weight: 600;
    align-items: center;
`