import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { navigations } from '../navigations';

const unprotectedRoutes = ['/', '/home', '/about']; // List of routes that don't require authentication

function AuthGuard({ children }) {
    const { user, isLoggedin, isInitialized, initialize } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isInitialized) {
            initialize();
        }
    }, [isInitialized]);

    useEffect(() => {
        const currentPath = location.pathname;
        
        if (unprotectedRoutes.includes(currentPath)) {
            return;
        }
        
        if (!isLoggedin) {
            navigate('/login');
            return;
        }
        
        const allowedRoutes = navigations
            .filter(nav => nav.auth.includes(user?.role))
            .map(nav => nav.path);
        
        if (!allowedRoutes.includes(currentPath)) {
            navigate('/unauthorized');
        }
    }, [isLoggedin, user, location.pathname]);

    return <>{children}</>;
}

export default AuthGuard;
