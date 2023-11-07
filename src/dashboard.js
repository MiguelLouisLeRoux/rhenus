import React from 'react';
import { BrowserRouter as Router, useParams, useNavigate } from 'react-router-dom';
import dashboard_img from '../src/img/dashboard.png';
import { Button } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function Dashboard() {
    const { dashboardValue } = useParams();
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1); // Navigate back to the previous view
      };

    return (
    <div className='row p-3'>
        <div className='d-flex flex-row justify-content-start align-items-center'>
            <Button variant="link" onClick={handleGoBack}>
            <FaArrowLeft /> 
            </Button>
            <h3>{dashboardValue}</h3>
        </div>    
        <div className='col-18 mt-3 d-flex justify-content-center align-items-center'>
            <img className='dashboardImg' src={dashboard_img} alt='rhenus_img'/>
        </div>
    </div>
    );
}

export default Dashboard;