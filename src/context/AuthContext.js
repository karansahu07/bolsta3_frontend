import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../constants/urls";

const initialContext = {
    isLoggedin: false,
    isInitialized: false,
    user: { role: "", email: "" },
    loading: false,
    error: null,
    success: false,
    login: async () => {},
    logout: async () => {},
    initialize: () => {}
};

const AuthContext = createContext(initialContext);

const AuthProvider = ({ children }) => {
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);
    const [user, setUser] = useState({ role: "", email: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const login = async ({ email, password }) => {
        setLoading(true);
        setError(null);
        setSuccess(false);
        try {
            const response = await axios.post(`${SERVER_URL}/auth/login`, { email, password });
            const { message, user } = response.data;
            
            setUser({ role: user.role, email: user.email });
            setIsLoggedin(true);
            setIsInitialized(true);
            localStorage.setItem("user", JSON.stringify({ role: user.role, email: user.email }));
            
            setSuccess(true);
            navigate(user.homeRoute || "/dashboard");
        } catch (error) {
            console.error("Login failed", error);
            setError("Login failed. Please check your credentials.");
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        setLoading(true);
        setError(null);
        try {
            await axios.post(`${SERVER_URL}/auth/logout`);
            localStorage.removeItem("user");
            setUser({ role: "", email: "" });
            setIsLoggedin(false);
            setIsInitialized(false);
            setSuccess(true);
            navigate("/login");
        } catch (error) {
            console.error("Logout failed", error);
            setError("Logout failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const initialize = () => {
        setLoading(true);
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
            setUser(storedUser);
            setIsLoggedin(true);
        }
        setIsInitialized(true);
        setLoading(false);
    };

    useEffect(() => {
        initialize();
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout, initialize, isLoggedin, isInitialized, loading, error, success }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };