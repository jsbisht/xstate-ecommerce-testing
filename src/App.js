import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import { Route, Switch, Redirect } from 'react-router-dom';
import Shop from './pages/Shop';
import Header from './components/molecules/Header';
import Login from './pages/Login';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import Checkout from './pages/Checkout';
import { toggleCartHidden } from './redux/cart/cart.actions';
import {selectCartHidden} from './redux/cart/cart.selectors'
import Confirmation from './pages/Confirmation';
<<<<<<< HEAD
=======
import ProductPage from './pages/ProductPage';
>>>>>>> 4e410c4083a24ed5751a9e9e2d409767b9189450

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, hidden } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
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
    if(!hidden){
      toggleCartHidden();
    }
    
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/shop' component={Shop}/>
          <Route exact path='/signin'
            render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<Login/>)}
          />
          <Route path='/product' component={ProductPage}/>
          <Route exact path='/checkout' component={Checkout}/>
          <Route exact path = '/confirmation' component = { Confirmation }/>
        </Switch>
      </div>
    );
  }
  
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)) ,
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);