import React from 'react';
import { message } from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { Main, Accep, OpenPage, Row, Input, LoginButton, Registration } from './styled';
import { loginDataServer, reqisDataServer } from '../../ServerRequests/request';

export class Login extends React.Component {
    state = {
        login: '',
        pass: '',
        registration: true
    }
    componentDidMount() {
        window.localStorage.clear();
    }
    addValue = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    login = () => {
        const { login, pass, registration } = this.state;
        if (registration) {
            loginDataServer(login, pass)
                .then(res => {
                    if (res) {
                        const { userLoad } = this.props;
                        window.localStorage.setItem('access_token', res.token);
                        window.localStorage.setItem('rol', res.rol);
                        window.localStorage.setItem('login', res.login);
                        userLoad(res)
                    } else {
                        message.error('Wrong Login or Pass');
                    }
                })
        } else {
            reqisDataServer(login, pass)
                .then(res => {
                    if (res) {
                        message.success('Registration was successful');
                        this.setState({ registration: false })

                    } else {
                        message.warning('Change Login');
                    }
                })
        }
    }
    render() {
        const { login, pass, registration } = this.state;
        const { user } = this.props;
        return (
            <Main>
                {user ?
                    <div>
                        <Accep>Access-Accep</Accep>
                        <OpenPage to='/'>Open Coins</OpenPage >
                    </div>
                    :
                    <Main>
                        {registration ? <div>
                            <Row>
                                <label htmlFor="login">Login</label>
                                <Input name='login' value={login} onChange={this.addValue} type='text' id='login' />
                            </Row>
                            <Row>
                                <label htmlFor="pass">Password</label>
                                <Input name='pass' value={pass} onChange={this.addValue} type='password' id='pass' />
                            </Row>
                            <Row>
                                <LoginButton onClick={this.login}>Sign in</LoginButton>
                            </Row>
                            <Row>
                                <p>Don't have an account  ?/<Registration onClick={() => { this.setState({ registration: false }) }}>  Registration</Registration></p>
                            </Row>
                        </div> :
                            <div>
                                <Row>
                                    <label htmlFor="login">Login</label>
                                    <Input name='login' value={login} onChange={this.addValue} type='text' id='login' />
                                </Row>
                                <Row>
                                    <label htmlFor="pass">Password</label>
                                    <Input name='pass' value={pass} onChange={this.addValue} type='password' id='pass' />
                                </Row>
                                <Row>
                                    <LoginButton onClick={this.login}>Registration</LoginButton>
                                    <p><Registration onClick={() => { this.setState({ registration: true }) }}>  Back</Registration></p>
                                </Row>
                            </div>
                        }
                    </Main>
                }

            </Main>
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
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);