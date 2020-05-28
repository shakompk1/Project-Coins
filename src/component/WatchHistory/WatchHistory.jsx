import React from 'react';
import { connect } from 'react-redux';
import { Main, NavElement, Img, Title, Text, InfoBlock } from './styled';

export class WatchHistory extends React.Component {
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
        const { history } = this.props;
        const blockCoins = history.map(item => {
            const text = this.shortinfo(item.information)
            return (
                <NavElement to={{ pathname: `/coins/page/${item.id}` }} key={item.id}>
                    <Img alt="coins" src={item.imgFrontUrl} />
                    <InfoBlock>
                        <Title>{item.name}</Title>
                        <Text>{text}</Text>
                    </InfoBlock>
                </NavElement>
            )
        }).reverse()
        return (
            <Main>
                {blockCoins}
            </Main>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        history: state.history
    }
}

export default connect(mapStateToProps)(WatchHistory);