import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Main = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    margin-top:24px;
`
const MainSimilar = styled.div`
    display:flex;
    justify-content:flex-start;
    flex-wrap:wrap;
    padding:25px 0;
    @media (max-width: 900px) {
        justify-content:center;
      }
`

const Img = styled.img`
    display:block;
    width: 300px;
    height: 300px;
    &:last-child{
        margin-top:24px
    }
`
const ImgSimilar = styled.img`
    width: 120px;
    height: 120px;
`

const NavElement = styled(NavLink)`
    min-width:300px;
    width:32%;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    text-decoration:none;
`

const Text = styled.p`
    width: 300px;
    height: 95px;
    font:normal normal 12px/125.5% Roboto;
    color: #000000;
`

const InfoBlock = styled.div`
    position:relative;
    background: rgba(196, 196, 196, 0.5);
    padding:19px 43px 50px;
    width: 452px;
    min-height: 624px;
    margin-left:30px;
`
const Title = styled.h1`
    font:normal bold 28px/33px Roboto;
    display: flex;
    align-items: center;
    color: #000000;
`
const TitleSimilar = styled.h2`
    width: 300px;
    height: 20px;
    font:normal bold 16px/19px Roboto;
    color: #833AE0;
    @media (max-width: 768px) {
        text-align:center;
      }
`
const Information = styled.p`
    font:normal normal 18px/109% Roboto;
    color: #000000;
`
const Table = styled.table`
    font:normal normal 14px/105.2% Roboto;
    border-collapse: collapse;
    align-items: left;
    width:100%;
    & tr td{
        padding:6.29px 4.73px 6.86px 21.22px;
    }  
    & tr td:nth-child(odd){
        border-right: 0.5px solid #B1ABAB;
    }
    & tr{
        border-bottom: 0.5px solid #B1ABAB;
    }
    & tr:last-child{
        border-bottom: none;
    }
    & tr:nth-child(odd){
        background: rgba(255, 255, 255, 0.9);    
    }
`
const Back = styled(NavLink)`
    position:absolute;
    bottom: 2.31%;
    font-family:normal normal 10px/12px Roboto;
    display: flex;
    align-items: center;
    text-decoration-line: underline;
    color: #000000;

`

export { Main, NavElement, TitleSimilar, MainSimilar, Text, Img, ImgSimilar, InfoBlock, Title, Information, Table, Back };