import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function AnalyzeData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://ek-reps.com:8080/api/show_analyze_data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: 1234
            })
        })
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.log('Error fetching data:', error));
    }, []);

    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-4 pt-2 text-white min-vh-100">
                        <Link to="/" className="d-flex align-items-center pb-3 pt-4 mb-md-0 me-md-auto text-white text-decoration-none">
                            <span className="fs-5 d-none d-sm-inline">
                                <img className="img-fluid" src={process.env.PUBLIC_URL + "/black_bolsta_logo.png"} style={{}} />
                            </span>
                        </Link>
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu" style={{ width: "100%" }}>
                            <li className="nav-item mt-2 " >
                                <Link to="https://ek-reps.com:8080/live_recording" className="nav-link align-middle px-0" style={{color: "black"}}>
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + "/Vector.png"} style={{ paddingLeft: 10 }} />
                                    <span className="ms-1 d-none d-sm-inline">Practice</span>
                                </Link>
                            </li>
                            <li className="nav-item mt-2 active" >
                                <Link to="/analyze-data" className="nav-link px-0 align-middle" style={{color: "black"}}>
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + "/Vector.png"} style={{ paddingLeft: 10 }} />
                                    <span className="ms-1 d-none d-sm-inline">My Video</span>
                                </Link>
                            </li>
                        </ul>
                        <hr />
                        <div className="dropdown pb-4" style={{ color: "black" }}>
                            <img className="img-fluid" src={process.env.PUBLIC_URL + "/Vector.png"} style={{ paddingLeft: 10 }} />
                            <span className="d-none d-sm-inline ms-1">Log out</span>
                        </div>
                    </div>
                </div>
<div className="col py-3">
    <div className="container">
        <h1>Analyzed Data</h1>
            <div className="row my-2">
                <div className="col-md-2">
                    <strong>User ID:</strong>
                </div>
                <div className="col-md-2">
                    <strong>Filler Words:</strong>
                </div>
                <div className="col-md-2">
                    <strong>Weak Words:</strong>
                </div>
                <div className="col-md-2">
                    <strong>Conciseness Score:</strong>
                </div>
                <div className="col-md-2">
                    <strong>Smiling Percentage:</strong>
                </div>
                <div className="col-md-2">
                    <strong>Speech Speed:</strong>
                </div>
            </div>		
        {data.map(item => (
            <div key={item.user_id} className="row my-2">
                <div className="col-md-2">
                    <li>{item.user_id}</li>
                </div>
                <div className="col-md-2">
                    <li>{item.filler_words}</li>
                </div>
                <div className="col-md-2">
                    <li>{item.weak_words}</li>
                </div>
                <div className="col-md-2">
                    <li>{item.conciseness_score}</li>
                </div>
                <div className="col-md-2">
                    <li>{item.smiling_percentage}</li>
                </div>
                <div className="col-md-2">
                    <li>{item.speed}</li>
                </div>
            </div>
        ))}
    </div>
</div>
            </div>
        </div>
    );
}

export default AnalyzeData;
