import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Main = styled.div`
    display:flex;
    justify-content:flex-start;
    flex-wrap:wrap;
    max-width:1020px;
    margin:5px auto;
    overflow:hidden;
    overflow-x:scroll;
    &::-webkit-scrollbar {
        width: 0px;
          }
`
const NavElement = styled(NavLink)`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-decoration:none;
    margin:0 20px;
    
`
const Img = styled.img`
    width: 120px;
    height: 120px;
`
const InfoBlock = styled.div`
`
const Title = styled.h2`
    font:normal bold 28px/19px Roboto;
    color: #833AE0;
    text-align:center;
    margin:10px auto;
`
export { Main, NavElement, Img, InfoBlock, Title }