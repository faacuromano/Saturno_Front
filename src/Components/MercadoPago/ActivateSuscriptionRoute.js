import React from 'react';
import { BrowserRouter as Router, Route, useLocation, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import ValidatePayment from './ValidatePayment';

const ActivateSuscriptionRoute = () => {

    const location = useLocation();
    const navigate = useNavigate();

    React.useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const fromExternalURL = queryParams.get('fromExternalURL');

        // Check if the route was accessed directly and it's not a test scenario
        if (fromExternalURL !== 'true') {
            // Redirect to a different page or take some other action
            navigate('/*');
        }
    }, [location, navigate]);

    // Code for production
    /*
    React.useEffect(() => {
        const referringURL = document.referrer;
    
        // Check if the route was accessed from an external URL
        if (referringURL && !referringURL.startsWith(window.location.origin)) {
          // Redirect to a different page or take some other action
          navigate('/other-page');
        }
      }, [navigate]);
      */

    return (

        <Container className="vh-100">
            <br></br>
            <br></br>
            <p className="text-center"><ValidatePayment open={true}></ValidatePayment></p>

        </Container>

    );
}

export default ActivateSuscriptionRoute