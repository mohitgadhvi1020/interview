import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import DisplayComponent from './Components/DisplayPage';
import {Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />}/>
        <Route exact path="/stateOuputDisplay" element={<DisplayComponent />}/>
      </Routes>
    </div>
  );
}

export default App;
