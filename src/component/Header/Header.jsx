import React from 'react';
import { connect } from 'react-redux';
import { Main, HamburgerMenu, HamburgerIcon, Title, User } from './styled';
import NavBar from './NavBar';

export class Header extends React.Component {
    state = {
        hamburgerMenuStatus: false,
    }
    render() {
        const { user } = this.props;
        const { hamburgerMenuStatus } = this.state;
        return (
            <div>
                <Main>
                    <Title>Coins Store</Title>
                    <HamburgerIcon onClick={() => { this.setState({ hamburgerMenuStatus: !hamburgerMenuStatus }) }} />
                    <HamburgerMenu style={{ display: hamburgerMenuStatus ? 'flex' : 'none' }}>
                        <NavBar />
                        {user ? <User to={user.rol === 'admin' ? '/account/admin' : '/account/user'}>{user.login}</User> : <User to='/login'>Login</User>}
                    </HamburgerMenu>
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