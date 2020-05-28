import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Menu } from '@styled-icons/entypo/Menu';

const Main = styled.div`
    heigth:250px;
    padding:10px;
    display:flex;
    justify-content:space-between;
    align-items:center;
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
const activeClassName = 'active';

const User = styled(NavLink).attrs({
    activeClassName: activeClassName,
})`
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
    &.${activeClassName} {
        color: #833AE0;
    }
`

const NavElement = styled(NavLink).attrs({
    activeClassName: activeClassName,
})`
    height: 24px;
    display: flex;
    margin:2px 20px;
    align-items: center;
    font:normal normal 20px/24px Roboto;
    text-align: center;
    color: #000000;
    text-decoration:none;
    &:hover{
    text-align: center;
    text-decoration:underline;
    color: #833AE0;
    }
    @media (max-width: 768px) {
        width: auto;
    }
    &.${activeClassName} {
        color: #833AE0;
    }
`
const HamburgerIcon = styled(Menu)`
    width:30px;
    display:none;
    @media (max-width: 768px) {
        display:block;
    }
`
const HamburgerMenu = styled.div`
    width:60%;
    display:flex;
    justify-content:space-between;
    @media (max-width: 768px) {
        flex-direction:column;
        justify-content:center;
        align-items:center;
    } @media (min-width: 768px) {
        display:flex !important;
    }
`
export { Main, HamburgerMenu, HamburgerIcon, Title, User, NavElement };