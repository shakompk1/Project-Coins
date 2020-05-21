import React from 'react';
import { Main, NavElement, Text, ImgSimilar, MainSimilar, Img, InfoBlock, Title, TitleSimilar, Information, Table, Back } from './styled';
import { connect } from 'react-redux';
import { findDataServer } from '../../ServerRequests/request';

export class CoinsPage extends React.Component {
    state = {
        similar: []
    }
    componentDidMount() {
        const { historyAdd } = this.props;
        const { data } = this.props.location.state;
        historyAdd(data)
        const value = {
            composition: data.composition,
            priceFrom: data.price - 50,
            priceTo: data.price + 50,
        }
        findDataServer(value)
            .then(res => {
                this.setState({
                    similar: res
                })
            })
    }
    creatParagraph = () => {
        const { data } = this.props.location.state;
        let text = '';
        const allText = [];
        for (let i = 0; i < data.information.length; i++) {
            if (data.information[i] === '\n') {
                allText.push(text)
                text = ''
            }
            text += data.information[i]
        }
        return allText;
    }
    openNewPage = (data) => {
        const { historyAdd } = this.props;
        historyAdd(data)
        const value = {
            composition: data.composition,
            priceFrom: data.price - 50,
            priceTo: data.price + 50,
        }
        findDataServer(value)
            .then(res => {
                this.setState({
                    similar: res
                })
            })
        this.backToTop()
    }
    backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -80);
            this.backToTop();
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
        const { data } = this.props.location.state;
        const { similar } = this.state;
        let id = 0;
        const similarCoins = similar.map(item => {
            const text = this.shortinfo(item.information)
            if (item.id !== data.id) {
                return (
                    <NavElement onClick={() => this.openNewPage(item)} to={{ pathname: "/coins/page", state: { data: item } }} key={item.id}>
                        <ImgSimilar alt="coins" src={item.imgFrontUrl} />
                        <div>
                            <TitleSimilar>{item.name}</TitleSimilar>
                            <Text>{text}...</Text>
                        </div>
                    </NavElement>
                )
            } else {
                return [];
            }
        })
        return (
            <div>
                <Main>
                    <div>
                        <Img src={data.imgFrontUrl} alt={data.name} />
                        <Img src={data.imgBackUrl} alt={data.name} />
                    </div>
                    <InfoBlock>
                        <Title>{data.name}</Title>
                        {this.creatParagraph(data.information).map(res => <Information key={id++}>{res}</Information>)}
                        <Table>
                            <tbody>
                                <tr><td>Issuing Country</td><td>{data.country}</td></tr>
                                <tr><td>Composition</td><td>{data.composition}</td></tr>
                                <tr><td>Quality</td><td>{data.quality}</td></tr>
                                <tr><td>Denomination</td><td>{data.denomination}</td></tr>
                                <tr><td>Year</td><td>{data.date}</td></tr>
                                <tr><td>Weight</td><td>{data.weight}</td></tr>
                                <tr><td>Price</td><td>{data.price}$</td></tr>
                            </tbody>
                        </Table>
                        <Back to={{ pathname: '/coins/list', state: { type: undefined } }}>Back to the list</Back>
                    </InfoBlock>
                </Main >
                <MainSimilar>{similarCoins}</MainSimilar>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        historyAdd: (newCoins) => {
            dispatch({
                type: 'HISTORY_LOADED',
                payload: newCoins
            })
        }
    }
}
export default connect(null, mapDispatchToProps)(CoinsPage);