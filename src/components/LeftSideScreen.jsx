import styled from "styled-components";
import casaco from './../assets/casaco.png'
import circle from './../assets/circle.png'

export default function LeftScreen(){
    return(
        <ScreenContainer>
            <Logo>
                <img src={casaco} height="120px" width="120px"/>
                <div>Levo um casaquinho?</div>
            </Logo>
            <SearchBar></SearchBar>
            <Temperature> 
                <div>
                <img src={circle} height="120px" width="120px"/>
                <div>31 </div>
                <div>°C</div>
                </div>
            </Temperature>
        </ScreenContainer>

    );
}

const ScreenContainer = styled.div`
    background-color: white;
    width:662px;
`

const Logo = styled.div`
    
    height: 120px;
    margin-top: 50px;
    margin-left: 59px;
    display: flex;
    justify-content:space-between;
    align-items: center;
    div{
        font-family: 'Poppins';
        font-size: 70px;
        line-height:50px;
        font-weight: 600;
        flex-wrap:wrap;
        margin-left: 10px;
    }
    
    
    
`
const SearchBar = styled.div`
    width: 500px;
    height: 80px;
    margin-left: 88px;
    margin-top: 50px;
    background-color:#EDEDEF;
    border-radius: 24px;
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