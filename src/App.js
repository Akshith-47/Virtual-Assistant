import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Registration';
import Ex1 from './components/Ex1';
import './App.css'
import { BrowserRouter as Router, Switch, 
  Route, Redirect} from "react-router-dom";
import UserList from './components/Userlist';
import ChatGPT from './chatgpt/src/App.js';

const App = () => {
  // const [inputValue, setInputValue] = useState('');

  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   // Get a reference to the database
  //   var database = db;

  //   // Store the input value in the database
  //   database.ref().push({
  //     input: inputValue,
  //   });

  //   // Clear the input value
  //   setInputValue('');
  // };

  return(

    // <div className='App'>
    //     {/* <h1>Login</h1> */}
    // <div className='App-header'>
      
    // </div>
    // </div>
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Switch>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" component={Login} />
            
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          <Route path="/register" component={Register} />
            
          {/* This route is for contactus component
          with exact path "/contactus", in 
          component props we passes the imported component*/}
          <Route path="/chatgpt" component={ChatGPT} />
            
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
          <Redirect to="/chatgpt" />
        </Switch>
      </Router>
    </>
    
  )
};

export default App;
/*import Login from "./components/Login.js"
import Register from "./components/Registration.js"
import './App.css';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
      <Login/>
      <Register/>
      </header>
      
    </div>
  );
}

export default App;*/
