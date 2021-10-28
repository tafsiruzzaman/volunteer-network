import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/Group 1329.png'

const Register = () => {
    const { singInUsingGoogle, setUser, setError, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    
    const handleRegister = () => {
        singInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
            setUser(result.user);
        })
        .catch(error => {
            setError(error.message);
        })
        .finally(() => {
            setIsLoading(false);
        });
    }
    return (
        <div style={{backgroundColor: "#f8fafc", height:"735px"}}>
            <div className="container">
                <div>
                    <div>
                        <img src={logo} className="w-25" alt="" />
                    </div>
                    <div className="mt-5">
                        <Button variant="info px-5 text-white" onClick={handleRegister}>Google sign in</Button>
                    </div>
                </div>

            {/* <button onClick={handleRegister}>Google sign in</button> */}
            </div>
        </div>
    );
};

export default Register;