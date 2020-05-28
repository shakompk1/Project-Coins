import React from 'react';
import { addBagReportServer } from '../../ServerRequests/request';
import { message } from 'antd';
import 'antd/dist/antd.css';
import { Main, Input, Text, Button } from './styled';

class BagReporter extends React.Component {
    state = {
        value: {
            name: '',
            text: ''
        }
    }
    changeValue = (evt) => {
        this.setState({
            value: { ...this.state.value, [evt.target.name]: evt.target.value }
        })
    }
    sendReport = () => {
        const { value } = this.state;
        if (value.text) {
            addBagReportServer(value)
                .then(res => {
                    message.success('Message send');
                    this.setState({
                        value: {
                            name: '',
                            text: ''
                        }
                    })
                })
                .catch(() => {
                    message.error('Something go wrong');
                });
        } else {
            message.error('Text is empty');
        }
    }
    render() {
        return (
            <Main>
                <Input name='name' onChange={this.changeValue} placeholder='Name' />
                <Text name='text' onChange={this.changeValue} placeholder='Bag Report' />
                <Button onClick={this.sendReport}>Send</Button>
            </Main>
        )
    }
}
export default BagReporter;