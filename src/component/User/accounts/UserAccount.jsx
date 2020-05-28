import React from 'react';
import WatchHistory from '../../WatchHistory/WatchHistory';
import BagReporter from '../BagReporter/BagReporter';
import { connect } from 'react-redux';
import { Row, UserName, Button, NavElement } from './styled';


export class UserAccount extends React.Component {
    state = {
        pageName: 'bagReport'
    }
    logout = () => {
        window.localStorage.clear();
        const { logout } = this.props;
        logout();
    }
    changePage = (evt) => {
        this.setState({
            pageName: evt.target.name
        })
    }

    render() {
        const { pageName } = this.state;
        const { user } = this.props;
        return (
            <div>
                <UserName>{user.login}</UserName>
                <Row>
                    <Button name='story' onClick={this.changePage}>Story</Button>
                    <Button name='bagReport' onClick={this.changePage}>Bag Report</Button>
                    <NavElement to='/'><Button onClick={this.logout} > Logout</Button></NavElement>
                </Row>
                {pageName === 'story' && <WatchHistory />}
                {pageName === 'bagReport' && <BagReporter />}
            </div>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch({
                type: 'USER_LOGOUT'
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserAccount);
