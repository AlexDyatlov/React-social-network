import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {

    let SomeComponent = () => <Dialogs 
        state={props.state.dialogsPage} 
        state={props.state.dialogsPage} />

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    {/* <Route path='/dialogs' render={ () => <Dialogs messages={props.messages} dialogs={props.dialogs} /> }/> */}
                    <Route path='/dialogs' component={SomeComponent}/>
                    <Route path='/profile' render={ () => <Profile state={props.state.profilePage}/> }/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music />}/>
                    <Route path='/settings' render={() => <Settings />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;