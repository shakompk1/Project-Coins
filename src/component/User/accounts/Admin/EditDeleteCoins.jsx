import React from 'react';
import ReactLoading from 'react-loading';
import { connect } from 'react-redux';
import { getDataServer, findDataServer, deleteDataServer } from '../../../ServerRequests/request';
import { Main, FindBlock, SearchInput, FindButton, CoinsBlock, Img, InfoBlock, Text, Title, Button, NavElement } from './adminstyled';

export class EditDeleteCoins extends React.Component {
    state = {
        value: {
            nameInformation: '',
        },
        loading: true
    }
    componentDidMount() {
        getDataServer()
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
        const { coins } = this.props;
        const { nameInformation, loading } = this.state;
        const coinsBlock = coins.length >= 0 ? coins.map(item => {
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
        }) : null;
        return (
            <div>
                {loading ? <ReactLoading type='spin' color='#843AE0' height={'5%'} width={'5%'} /> : null}
                <FindBlock>
                    <SearchInput key={1} name='nameInformation' value={nameInformation} onChange={(evt) => { this.setState({ value: { [evt.target.name]: evt.target.value } }) }} placeholder="Search" />
                    <FindButton onClick={this.findCoins} >Search</FindButton>
                </FindBlock>
                <Main>
                    {coinsBlock}
                </Main>
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
export default connect(mapStateToProps, mapDispatchToProps)(EditDeleteCoins);