import React from 'react';
import { connect } from 'react-redux';
import EditDeleteCoins from './Admin/EditDeleteCoins';
import RequestWait from './Admin/RequestWait';
import BagReportAdmin from './Admin/BagReportAdmin';
import { UserName, Button, NavElement } from './styled';

export class AdminAccount extends React.Component {
    state = {
        adminPanel: 'edit'
    }
    logout = () => {
        window.localStorage.clear();
        const { logout } = this.props;
        logout();
    }
    render() {
        const { adminPanel } = this.state;
        const { user } = this.props;
        return (
            <div>
                <UserName>{user.login}</UserName>
                {user.rol === 'admin' ?
                    [<div key={'find'}>
                        <Button onClick={() => this.setState({ adminPanel: 'edit' })} >Update Coins</Button>
                        <Button onClick={() => this.setState({ adminPanel: 'request' })} > Сoin Request</Button>
                        <Button onClick={() => this.setState({ adminPanel: 'report' })} > Bag Report</Button>
                        <NavElement to='/'><Button onClick={this.logout} > Logout</Button></NavElement>
                    </div>,
                    <div key={'element'}>
                        {adminPanel === 'edit' && <EditDeleteCoins key={'edit'} />}
                        {adminPanel === 'request' && <RequestWait key={'access'} />}
                        {adminPanel === 'report' && <BagReportAdmin />}
                    </div>]
                    : <p >You dont have accses</p>
                }
            </div>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        user: state.user,
        coins: state.coins
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
export default connect(mapStateToProps, mapDispatchToProps)(AdminAccount);