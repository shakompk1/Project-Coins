import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Main = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    & div:last-child{
        justify-content: space-between;
        & div:last-child{
            display:flex;
            flex-direction:row ;
            justify-content: space-around;
        }
    }
    
`
const InfoBlock = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:30%;
    height:250px;
    background:grey;
    border-radius:50px;
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
`
const Row = styled.div`
    display:flex;
    flex-direction:column;
    margin:10px;
`
const MainElement = styled.div`
    display:flex;
    flex-direction:column;
`
const Label = styled.label`
    font:normal 500 14px/109% Roboto;
    margin:5px 0;
    color: #000000;
`
const Input = styled.input`
    width: 374px;
    height: 48px;
    font-size:36px;
    border: 1px solid #000000;
    box-sizing: border-box;
`
const Select = styled.select`
    width: 374px;
    height: 48px;
    font-size:36px;
    border: 1px solid #000000;
    box-sizing: border-box;
`
const TextArea = styled.textarea`
    resize: none;
    font-size:16px;
    border: 1px solid #000000;
    box-sizing: border-box;
`
const Button = styled.button`
    width: 120px;
    height: 48px;
    font:normal normal 14px/16px Roboto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000000;
    background: #E1E1E1;
    border:none;
    cursor:pointer;
    &:hover{
        background: #833AE0; 
        color: #FFFFFF;
    }
`
const NavElement = styled(NavLink)`
    width: 120px;
    height: 48px;
    font:normal normal 14px/16px Roboto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000000;
    background: #E1E1E1;
    text-decoration:none;
    border:none;
    &:hover{
        background: #833AE0; 
        color: #FFFFFF;
    }
`
export { Main, InfoBlock, NavElement, MainElement, Row, Label, Input, Select, TextArea, Button }