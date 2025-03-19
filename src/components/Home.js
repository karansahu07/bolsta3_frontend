import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (true) {
            navigate("/login");
        }
    }, [navigate]); // Add navigate as a dependency

    return <div>Home</div>; // Proper JSX return
};

export default Home;
