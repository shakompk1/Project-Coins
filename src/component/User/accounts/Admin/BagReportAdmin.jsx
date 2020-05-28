import React from 'react';
import { getBagReportServer } from '../../../ServerRequests/request';
import { Main, InfoBlock, Title, Text } from './adminstyled';

class BagReportAdmin extends React.Component {
    state = {
        data: []
    }
    componentDidMount() {
        getBagReportServer()
            .then(res => {
                this.setState({
                    data: res
                })
            })
    }
    render() {
        const { data } = this.state;
        const info = data.map(item => {
            return (
                <InfoBlock key={item.id}>
                    <Title>{item.name}</Title>
                    <Text>{item.text}</Text>
                </InfoBlock>
            )
        }).reverse()
        return (
            <Main>{info}</Main>
        )
    }
}
export default BagReportAdmin;