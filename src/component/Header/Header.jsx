import React from 'react';
import { connect } from 'react-redux';
import { Main, Title, User } from './styled';
import NavBar from './NavBar';

export class Header extends React.Component {
    render() {
        const { user } = this.props;
        return (
            <div>
                <Main>
                    <Title>Coins Store</Title>
                    <NavBar />
                    {user ? <User to={user.rol === 'admin' ? '/account/admin' : '/account/user'}>{user.login}</User> : <User to='/login'>Login</User>}
                </Main>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Header);