import React from 'react';
import ReactLoading from 'react-loading';
import { connect } from 'react-redux';
import { waitreqDataServer, deleteDataServer, acceptDataServer } from '../../../ServerRequests/request';
import { CoinsBlock, Img, InfoBlock, Text, Title, Button, NavElement } from './adminstyled';
class RequestWait extends React.Component {
    state = {
        loading: true
    }
    componentDidMount() {
        waitreqDataServer('false')
            .then(res => {
                const { menuLoaded } = this.props;
                menuLoaded(res)
                this.setState({
                    loading: false
                })
            })
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
                waitreqDataServer('false')
                    .then(res => {
                        const { menuLoaded } = this.props;
                        menuLoaded(res)
                        this.setState({
                            loading: false
                        })
                    })
            })
    }
    acceptCoins = (value) => {
        const { user } = this.props;
        acceptDataServer(value, user)
            .then(res => {
                waitreqDataServer('false')
                    .then(res => {
                        const { menuLoaded } = this.props;
                        menuLoaded(res)
                        this.setState({
                            loading: false
                        })
                    })
            })
    }
    render() {
        const { coins } = this.props;
        const { loading } = this.state;
        const coinsBlock = coins.map(item => {
            const text = this.shortinfo(item.information)
            return (
                <CoinsBlock key={item.id}>
                    <Img alt="coins" src={item.imgFrontUrl} />
                    <InfoBlock>
                        <Title>{item.name}</Title>
                        <Text>{text}...</Text>
                    </InfoBlock>
                    <NavElement to={{ pathname: "/coins/update", state: { data: item, action: 'edit' } }} >Edit</NavElement>
                    <Button onClick={() => this.acceptCoins(item.id)}>Accept</Button>
                    <Button onClick={() => this.deleteCoins(item.id)}>Delete</Button>
                </CoinsBlock>
            )
        })
        return (
            <div>{loading ? <ReactLoading type='spin' color='#843AE0' height={'5%'} width={'5%'} /> : null}
                <div>{coinsBlock}</div>
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
        menuLoaded: (newCoins) => {
            dispatch({
                type: 'MENU_LOADED',
                payload: newCoins
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RequestWait);