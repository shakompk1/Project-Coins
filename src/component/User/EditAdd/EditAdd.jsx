import React from 'react';
import { connect } from 'react-redux';
import { updateDataServer, addDataServer } from '../../ServerRequests/request';
import { Main, InfoBlock, NavElement, MainElement, Row, Label, Input, Select, TextArea, Button } from './styled';

export class EditAdd extends React.Component {
    state = {
        value: {
            id: this.props.location.state.data.id,
            name: this.props.location.state.data.name,
            date: this.props.location.state.data.date,
            price: this.props.location.state.data.price,
            country: this.props.location.state.data.country,
            composition: this.props.location.state.data.composition,
            information: this.props.location.state.data.information,
            denomination: this.props.location.state.data.denomination,
            quality: this.props.location.state.data.quality,
            weight: this.props.location.state.data.weight,
            imgFrontUrl: this.props.location.state.data.imgFrontUrl,
            imgBackUrl: this.props.location.state.data.imgBackUrl,
            type: this.props.location.state.data.type
        },
        action: this.props.location.state.action,
        saveStatus: undefined
    }
    addValue = (evt) => {
        this.setState({
            value: { ...this.state.value, [evt.target.name]: evt.target.value }
        });
    }
    manipulateCoin = () => {
        const { value, action } = this.state;
        const { user } = this.props;
        const status = (value.name !== '' && value.date !== '' && value.price !== '' && value.country !== '' && value.composition !== '' && value.information !== '' && value.denomination !== '' && value.quality !== '' && value.weight !== '' && value.imgBackUrl !== '' && value.imgFrontUrl !== '')
        if (status) {
            if (action === 'edit') {
                updateDataServer(value, user)
                    .then((res) => {
                        this.setState({ saveStatus: res });
                    })
            } else if (action === 'add') {
                addDataServer(value, user)
                    .then((res) => {
                        this.setState({ saveStatus: res });
                    })
            }
        } else {
            alert('Заполните все поля')
        }
    }
    render() {
        const { value, saveStatus, action } = this.state;
        return (
            <Main>
                {saveStatus ? <InfoBlock>
                    <p>{+saveStatus === 4 ? 'Accept' : 'Error'}</p>
                    {+saveStatus === 4 ? <NavElement to='/account/admin'>Back</NavElement> : <Button onClick={() => this.setState({ saveStatus: 0 })}>Ok</Button>}
                </InfoBlock> : null}
                <MainElement>
                    <Row>
                        <Label htmlFor="">Coin name</Label>
                        <Input name='name' value={value.name} onChange={this.addValue} type="text" />
                    </Row>
                    <Row>
                        <Label htmlFor="">Face Value</Label>
                        <Input name='denomination' value={value.denomination} onChange={this.addValue} type="text" />
                    </Row>
                    <Row>
                        <Label htmlFor="">Year of Issue</Label>
                        <Input name='date' value={value.date} onChange={this.addValue} type="number" />
                    </Row>
                    <Row>
                        <Label htmlFor="">Price $</Label>
                        <Input name='price' value={value.price} onChange={this.addValue} type="number" />
                    </Row>
                    <Row>
                        <Label htmlFor="">Country</Label>
                        <Input name='country' value={value.country} onChange={this.addValue} type="text" />
                    </Row>
                    <Row>
                        <Label htmlFor="">Metal</Label>
                        <Input name='composition' value={value.composition} onChange={this.addValue} type="text" />
                    </Row>
                </MainElement>
                <MainElement>
                    <Row>
                        <Label htmlFor="">Description</Label>
                        <TextArea name="information" value={value.information} onChange={this.addValue} id="" cols="30" rows="10"></TextArea>
                    </Row>
                    <Row>
                        <Label htmlFor="">Quality of the coin</Label>
                        <Input name='quality' value={value.quality} onChange={this.addValue} type="text" />
                    </Row>
                    <Row>
                        <Label htmlFor="">Weigth</Label>
                        <Input name='weight' value={value.weight} onChange={this.addValue} type="text" />
                    </Row>
                    <Row>
                        <Label htmlFor="">Type</Label>
                        <Select name="type" value={value.type} onChange={this.addValue}>
                            <option value='Memorable'>Memorable</option>
                            <option value='Investment'>Investment</option>
                            <option value='Exclusive'>Exclusive</option>
                        </Select>
                    </Row>
                </MainElement>
                <MainElement>
                    <Row>
                        <Label htmlFor="">Front</Label>
                        <Input name='imgBackUrl' value={value.imgBackUrl} onChange={this.addValue} type="text" />
                        <Label htmlFor="">Back</Label>
                        <Input name='imgFrontUrl' value={value.imgFrontUrl} onChange={this.addValue} type="text" />
                    </Row>
                    <Row>
                        <Button onClick={this.manipulateCoin}>Save</Button>
                        {action === 'edit' ? <NavElement to='/account/admin'>Cancel</NavElement> : <NavElement to='/'>Cancel</NavElement>}
                    </Row>
                </MainElement>
            </Main>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(EditAdd);