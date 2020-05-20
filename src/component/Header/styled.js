import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Main = styled.div`
    heigth:250px;
    padding:10px;
    display:flex;
    justify-content:space-between;
    align-items:flex-end;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content:center;
        align-items:center;
    }
`
const Title = styled.div`
    min-width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    font:normal 300 50px/59px Dancing Script, cursive;;
    color: #000000;
`
const User = styled(NavLink)`
    width: 115px;
    display: flex;
    align-items: center;   
    font:normal 300 20px/109% Roboto;
    background:#fff;
    padding:10px;
    outline:none;
    border:1px solid block;
    border-shadow:none;
    border-radius:25px;
    text-align: right;
    text-decoration: none;
    color:#000;
    &:hover{
        text-decoration:underline;
        color: #833AE0;
    }  
`
const NavElement = styled(NavLink)`
    width: 115px;
    height: 24px;
    display: flex;
    margin:2px;
    align-items: center;
    font:normal normal 20px/24px Roboto;
    text-align: center;
    color: #000000;
    text-decoration:none;
    &:hover{
    text-align: center;
    text-decoration:underline;
    color: #833AE0;
    @media (max-width: 768px) {
        width: auto;
    }
}
`
export { Main, Title, User, NavElement };