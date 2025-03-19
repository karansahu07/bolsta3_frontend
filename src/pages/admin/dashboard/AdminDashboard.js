import React from 'react'
import PersonList from '../../../components/PersonList'
import '../Admin.css'

export default function Dashboard() {
    return (
        <>
            <div className="container-fluid d-flex flex-column gap-4" >
                <div className=' pt-md-3 pt-sm-5 pt-5 d-block ' style={{ borderBottom: '2px solid #ABABAB' }}>
                    <h2 className='fw-bold cus-heading' style={{ color: '#243445' }}>Dashboard</h2>
                </div>

                <div className='container-fluid'>
                    <div className='row gx-3 gy-3'>
                        <div className='col-lg-4 col-md-4 col-sm-12'>
                            <div style={{ border: '1px solid #A6A6A6', boxShadow: 'rgba(0, 0, 0, 0.5) -4px 8px 11px -4px' }}
                                className='rounded-4 px-4 py-4 d-flex flex-row gap-3 align-items-center'>
                                <img src='/icons/dashboardicon.svg' alt='dashboard-icon' />
                                <div className='d-flex flex-column'>
                                    <h2 className='fw-bold m-0' style={{ color: '#243445' }}>100</h2>
                                    <p className='normal-font m-0' style={{ color: '#636363' }}>Total License</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-4 col-sm-12'>
                            <div style={{ border: '1px solid #A6A6A6', boxShadow: 'rgba(0, 0, 0, 0.5) -4px 8px 11px -4px' }}
                                className='rounded-4 px-4 py-4 d-flex flex-row gap-3 align-items-center'>
                                <img src='/icons/dashboardicon.svg' alt='dashboard-icon' />
                                <div className='d-flex flex-column'>
                                    <h2 className='fw-bold m-0' style={{ color: '#243445' }}>100</h2>
                                    <p className='normal-font m-0' style={{ color: '#636363' }}>Pending License</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-4 col-sm-12'>
                            <div style={{ border: '1px solid #A6A6A6', boxShadow: 'rgba(0, 0, 0, 0.5) -4px 8px 11px -4px' }}
                                className='rounded-4 px-4 py-4 d-flex flex-row justify-content-between align-items-center'>
                                <div className='d-flex flex-column align-items-center px-3' style={{ borderRight: '1px solid #000000' }}>
                                    <h2 className='fw-bold m-0' style={{ color: '#243445' }}>25</h2>
                                    <p className='normal-font m-0' style={{ color: '#636363' }}>Pending Video</p>
                                </div>
                                <div className='d-flex flex-column align-items-center px-3'>
                                    <h2 className='fw-bold m-0' style={{ color: '#243445' }}>60</h2>
                                    <p className='normal-font m-0' style={{ color: '#636363' }}>Total Video</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12 col-md-10 col-lg-6 mx-auto rounded-4 p-3'
                            style={{ border: '1px solid #A6A6A6', boxShadow: 'rgba(0, 0, 0, 0.5) -4px 8px 11px -4px', backgroundColor: '#fff' }}>

                            <div className='row border-bottom border-secondary pb-2'>
                                <div className='col-12 col-sm-5'>
                                    <h3 className='fw-bold m-0' style={{ color: '#243445' }}>Aman Singh</h3>
                                </div>
                                <div className='col-12 col-sm-7 d-flex flex-column flex-sm-row gap-2 text-dark normal-font'>
                                    <p className='m-0'>Email ID:</p>
                                    <p className='m-0'>shivamkaushal181@gmail.com</p>
                                </div>
                            </div>

                            <div className='mt-4'>
                                <div className='border rounded-4 px-3 py-4 d-flex flex-column flex-sm-row justify-content-center'>
                                    <div className='d-flex flex-column justify-content-center align-items-center px-4 border-end border-dark'>
                                        <h2 className='fw-bold m-0' style={{ color: '#243445' }}>25</h2>
                                        <p className='normal-font m-0' style={{ color: '#636363' }}>Pending Video</p>
                                    </div>
                                    <div className='d-flex flex-column justify-content-center align-items-center px-4'>
                                        <h2 className='fw-bold m-0' style={{ color: '#243445' }}>60</h2>
                                        <p className='normal-font m-0' style={{ color: '#636363' }}>Total Video</p>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-3'>
                                <form className='position-relative' style={{ backgroundColor: '#fff' }}>
                                    <textarea className='form-control w-100 rounded-4 py-4 px-4 bg-white normal-font'
                                        style={{ height: '150px' }} placeholder='Write a comment' />
                                    <button type='submit' className='position-absolute rounded-circle m-0'
                                        style={{ bottom: '15px', right: '10px', backgroundColor: '#243445' }}>
                                        <img src='/icons/send-btn-arrow.svg' alt='send-button' />
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6'>
                            <div className='row gap-5 justify-content-evenly perform'>
                                <div className='col-lg-5 col-md-5 ms-2 d-flex gap-5'>
                                    <div style={{ border: '1px solid #A6A6A6', boxShadow: 'rgba(0, 0, 0, 0.5) -4px 8px 11px -4px', paddingInline: '2rem' }} className='rounded-4 py-4 '>
                                        <h4 className='fw-bold m-0' style={{ color: '#243445' }}>First Bolsta</h4>
                                        <div className='d-flex flex-row mt-3 gap-4'>
                                            <img src='/icons/speedometer.svg' alt='speedeter' />
                                            <h3 className='m-0 text-center' style={{ color: '#243445' }}>26%<br />WPM</h3>
                                        </div>

                                    </div>
                                </div>
                                <div className='col-lg-5 col-md-5 ms-2 d-flex gap-5'>
                                    <div style={{ border: '1px solid #A6A6A6', boxShadow: 'rgba(0, 0, 0, 0.5) -4px 8px 11px -4px', paddingInline: '2rem' }} className='rounded-4 py-4 '>
                                        <h4 className='fw-bold m-0' style={{ color: '#243445' }}>Latest Bolsta</h4>
                                        <div className='d-flex flex-row mt-3 gap-4'>
                                            <img src='/icons/speedometer.svg' alt='speedeter' />
                                            <h3 className='m-0 text-center' style={{ color: '#243445' }}>84%<br />WPM</h3>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='row mt-4 gap-4 performance-div'>
                                <div className='col-lg-5 col-5 ms-2 d-flex'>
                                <div style={{border: '1px solid #A6A6A6', boxShadow: 'rgba(0, 0, 0, 0.5) -4px 8px 11px -4px'}} className='rounded-4 py-4 px-4'>
                                    <div className='mt-1 performance'>
                                        <h6 className='normal-font m-0' style={{color: '#243445'}}>Weak Words</h6>
                                        <div className='d-flex gap-2 align-items-end'>
                                            <p className='normal-font m-0' style={{color: '#243445'}}>(24%)</p>
                                            <progress value='24' max='100' style={{height: '20px', width: '17.4em' , maxWidth: '100%'}}/>
                                        </div>
                                    </div>
                                    <div className='mt-1 performance'>
                                        <h6 className='normal-font m-0' style={{color: '#243445'}}>Filler Words</h6>
                                        <div className='d-flex gap-2 align-items-end'>
                                            <p className='normal-font m-0' style={{color: '#243445'}}>(24%)</p>
                                            <progress value='24' max='100' style={{height: '20px', width: '17.4em' , maxWidth: '100%'}}/>
                                        </div>
                                    </div>
                                    <div className='mt-1 performance'>
                                        <h6 className='normal-font m-0' style={{color: '#243445'}}>Conciseness Score</h6>
                                        <div className='d-flex gap-2 align-items-end'>
                                            <p className='normal-font m-0' style={{color: '#243445'}}>(24%)</p>
                                            <progress value='24' max='100' style={{height: '20px', width: '17.4em' , maxWidth: '100%'}}/>
                                        </div>
                                    </div>
                                    <div className='mt-1 performance' >
                                        <h6 className='normal-font m-0' style={{color: '#243445'}}>Smiling</h6>
                                        <div className='d-flex gap-2 align-items-end'>
                                            <p className='normal-font m-0' style={{color: '#243445'}}>(24%)</p>
                                            <progress value='24' max='100' style={{height: '20px', width: '17.4em' , maxWidth: '100%'}}/>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className='col-lg-5 col-5 ms-5 d-flex'>
                                <div style={{border: '1px solid #A6A6A6', boxShadow: 'rgba(0, 0, 0, 0.5) -4px 8px 11px -4px'}} className='rounded-4 py-4 px-4'>
                                    <div className='mt-1 performance' >
                                        <h6 className='normal-font m-0' style={{color: '#243445'}}>Weak Words</h6>
                                        <div className='d-flex gap-2 align-items-end'>
                                            <p className='normal-font m-0' style={{color: '#243445'}}>(24%)</p>
                                            <progress value='24' max='100' style={{height: '20px', width: '17.4em' , maxWidth: '100%'}}/>
                                        </div>
                                    </div>
                                    <div className='mt-1 performance' >
                                        <h6 className='normal-font m-0' style={{color: '#243445'}}>Filler Words</h6>
                                        <div className='d-flex gap-2 align-items-end'>
                                            <p className='normal-font m-0' style={{color: '#243445'}}>(24%)</p>
                                            <progress value='24' max='100' style={{height: '20px', width: '17.4em' , maxWidth: '100%'}}/>
                                        </div>
                                    </div>
                                    <div className='mt-1 performance' >
                                        <h6 className='normal-font m-0' style={{color: '#243445'}}>Conciseness Score</h6>
                                        <div className='d-flex gap-2 align-items-end'>
                                            <p className='normal-font m-0' style={{color: '#243445'}}>(24%)</p>
                                            <progress value='24' max='100' style={{height: '20px', width: '17.4em' , maxWidth: '100%'}}/>
                                        </div>
                                    </div>
                                    <div className='mt-1 performance'>
                                        <h6 className='normal-font m-0' style={{color: '#243445'}}>Smiling</h6>
                                        <div className='d-flex gap-2 align-items-end'>
                                            <p className='normal-font m-0' style={{color: '#243445'}}>(24%)</p>
                                            <progress value='24' max='100' style={{height: '20px', width: '17.4em' , maxWidth: '100%'}}/>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='custom-container py-4 px-4 rounded-4' style={{border: '1px solid #A6A6A6', boxShadow: 'rgba(0, 0, 0, 0.5) -4px 8px 11px -4px'}}>
                    <PersonList />
                    </div>

            </div>
        </>
    )
}
