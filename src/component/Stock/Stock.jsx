import React from 'react';
import { connect } from 'react-redux';
import { notification } from 'antd';
import { Main, NavElement, Img, InfoBlock, Text, Price, Title, Button, TotalPrice } from './styled';

export class Stock extends React.Component {
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
    buyStock = (value) => {
        const { addStock } = this.props;
        addStock(value);
        const number = Math.floor(Math.random() * Math.floor(100));
        notification.open({
            message: 'The purchase was successful',
            description:
                `Contact the number + 994518747399, introduce yourself and tell me your order number ${number}`,
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    }
    deleteStock = (value) => {
        const { deleteStock } = this.props;
        deleteStock(value);
        notification.open({
            message: 'Товар был удален',
            description:
                `Ваш товар был удаленн и списка`,
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    }
    render() {
        const { stock } = this.props;
        let price = 0;
        const CoinsBlock = stock.map(item => {
            price += item.price;
            const text = this.shortinfo(item.information)
            return (
                <NavElement key={item.id}>
                    <Img alt="coins" src={item.imgFrontUrl} />
                    <InfoBlock>
                        <Title>{item.name}</Title>
                        <Text>{text}...</Text>
                        <Price>Price: {item.price}$</Price>
                    </InfoBlock>
                    <Button onClick={() => this.buyStock(item.id)}>Buy</Button>
                    <Button onClick={() => this.deleteStock(item.id)}>Cancel</Button>
                </NavElement>
            )
        });
        return (
            <div>
                <TotalPrice>Total price:{price}$</TotalPrice>
                <Main>{CoinsBlock}</Main>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        stock: state.stock
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addStock: (buyCoins) => {
            dispatch({
                type: 'BUY_STOCK',
                payload: buyCoins
            })
        },
        deleteStock: (deleteCoins) => {
            dispatch({
                type: 'DELETE_STOCK',
                payload: deleteCoins
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stock);