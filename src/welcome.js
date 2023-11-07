import React from 'react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import rhenus_img from '../src/img/RhenusLogistics.png';
import Values from './Values';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function Welcome() {
  const navigate = useNavigate();
  const { dashboards } = Values;

  const handleDashboardClick = (dashboardValue) => {
    navigate(`/dashboard/${dashboardValue}`);
  };

  return (
    <div className='d-flex flex-wrap p-5'>
      <div className='col-6 p-5 d-flex flex-column justify-content-between align-items-center'> 
        <h1>WELCOME DECISION INC.</h1>
        <br/>
        <img className='rhenusLogisticsImg' src={rhenus_img} alt='rhenus_img'/>
      </div>
      <div className='col-6 p-5 d-flex flex-column justify-content-between align-items-center'>
        <div>
          <h2>Unlock the Power of Data:</h2>
          <p>Our comprehensive reports give you, our valued customers, the insights you need to make 
          data-driven decisions. Gain a deep understanding of your logistics and transportation processes,
          optimize your operations, and propel your business to new heights.</p>
        </div>
        <div className='d-flex flex-wrap'>
          {/* <Button variant="primary" className='dashboardBtn' type="submit">Dashboard 1</Button>
          <Button variant="primary" className='dashboardBtn' type="submit">Dashboard 2</Button>
          <Button variant="primary" className='dashboardBtn' type="submit">Dashboard 3</Button>
          <Button variant="primary" className='dashboardBtn' type="submit">Dashboard 4</Button>
          <Button variant="primary" className='dashboardBtn' type="submit">Dashboard 5</Button>
          <Button variant="primary" className='dashboardBtn' type="submit">Dashboard 6</Button>    */}
          {dashboards.map((dashboard, index) => (
            <Button
              key={index}
              variant="primary"
              className="dashboardBtn"
              onClick={() => handleDashboardClick(dashboard.name)}
            >
              {dashboard.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Welcome;