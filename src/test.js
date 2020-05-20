// import React from 'react';
// import { connect } from 'react-redux';
// import { getDataServer } from './component/ServerRequests/request';

// class App extends React.Component {
//   componentDidMount() {
//     getDataServer()
//       .then(res => {
//         const { menuLoaded } = this.props;
//         menuLoaded(res)
//       });
//   }
//   render() {
//     const { coins } = this.props;
//     const CoinsMainList = coins.map(t => {
//       return (
//         <div key={t.id}>
//           <a>{t.name}</a>
//         </div>
//       )
//     })
//     return (
//       <div> {CoinsMainList}</div>
//     )
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     coins: state.coins
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     menuLoaded: (newCoins) => {
//       dispatch({
//         type: 'MENU_LOADED',
//         payload: newCoins
//       })
//     }
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(App);
