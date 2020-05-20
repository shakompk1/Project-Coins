import React from 'react';
import { Main, NavElement } from './styled';

const item = {
    id: '',
    name: '',
    yearIssue: '',
    price: '',
    country: '',
    composition: '',
    information: '',
    denomination: '',
    quality: '',
    weight: '',
    type: 'Memorable',
    imgFrontUrl: '',
    imgBackUrl: ''
}
class NavBar extends React.Component {
    render() {
        return (
            <Main>
                <NavElement to={'/'}>Coins</NavElement>
                <NavElement to={'/stock'}>Stock</NavElement>
                <NavElement to={{ pathname: "/coins/add", key: 2, state: { data: item, action: 'add' } }} > Add Coins</NavElement>
            </Main >
        )
    }
}
export default NavBar