// import React from 'react';
// import { connect } from 'react-redux';
// import { Redirect, Route } from 'react-router-dom';

// import AuthenticationModal from '../components/authentication/AuthenticationModal';
// import { returnMessages } from '../actions/resMessages';
// import fire from '../firebase/firebase';
// import clientStorage from '../utils/clientStorage';


// const userLoggedIn = (openAuthPopUp, returnMessages) => {
//     openAuthPopUp()
//     returnMessages('Please login first', 403, 'LOGIN_FIRST')
// }

// const PrivateRoute = ({
//     isAuthenticated,
//     openAuthPopUp,
//     returnMessages,
//     component: Component,
//     ...rest
// }) => (
//         <Route {...rest} component={(props) => (
//             isAuthenticated ? (
//                 <Component {...props} />
//             ) : (
//                 <React.Fragment>
//                     <Redirect to="/" />
//                     {userLoggedIn(openAuthPopUp, returnMessages)}
//                 </React.Fragment>
//             )
//         )} />
//     );

// const mapStateToProps = state => ({
//     isAuthenticated: state.authentication.isAuthenticated
// });

// const mapDispatchToProps = (dispatch) => ({
//     openAuthPopUp: () => dispatch(openAuthPopUp()),
//     returnMessages: (error, code, id) => dispatch(returnMessages(error, code, id))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);