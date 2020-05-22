import styled from 'styled-components';

const Main = styled.div`
    display:flex;
    justify-content:flex-start;
    flex-wrap:wrap;
    padding:25px 0;
    @media (max-width: 900px) {
        justify-content:center;
      }
`
const NavElement = styled.div`
    min-width:300px;
    width:50%;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    align-items:center;
    text-decoration:none;
`
const TotalPrice = styled.h1`
      color: #833AE0;
      padding:10px 0;
`
const Img = styled.img`
    margin:0 10px;
    width: 120px;
    height: 120px;
`
const InfoBlock = styled.div`
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
`
const Title = styled.h2`
    margin:2px 0;    
    width: 300px;
    height: 20px;
    font:normal bold 16px/19px Roboto;
    color: #833AE0;
    @media (max-width: 768px) {
        text-align:center;
      }
`
const Text = styled.p`
    margin:2px 0; 
    width: 300px;
    font:normal normal 12px  Roboto;
    color: #000000;
`
const Price = styled.p`
    margin:2px 0;
    width: 300px;
    font:normal normal 24px Roboto;
    color: #833AE0;
`
const Button = styled.button`
    width: 120px;
    height: 48px;
    background: #E5E5E5;
    border:none;
    cursor:pointer;
    &:hover{
        background: #833AE0; 
        color: #FFFFFF;
    }
`
export { Main, NavElement, Img, InfoBlock, Text, Price, Title, Button, TotalPrice }