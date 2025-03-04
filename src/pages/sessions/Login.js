import React, { useRef, useState } from 'react';
import '../../InputFields.css';
import Header from '../../Header'; // Make sure the path is correct based on your project structure
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [otpSent, setOtpSent] = useState(false);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    try {
      // Send OTP to the email and save to the database
      const response = await fetch('https://bolsta.nyraleadership.com/webcam-api/api/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setOtpSent(true);
      } else {
        // Handle error
        alert('Error sending OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      // Verify OTP
      const response = await fetch('https://bolsta.nyraleadership.com/webcam-api/api/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp }),
      });
      if (response.ok) {
        // Redirect to dashboard
        const idemail = email;
        localStorage.setItem('currentSession', JSON.stringify({ idemail, createdAt: new Date() }));
        console.log('Session created:', idemail);
        navigate('/practice');
      } else {
        // Handle error
        alert('Invalid OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  return (
  <>
   <Header />
    <div className="container-fluid" style={styles.container}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6" style={{alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'}}>
            <form onSubmit={(e) => e.preventDefault()} style={{width: '100%'}}>
              <div className="input-container" style={{ textAlign:'center' }}>
                <div>
                  <div className="input-wrapper">
                    <span className="icon">
                      <img className="navbar-brand" src="/mail.png" alt="Email Icon" style={{marginRight: '0px'}} />
                    </span>
                    <input
                      type="email"
                      placeholder="Email ID"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                {otpSent && (
                  <div style={{ paddingTop: '8px' }}>
                    <div className="input-wrapper">
                      <span className="icon">🔒</span>
                      <input
                        type="password"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                )}
                <div className="input-wrapper gradient-button">
                  <button
                    className="sendotp_button"
                    onClick={otpSent ? handleVerifyOtp : handleSendOtp}
                  >
                    {otpSent ? 'Submit OTP' : 'Send OTP'}
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-6" style={{ textAlign: 'center' }}>
            <img className="img-resize" src="/main.png" alt="Main Illustration" />
          </div>
        </div>
      </div>
    </div>
	</>
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
