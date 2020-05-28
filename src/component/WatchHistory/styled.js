import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Main = styled.div`
    display:flex;
    justify-content:flex-start;
    flex-wrap:wrap;
    padding:25px 0;
    @media (max-width: 900px) {
        justify-content:center;
    }
`
const NavElement = styled(NavLink)`
    min-width:300px;
    width:50%;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    text-decoration:none;
    
`
const Img = styled.img`
    width: 120px;
    height: 120px;
    margin-right:50px;
`
const InfoBlock = styled.div`
`
const Title = styled.h2`
    font:normal bold 28px/19px Roboto;
    color: #833AE0;
    text-align:center;
    margin:10px auto;
`
const Text = styled.p`
    width: 300px;
    height: 95px;
    font:normal normal 12px/125.5% Roboto;
    color: #000000;
`
export { Main, NavElement, Img, InfoBlock, Text, Title }