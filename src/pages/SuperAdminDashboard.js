import React from 'react'
import PersonList from '../components/PersonList'
import Sidebar from '../components/Sidebar';
// import '../Admin.css'
// import './SuperDashboard.css'
import { Card, Row, Col, Form, InputGroup } from 'react-bootstrap';
// import { ArrowRight } from 'react-bootstrap-icons';

export default function SuperDashboard() {
    return (
        <>
            <div className="container-fluid d-flex flex-column gap-4" >

                <div className=' pt-md-3 pt-sm-5 pt-5 d-block ' style={{ borderBottom: '2px solid #ABABAB' }}>
                    <h2 className='fw-bold cus-heading' style={{ color: '#243445' }}>Dashboard</h2>
                </div>

                <div className='container-fluid ps-0 pe-0 rounded' style={{ border: '1px solid #ABABAB' }}>
                    <div className='rounded' style={{ backgroundColor: '#243445' }}>
                        <h4 className='fw-bold text-white'>XYZ pvt</h4>
                    </div>

                    <div className='row'>
                        <div className='col-lg-4 detail'>
                            <p className='text-dark'>Primary Admin Name : ABCD XYZ</p>
                        </div>
                        <div className='col-lg-4 detail'>
                            <p className='text-dark'>Primary Admin Email : ABCD@gmail.com</p>
                        </div>
                        <div className='col-lg-4 detail'>
                            <p className='text-dark'>No. of Subscribers/Token : 1000</p>
                        </div>
                    </div>

                    {/* Metrics Section */}
                    <Row className="g-0 p-3">
                        {/* Assigned */}
                        <Col md={3} className="pr-md-3 mb-3 mb-md-0">
                            <div className="border rounded p-2">
                                <p className="text-muted mb-2 text-dark">Assigned</p>
                                <div className="d-flex align-items-center justify-content-center pb-2">
                                    <div className="text-center p-2 flex-fill border-end">
                                        <h2 className="mb-0 text-dark">25</h2>
                                        <small className="text-muted">Video Used</small>
                                    </div>
                                    <div className="text-center p-2 flex-fill">
                                        <h2 className="mb-0 text-dark">50</h2>
                                        <small className="text-muted text-dark">Total Videos</small>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        {/* Utilized */}
                        <Col md={3} className="px-md-3 mb-3 mb-md-0">
                            <div className="border rounded p-2">
                                <p className="text-muted mb-2 text-dark">Utilized</p>
                                <div className="d-flex align-items-center justify-content-center pb-2">
                                    <div className="text-center p-2 flex-fill border-end">
                                        <h2 className="mb-0 text-dark">25</h2>
                                        <small className="text-muted">Mins Used</small>
                                    </div>
                                    <div className="text-center p-2 flex-fill">
                                        <h2 className="mb-0 text-dark">60</h2>
                                        <small className="text-muted text-dark">Total Mins</small>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        {/* Renewal Date */}
                        <Col md={3} className="px-md-3 mb-3 mb-md-0">
                            <div className="border rounded p-2">
                                <p className="text-muted mb-2 text-dark">Renewal Date</p>
                                <div className="d-flex align-items-center justify-content-center py-4">
                                    <h5 className="mb-0 text-dark">25/12/2025</h5>
                                </div>
                            </div>
                        </Col>

                        {/* Comment Box */}
                        <Col md={3} className="pl-md-3">
                            <div className="border rounded p-2 h-100">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Write a Comment"
                                    className="border-0 h-75"
                                    style={{ resize: 'none', boxShadow: 'none', backgroundColor: '#fff' }}
                                />
                                <div className="text-end">
                                    <button type='submit' className='rounded-circle m-0'
                                        style={{ bottom: '15px', right: '10px', backgroundColor: '#243445' }}>
                                        <img src='/icons/send-btn-arrow.svg' alt='send-button' />
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </div>

                <div className='custom-container py-4 px-4 rounded-4' style={{ border: '1px solid #A6A6A6', boxShadow: 'rgba(0, 0, 0, 0.5) -4px 8px 11px -4px' }}>
                    <PersonList />
                </div>

            </div>
        </>
    )
}
