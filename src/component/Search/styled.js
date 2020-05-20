import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Main = styled.div`
    position:relative;
    margin:10px 0;
`
const FindBlock = styled.div`
    display:flex;
`
const SearchInput = styled.input`
    min-width:250px;
    width: 374px;
    height: 48px;
    font-size:30px;
    border: 1px solid #000000;
    box-sizing: border-box;
`

const NavElement = styled(NavLink)`
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
const FilterButton = styled.button`
    width: 200px;
    height: 15px;
    font:normal 300 14px/109% Roboto;
    text-decoration-line: underline;
    text-align:left;
    margin:8px 0;
    color: #000000;
    border:none;
    background:none;

`
const FilterBlock = styled.div`
    display:flex;
    position:absolute;
    background:#A9A9A9;
    padding:10px;
`
const Row = styled.div`
    display:flex;
    flex-direction:column;
`
const Select = styled.select`
    width: 250px;
    height: 30px;
    margin:5px 40px 5px 0;
    border: 1px solid #000000;
    box-sizing: border-box;
`
const TypeInput = styled.input`
    width: 150px;
    height: 30px;
    margin:5px 7px ;
    border: 1px solid #000000;
    box-sizing: border-box;
`
export { Main, FindBlock, SearchInput, NavElement, FindButton, FilterButton, FilterBlock, Row, Select, TypeInput };