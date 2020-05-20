import React from 'react';
import { Main, Img, InfoBlock, Title, Information, Table, Back } from './styled';

class CoinsPage extends React.Component {
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
    render() {
        const { data } = this.props.location.state;
        let id = 0;
        return (
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
        )
    }
}
export default CoinsPage;