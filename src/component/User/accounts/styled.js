import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const UserName = styled.div`
    font:normal 300 50px/59px Roboto;
    text-align:center;
    padding:50px;
    color: #000000;
`
const Row = styled.div`
    display:flex;
`
const Button = styled.button`
    width: 120px;
    height: 48px;
    background: #E5E5E5;
    border:none;
    margin:5px 25px;
    cursor:pointer;
    &:hover{
        background: #833AE0; 
        color: #FFFFFF;
    }
`
const NavElement = styled(NavLink)`
    color: #000000
`
export { UserName, Button, Row, NavElement }