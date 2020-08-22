import React, { Component } from 'react';
/// class/function/properties which are exported default are imported without {}
/// Every module can have several named parameters and in order to import one we should use the syntax as follows
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop-page.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './pages/checkout/checkout.component';

class App extends Component {

  // constructor(props){
  //   super(props);

  //   this.state = {
  //     currentUser: null
  //   }
  // }
  // As we are using redux, constructor are having no longer to use, as it doesnt require to call state from component
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      // createUserProfileDocument(user)
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapshot => {
        setCurrentUser({
            id: snapshot.uid,
            ...snapshot.data()
          });
      });
    }
    setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
  console.log(this.props.currentUser, 'USSSS');

    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/signin'
            render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUp/>)}
          />
          <Route exact path='/checkout' component={CheckoutPage}/>
        </Switch>
        {/* 
          exact returs boolean, exact={true}, path is string, component takes a 
          component declared name
  
          A <Switch> looks through all its children <Route> elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time you have multiple routes, but you want only one
          of them to render at a time
        */}
      </div>
    );
  }
  
}

// const mapStateToProps = ({ user }) => ({
//   currentUser: user.currentUser /// it's taking access to the rootReducer from where it goes to user i.e. a userReducer and assigning the value to currentUser                    
// });
// OR for reselect

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
  /// it's taking access to the rootReducer from where it goes to user i.e. a userReducer and assigning the value to currentUser                    
});

const mapDispatchToProps = dispatch => ({
  // the value will be dispatched in the action of the reducer
  setCurrentUser: user => dispatch(setCurrentUser(user)) 
  /// setCurrentUser is treated as props
  /// Dispatch always takes an action, and passes to all the reducers
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

// Routes => Route, Switch
// Check out props in console for match, history and location property to use the route dynamically