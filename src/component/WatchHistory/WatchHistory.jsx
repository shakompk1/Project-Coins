import React from 'react';
import { connect } from 'react-redux';
import { Main, NavElement, Img, InfoBlock, Title } from './styled';

export class WatchHistory extends React.Component {
    render() {
        const { history } = this.props;
        const blockCoins = history.map(item => {
            return (
                <NavElement to={{ pathname: "/coins/page", state: { data: item } }} key={item.id}>
                    <Title>{item.name}</Title>
                    <InfoBlock>
                        <Img alt="coins" src={item.imgFrontUrl} />
                    </InfoBlock>
                </NavElement>
            )
        }).reverse()
        return (
            <div>
                {blockCoins.length === 0 ? null : <Title>You watched</Title>}
                <Main>
                    {blockCoins}
                </Main>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        history: state.history
    }
}

export default connect(mapStateToProps)(WatchHistory);