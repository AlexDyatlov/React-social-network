import React, { Component } from 'react'
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {initializeApp} from './redux/appReducer';
import Preloader from './components/Preloader/Preloader';
import store from './redux/reduxStore';
import { Provider } from 'react-redux';
import { withSuspense } from './hoc/withSuspense';
import Footer from './components/Footer/Footer';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                <Switch>
                    <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
                    <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
                    <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                    <Route path='/news' render={() => <News /> }/>
                    <Route path='/users' render={ () => <UsersContainer/> }/>
                    <Route path='/login' render={ () => <LoginPage /> }/>
                    <Route path='/music' render={() => <Music />}/>
                    <Route path='/settings' render={() => <Settings />}/>
                    <Route path='*' render={() => <div>404 NOT FOUND</div> }/>
                </Switch>
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = compose(
    connect(mapStateToProps, {initializeApp})) (App)

const SamuraiJSApp = (props) => {
    return <BrowserRouter >
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp