import React, { useState } from 'react';
import rhenus_img from '../src/img/Welcome.png';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import { Form, FormControl, Button, Overlay, Alert } from 'react-bootstrap';
import Values from './Values';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPopover, setShowPopover] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const user = Values.users.find((u) => u.username === username && u.password === password);

    if (user) {
      navigate('/welcome');
    } else {
      setMessage('Incorrect username or password. Please check your credentials and try again.');
      setShowPopover(true);

      setTimeout(() => {
        setShowPopover(false);
      }, 3000);
    }
  };
  return (
    <div className="App">
      
      <div id='check' className='d-flex justify-content-between align-items-center'>
        <div className='col-5 p-5'>
        <div id='overlay'></div>
        <br/>
        <Overlay
          show={showPopover}
          target={document.getElementById('overlay')}
          placement="top-end"
          transition={false}
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
            <FormControl 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              type="text" 
              placeholder="Username" 
              className="inputStyle"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleFormSubmit(e);
                }
              }}
              />
          </Form.Group>
          <br/>
          <Form.Group>
            <FormControl 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              type="password" 
              placeholder="Password" 
              className="inputStyle"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleFormSubmit(e);
                }
              }}
              />
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
