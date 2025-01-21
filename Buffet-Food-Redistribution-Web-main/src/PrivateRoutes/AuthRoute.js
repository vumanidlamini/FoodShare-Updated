import React from 'react';
import { useNavigate } from 'react-router-dom';

const AuthRoute = ({ children }) => {
    const navigate = useNavigate();
    const token = sessionStorage.getItem('token');

    React.useEffect(() => {
        if (!token) {
            navigate('/login'); // Redirect to login if token is not present
        }
    }, [token, navigate]);

    return token ? children : null; // Render children if authenticated
};

export default AuthRoute;