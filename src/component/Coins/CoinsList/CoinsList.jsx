import React from 'react';
import ReactLoading from 'react-loading';
import { connect } from 'react-redux';
import { getDataServer } from '../../ServerRequests/request';
import Search from '../../Search/Search';
import { Main, NavElement, Img, InfoBlock, Text, Title } from './styled';

export class CoinsList extends React.Component {
    state = {
        loading: true
    }
    componentDidMount() {
        if (this.props.location.state) {
            const { type } = this.props.location.state;
            if (type) {
                getDataServer(type)
                    .then(res => {
                        const { menuLoaded } = this.props;
                        menuLoaded(res)
                        this.setState({
                            loading: false
                        })
                    })
            }
            else {
                this.setState({
                    loading: false
                })
            }
        }
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
    render() {
        const { loading } = this.state;
        const { coins } = this.props;
        const coinsBlock = coins.map(item => {
            const text = this.shortinfo(item.information)
            return (
                <NavElement to={{ pathname: "/coins/page", state: { data: item } }} key={item.id}>
                    <Img alt="coins" src={item.imgFrontUrl} />
                    <InfoBlock>
                        <Title>{item.name}</Title>
                        <Text>{text}...</Text>
                    </InfoBlock>
                </NavElement>
            )
        })
        return (
            <div>
                <Search />
                {loading ? <ReactLoading type='spin' color='#843AE0' height={'10%'} width={'10%'} />
                    : <Main>{coinsBlock}</Main>}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
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
export default connect(mapStateToProps, mapDispatchToProps)(CoinsList);
