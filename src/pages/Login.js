import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header';
import { useAuth } from '../context/AuthContext';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

  const {login} = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        login({email, password})
    };

    return (
        <div>
            <Header />
            <div className="container-fluid" style={styles.container}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6" style={{alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'}}>
            <form className='row gap-4' onSubmit={handleLogin}>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
          </div>
          <div className="col-md-6" style={{ textAlign: 'center' }}>
            <img className="img-resize img-fluid" src="/main.png" alt="Main Illustration" />
          </div>
        </div>
      </div>
    </div>
            
        </div>
    );
};

const styles = {
    container: {
      paddingTop: '8%',
      minHeight: 'calc(100vh - 102px)',
      paddingBottom: '5%',
      background: 'linear-gradient(150deg, rgba(58,109,112,1) 0%, rgba(36,52,69,1) 13%, rgba(36,52,69,1) 88%, rgba(58,109,112,1) 99%)',
      color: 'white',
    },
  };

export default Login;
