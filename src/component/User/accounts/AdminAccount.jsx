import React from 'react';
import { connect } from 'react-redux';
import { getDataServer, findDataServer, deleteDataServer, waitreqDataServer } from '../../ServerRequests/request';
import { Main, FindBlock, Row, SearchInput, FindButton, UserName, CoinsBlock, Img, InfoBlock, Text, Title, Button, NavElement } from './adminstyled';

export class AdminAccount extends React.Component {
    state = {
        value: {
            nameInformation: '',
        },
        adminPanel: true,
        waitReq: []
    }
    componentDidMount() {
        getDataServer()
            .then(res => {
                const { menuLoaded } = this.props;
                menuLoaded(res)
            })
        waitreqDataServer('false')
            .then(res => {
                console.log(res)
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
    render() {
        const { nameInformation, adminPanel } = this.state;
        const { user, coins } = this.props;
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
                    <Button onClick={() => this.deleteCoins(item.id)}>Delete</Button>
                </CoinsBlock>
            )
        })
        return (
            <div>
                <UserName>{user.login}</UserName>
                {user.rol === 'admin' ?
                    [<FindBlock>
                        <button onClick={() => this.setState({ adminPanel: true })} >Update Coins</button>
                        <button onClick={() => this.setState({ adminPanel: false })} > Сoin Request</button>
                    </FindBlock>,
                    adminPanel ?
                        [<Row key={1}>
                            <FindBlock>
                                <SearchInput key={1} name='nameInformation' value={nameInformation} onChange={(evt) => { this.setState({ value: { [evt.target.name]: evt.target.value } }) }} placeholder="Search" />
                                <FindButton onClick={this.findCoins} >Search</FindButton>
                            </FindBlock>
                        </Row>,
                        <Main key={2}>
                            {coinsBlock}
                        </Main>] : <div>hello</div>]
                    : <p>You dont have accses</p>
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
        menuLoaded: (newCoins) => {
            dispatch({
                type: 'MENU_LOADED',
                payload: newCoins
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminAccount);