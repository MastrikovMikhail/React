import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Users from './components/Users/Users';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>      
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/dialogs/*" element = {<DialogsContainer />} /> 
            <Route path="/profile" element = {<Profile />} />
            <Route path="/users" element = { <Users />} />
          </Routes>   
        </div>      
      </div>
    </BrowserRouter>
  );
}

export default App;
