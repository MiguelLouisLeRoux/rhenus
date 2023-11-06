import React, { useState } from 'react';
import rhenus_img from '../src/img/Welcome.png';
import { BrowserRouter as Router, Route, Switch, Link, Redirect, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Form, FormControl, Button, Overlay,Alert } from 'react-bootstrap';
import users from './testUsers';
import Welcome from './welcome';


function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPopover, setShowPopover] = useState(false);
  const [redirectToWelcome, setRedirectToWelcome] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Check if the submitted username and password match any user in the array
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
      setMessage('User successfully logged in.');
      navigate('/welcome');

      // Automatically close the popover after 3 seconds
      setTimeout(() => {
        setShowPopover(false);
      }, 3000);
    } else {
      setMessage('Incorrect username or password. Please check your credentials and try again.');
      setShowPopover(true);

      // Automatically close the popover after 3 seconds
      setTimeout(() => {
        setShowPopover(false);
      }, 3000);
    }
  };
  return (
    <div className="App">
      <div id='check' className='d-flex justify-content-between align-items-center'>
        <div className='col-5 p-5'>
        <Overlay
            show={showPopover}
            target={document.getElementById('popover-target')}
            placement="left-start"
            transition={true}
          > 
            <Alert variant={message.includes('successfully') ? 'success' : 'danger'}>
              {message}
            </Alert>        
          </Overlay>
          <div className='mb-5'>
            <h2>Sign In To Your Account</h2>
            <h6>RHENNUS LOGISTICS CUSTOMER REPORTS</h6>
            <br/>
          </div>
          
          <Form className="text-center" onSubmit={handleFormSubmit}>
            <Form.Group>
              <FormControl value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" className="inputStyle"/>
            </Form.Group>
            <br/>
            <Form.Group>
              <FormControl  value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="inputStyle"/>
            </Form.Group>
            <br/>
            <Button variant="primary" className='submitBtn' type="submit">
              Sign In
            </Button>
          </Form>
        </div>
        <div className='col-7'>
          <img className='rhenusImg' src={rhenus_img} alt='rhenus_img'/>
        </div> 
      </div>
    </div>
  );
}

export default App;
