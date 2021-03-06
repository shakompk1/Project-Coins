import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';
import './style.css';
import Header from './component/Header/Header';
import Login from './component/User/Login/Login';
import UserAccount from './component/User/accounts/UserAccount';
import AdminAccount from './component/User/accounts/AdminAccount';
import EditAdd from './component/User/EditAdd/EditAdd';
import CoinsMain from './component/Coins/CoinsMain/CoinsMain';
import CoinsList from './component/Coins/CoinsList/CoinsList';
import CoinsPage from './component/Coins/CoinsPage/CoinsPage';
import Stock from './component/Stock/Stock';

export class App extends React.Component {
    componentDidMount() {
        const user = {
            login: window.localStorage.getItem('login'),
            token: window.localStorage.getItem('access_token'),
            rol: window.localStorage.getItem('rol')
        }
        const { userLoad, historyAdd } = this.props;
        if (user.login) { userLoad(user) };
        const watchStory = window.localStorage.getItem('watchStory')
        if (watchStory) {
            const story = JSON.parse(watchStory);
            historyAdd(story);
        }
    }

    render() {
        return (
            <Router>
                <Header />
                <Switch>
                    <Route path='/login' component={Login} />
                    <Route exact path='/' component={CoinsMain} />
                    <Route path='/stock' component={Stock} />
                    <Route path='/account/user' component={UserAccount} />
                    <Route path='/account/admin' component={AdminAccount} />
                    <Route key={1} path='/coins/update' render={props => (<EditAdd {...props} />)} />
                    <Route key={2} path='/coins/add' render={props => (<EditAdd {...props} />)} />
                    <Route key={1} path='/coins/list' render={props => (<CoinsList {...props} />)} />
                    <Route key={2} path='/coins/find' render={props => (<CoinsList {...props} />)} />
                    <Route path='/coins/page/:id' component={CoinsPage} />
                </Switch>
            </Router>
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
        userLoad: (User) => {
            dispatch({
                type: 'USER_LOGIN',
                payload: User
            })
        },
        historyAdd: (newCoins) => {
            dispatch({
                type: 'HISTORY_LOADED',
                payload: newCoins
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);