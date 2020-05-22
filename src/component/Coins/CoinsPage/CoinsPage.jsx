import React from 'react';
import { Main, NavElement, Text, ImgSimilar, MainSimilar, Img, InfoBlock, Title, TitleSimilarHeader, TitleSimilar, Information, Table, Row, Back, Button } from './styled';
import { connect } from 'react-redux';
import { findDataServer } from '../../ServerRequests/request';

export class CoinsPage extends React.Component {
    state = {
        similar: []
    }
    componentDidMount() {
        if (this.props.location.state) {
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
    addToStock = (data) => {
        const { stockAdd } = this.props;
        stockAdd(data)
        alert('Товар перенесен в корзину')
    }
    render() {
        const { data } = this.props.location.state ? this.props.location.state : [];
        const { similar } = this.state;
        let id = 0;
        let similarCoins = []
        if (similar) {
            similarCoins = similar.map(item => {
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
        }
        return (
            <div>
                {data ? <div>
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
                            <Row>
                                <Back to={{ pathname: '/coins/list', state: { type: data.type } }}>Back to the list</Back>
                                <Button onClick={() => this.addToStock(data)}>Add</Button>
                            </Row>
                        </InfoBlock>
                    </Main >
                    <TitleSimilarHeader>Similar</TitleSimilarHeader>
                    <MainSimilar>{similarCoins}</MainSimilar>
                </div> : null}
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
        },
        stockAdd: (newStock) => {
            dispatch({
                type: 'ADD_STOCK',
                payload: newStock
            })
        }
    }
}
export default connect(null, mapDispatchToProps)(CoinsPage);