import React from 'react';
import Search from '../../Search/Search';
import { Main, Block, Title, NavElement, Img } from './styled';

class CoinsMain extends React.Component {
    render() {
        return (
            <Block>
                <Search />
                <Main>
                    <div>
                        <Title>Bullion coins</Title>
                        <NavElement to={{ pathname: '/coins/list', key: 1, state: { type: 'Investment' } }}>Show all ></NavElement>
                        <Img alt='Bullion' src='https://i.postimg.cc/mkdPNp9f/South-Vietnamese-Dong-1.png' />
                    </div>
                    <div>
                        <Title>Exclusive coins</Title>
                        <NavElement to={{ pathname: '/coins/list', key: 1, state: { type: 'Exclusive' } }}>Show all ></NavElement>
                        <Img alt='Exclusive' src='https://i.postimg.cc/QdzprCHG/ISK-2.png' />
                    </div>
                    <div>
                        <Title>Commemorative coins</Title>
                        <NavElement to={{ pathname: '/coins/list', key: 1, state: { type: 'Memorable' } }}>Show all ></NavElement>
                        <Img alt='Commemorative' src='https://i.postimg.cc/J44JDZXC/Looney-1.png' />
                    </div>
                </Main>
            </Block>
        )
    }
}
export default CoinsMain;