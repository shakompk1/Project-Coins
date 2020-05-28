import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Main = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    flex-wrap:wrap;
    padding:25px 0;
    @media (max-width: 900px) {
        justify-content:center;
      }
`
const FindBlock = styled.div`
    display:flex;
`
const FindButton = styled.button`
    width: 120px;
    height: 48px;
    background: #833AE0;
    font:normal normal 14px/16px Roboto;
    text-align: center;
    color: #FFFFFF;
    border:none;
    margin-left:30px;
`
const Row = styled.div`
    display:flex;
    flex-direction:column;
`
const SearchInput = styled.input`
    min-width:250px;
    width: 374px;
    height: 48px;
    font-size:30px;
    border: 1px solid #000000;
    box-sizing: border-box;
`

const UserName = styled.div`
    font:normal 300 50px/59px Roboto;
    text-align:center;
    padding:50px;
    color: #000000;
`
const CoinsBlock = styled.div`
    min-width:300px;
    width:60%;
    margin:5px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    align-items:center;
    text-decoration:none;
`

const Img = styled.img`
    width: 120px;
    height: 120px;
    @media (max-width: 768px) {
        margin:0 auto;
      }
`
const InfoBlock = styled.div`
`

const Title = styled.h2`
    width: 300px;
    height: 20px;
    font:normal bold 16px/19px Roboto;
    color: #833AE0;
    @media (max-width: 768px) {
        text-align:center;
      }
`
const Text = styled.p`
    width: 300px;
    font:normal normal 12px/125.5% Roboto;
    color: #000000;
`
const NavElement = styled(NavLink)`
    width: 120px;
    height: 48px;
    font:normal normal 14px/16px Roboto;
    display: flex;
    align-items: center;
    justify-content:center;
    text-decoration:none;
    text-align: center;
    color: #000000;
    background: #E5E5E5;
    cursor:pointer;
    &:hover{
        background: #833AE0; 
        color: #FFFFFF;
    }
`
const Button = styled.button`
    width: 120px;
    height: 48px;
    font:normal normal 14px/16px Roboto;
    background: #E5E5E5;
    color: #000000;
    border:none;
    cursor:pointer;
    &:hover{
        background: #833AE0; 
        color: #FFFFFF;
    }
`
export { Main, FindBlock, Row, SearchInput, FindButton, UserName, CoinsBlock, Img, InfoBlock, Text, Title, NavElement, Button }