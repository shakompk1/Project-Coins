import styled from 'styled-components';

const Main = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    font:normal 500 16px/109% Roboto;
    color:#000;
`
const Input = styled.input`
    width:20%;
    margin:20px auto;
    font-size:20px;
`
const Text = styled.textarea`
    width:50%;
    height:250px;
    resize: none;
    border: 1px solid #000000;
    box-sizing: border-box;
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
export { Main, Input, Text, Button }