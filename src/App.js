import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={ () => <Dialogs store={props.store} />}/>
                    
                    <Route path='/profile' render={ () => <Profile 
                        profilePage={props.state.profilePage} 
                        dispatch={props.dispatch} /> 
                    }/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music />}/>
                    <Route path='/Friends' render={() => <Friends />}/>
                    <Route path='/settings' render={() => <Settings />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;