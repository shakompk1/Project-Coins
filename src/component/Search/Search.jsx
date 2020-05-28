import React from 'react';
import { connect } from 'react-redux';
import { Main, FindBlock, SearchInput, NavElement, FindButton, FilterButton, FilterBlock, Row, Select, TypeInput } from './styled';
import { findDataServer, takeColumnNameDataServer } from '../ServerRequests/request'

export class Search extends React.Component {
    state = {
        countryColumn: [],
        compositionColumn: [],
        qualityColumn: [],
        value: {
            nameInformation: '',
            country: '',
            composition: '',
            quality: '',
            yearIssueFrom: '',
            yearIssueTo: '',
            priceFrom: '',
            priceTo: ''
        },
        FilterBlockStatus: false
    }

    addValue = (evt) => {
        this.setState({
            value: { ...this.state.value, [evt.target.name]: evt.target.value }
        })
    }
    find = () => {
        const { value } = this.state;
        if (value) {
            findDataServer(value)
                .then(res => {
                    const { menuLoaded } = this.props;
                    menuLoaded(res)
                })
        }
        this.setState({
            FilterBlockStatus: true
        }, () => this.advanceFilterChange())
    }

    advanceFilterChange = () => {
        const { FilterBlockStatus } = this.state;
        this.setState({
            FilterBlockStatus: !FilterBlockStatus
        }, () => this.creatSelectOption())
    }
    creatSelectOption = () => {
        const { FilterBlockStatus } = this.state;
        if (FilterBlockStatus) {
            takeColumnNameDataServer('country')
                .then(res => {
                    this.setState({
                        countryColumn: res
                    })
                });
            takeColumnNameDataServer('composition')
                .then(res => {
                    this.setState({
                        compositionColumn: res
                    })
                });
            takeColumnNameDataServer('quality')
                .then(res => {
                    this.setState({
                        qualityColumn: res
                    })
                })
        } else {
            const { nameInformation } = this.state.value;
            this.setState({
                value: {
                    nameInformation: nameInformation,
                    country: '',
                    composition: '',
                    quality: '',
                    yearIssueFrom: '',
                    yearIssueTo: '',
                    priceFrom: '',
                    priceTo: ''
                }
            })
        }
    }
    render() {
        const { value, FilterBlockStatus, countryColumn, compositionColumn, qualityColumn } = this.state;
        const status = (value.nameInformation || value.country || value.composition || value.quality || value.yearIssueFrom || value.yearIssueTo || value.priceFrom || value.priceTo) ? true : false;
        return (
            <Main>
                <Row>
                    <FindBlock>
                        <SearchInput name='nameInformation' type='search' value={(status) ? value.nameInformation : ''} onChange={this.addValue} placeholder="Search" />
                        <NavElement to={{ pathname: '/coins/find', key: 2, state: { type: undefined, loadingStatus: true } }} ><FindButton onClick={this.find}>Search</FindButton></NavElement>
                    </FindBlock>
                    <FilterButton onClick={this.advanceFilterChange}>Advanced filter <span>></span></FilterButton>
                </Row >
                {FilterBlockStatus ? <FilterBlock>
                    <div>
                        <Row>
                            <label htmlFor="country">Country</label>
                            <Select name='country' id="country" onChange={this.addValue} value={value.country}>
                                <option>Push</option>
                                {countryColumn.length >= 0 ? countryColumn.map(item => <option key={item.country}>{item.country}</option>) : null}
                            </Select>
                        </Row>
                        <Row>
                            <label htmlFor="metal">Mountry</label>
                            <Select name='composition' id="metal" onChange={this.addValue} value={value.composition} >
                                <option>Push</option>
                                {compositionColumn.length >= 0 ? compositionColumn.map(item => <option key={item.composition}>{item.composition}</option>) : null}
                            </Select>
                        </Row>
                        <Row>
                            <label htmlFor="qualityCoin">Quality of the coin</label>
                            <Select name='quality' id="qualityCoin" onChange={this.addValue} value={value.quality} >
                                <option>Push</option>
                                {qualityColumn.length >= 0 ? qualityColumn.map(item => <option key={item.quality}>{item.quality}</option>) : null}
                            </Select>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <label htmlFor="Price">Price</label>
                            <div>
                                <span>from</span>
                                <TypeInput name='priceFrom' value={value.priceFrom} onChange={this.addValue} id='Price' type="number" />
                                <span>to</span>
                                <TypeInput name='priceTo' value={value.priceTo} onChange={this.addValue} id='Price' type="number" />
                            </div>
                        </Row>
                        <Row>
                            <label htmlFor="YearIssue">Year of issue</label>
                            <div>
                                <span>from</span>
                                <TypeInput name='yearIssueFrom' value={value.yearIssueFrom} onChange={this.addValue} id='YearIssue' type="number" />
                                <span>to</span>
                                <TypeInput name='yearIssueTo' value={value.yearIssueTo} onChange={this.addValue} type="number" />
                            </div>
                        </Row>
                    </div>
                </FilterBlock> : null}
            </Main >
        )
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
export default connect(null, mapDispatchToProps)(Search);