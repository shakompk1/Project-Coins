import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Main = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    & div{
        display:flex;
        flex-direction:column;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content:center;
        align-items:center;
    }
`
const Title = styled.h2`
    font:normal 500 28px/100% Roboto;
    display: flex;
    margin-bottom:20px;
    align-items: center;
    color: #000000;
`
const NavElement = styled(NavLink)`
    margin-bottom:20px;
    font:normal 300 14px/109% Roboto;
    color: #000000;
`
const Block = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-around;
`
const Img = styled.img`
    width: 214px;
    height: 214px;
`
export { Main, Block, Title, NavElement, Img }