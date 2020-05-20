import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Main = styled.div`
    font-family:Roboto;
    background:white;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%;
    margin:5px 0;
    height:100vh;
`
const Row = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
const Input = styled.input`
    width: 374px;
    height: 48px;
    font-size:25px;
    margin:10px;
    border: 1px solid #000000;
    box-sizing: border-box;
`
const LoginButton = styled.button`
    width: 120px;
    height: 48px;
    background: #833AE0;
    color: #000000;
    background: #E1E1E1;
    border:none;
    cursor:pointer;
    &:hover{
        background: #833AE0; 
        color: #FFFFFF;
    }
`
const Registration = styled.span`
    color: #833AE0;
    cursor:pointer;
`
const Accep = styled.p`
    font-family:normal 500 30px/109% Roboto;
    color: #000000;
`
const OpenPage = styled(NavLink)`
    font-family:normal 500 30px/109% Roboto;
    color: #000000;
`
export { Main, Accep, OpenPage, Row, Input, LoginButton, Registration };