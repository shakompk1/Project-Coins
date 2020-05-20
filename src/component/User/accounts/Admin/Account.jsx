import React from 'react';
import { connect } from 'react-redux';
import { getDataServer, findDataServer, deleteDataServer, waitreqDataServer } from '../../ServerRequests/request';
import { Main, FindBlock, Row, SearchInput, FindButton, UserName, CoinsBlock, Img, InfoBlock, Text, Title, Button, NavElement } from './adminstyled';

export class Account extends React.Component {
    componentDidMount() {
        getDataServer()
            .then(res => {
                const { menuLoaded } = this.props;
                menuLoaded(res)
            })
    }
    render() {
        return (
            <div></div>
        )
    }
    shortinfo = (value) => {
        const text = value;
        let newText = '';
        for (let i = 0; i < text.length; i++) {
            if (i > 150) {
                break
            }
            newText += text[i];
        }
        return newText;
    }
    deleteCoins = (value) => {
        const { user } = this.props;
        deleteDataServer(value, user)
            .then(res => {
                const { menuLoaded } = this.props;
                menuLoaded(res)
            })
    }
    findCoins = () => {
        const { value } = this.state;
        if (value) {
            findDataServer(value)
                .then(res => {
                    const { menuLoaded } = this.props;
                    menuLoaded(res)
                })
        }
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
        menuLoaded: (newCoins) => {
            dispatch({
                type: 'MENU_LOADED',
                payload: newCoins
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Account);