import React from 'react';
import { connect } from 'react-redux';
import { Main, NavElement } from './styled';

const item = {
    id: '',
    name: '',
    date: '',
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
export class NavBar extends React.Component {
    render() {
        const { user } = this.props;
        return (
            <Main>
                <NavElement to={'/'} exact>Coins</NavElement>
                <NavElement to={`${user ? '/stock' : '/login'}`}>Stock</NavElement>
                <NavElement to={{ pathname: `${user ? '/coins/add' : '/login'}`, key: 2, state: { data: item, action: 'add' } }} > Add Coin</NavElement>
            </Main >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(NavBar);