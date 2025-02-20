import React from 'react'
import Navbar from '../components/Navbar'
import './Admin.css'

export default function Dashboard() {
  return (
    <>
        <div className="container-fluid" style={{ paddingLeft: "0px", paddingRight: "0px" }}>
            <div className="row flex-nowrap" style={{'--bs-gutter-x' : '0px'}}>
        
        
                <Navbar />
                <div className="container dashboarddiv mx-md-3 d-flex flex-column gap-4" >
                    <div className=' pt-md-3 pt-5 d-block ' style={{borderBottom: '2px solid #ABABAB'}}>
                        <h2 className='fw-bold' style={{color: '#243445'}}>Dashboard</h2>
                    </div>
                    <div className='d-flex gap-5'>
                        <div style={{border: '1px solid #A6A6A6', boxShadow: 'rgba(0, 0, 0, 0.5) -4px 8px 11px -4px'}} className='rounded-4 px-5 py-4 d-flex flex-row gap-4'>
                            <img src='/icons/dashboardicon.svg' alt='dashboard-icon' />
                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                <h2 className='fw-bold m-0' style={{color: '#243445'}} >100</h2>
                                <p className='normal-font m-0' style={{color: '#636363'}}>Total License</p>
                            </div>
                             
                        </div>
                        <div style={{border: '1px solid #A6A6A6', boxShadow: 'rgba(0, 0, 0, 0.5) -4px 8px 11px -4px'}} className='rounded-4 px-5 py-4 d-flex flex-row gap-4'>
                            <img src='/icons/dashboardicon.svg' alt='dashboard-icon' />
                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                <h2 className='fw-bold m-0' style={{color: '#243445'}} >100</h2>
                                <p className='normal-font m-0' style={{color: '#636363'}}>Pending License</p>
                            </div>
                             
                        </div>
                        <div style={{border: '1px solid #A6A6A6', boxShadow: 'rgba(0, 0, 0, 0.5) -4px 8px 11px -4px'}} className='rounded-4 px-5 py-4 d-flex flex-row'>
                            <div className='d-flex flex-column justify-content-center align-items-center px-4' style={{borderRight: '1px solid #000000'}}> 
                                <h2 className='fw-bold m-0' style={{color: '#243445'}} >25</h2>
                                <p className='normal-font m-0' style={{color: '#636363'}}>Pending Video</p>
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center px-4'>
                                <h2 className='fw-bold m-0' style={{color: '#243445'}} >60</h2>
                                <p className='normal-font m-0' style={{color: '#636363'}}>Total Video</p>
                            </div>
                             
                        </div>
                        <div style={{border: '1px solid #A6A6A6', boxShadow: 'rgba(0, 0, 0, 0.5) -4px 8px 11px -4px'}} className='rounded-4 px-5 py-4 d-flex flex-row'>
                            <div className='d-flex flex-column justify-content-center align-items-center px-3' style={{borderRight: '1px solid #000000'}}> 
                                <h2 className='fw-bold m-0' style={{color: '#243445'}} >100</h2>
                                <p className='normal-font m-0' style={{color: '#636363'}}>Pending minute</p>
                            </div>
                            <div className='d-flex flex-column justify-content-center align-items-center px-4'>
                                <h2 className='fw-bold m-0' style={{color: '#243445'}} >300</h2>
                                <p className='normal-font m-0' style={{color: '#636363'}}>Total Minute</p>
                            </div>
                             
                        </div>
                    </div>
                    <div className='d-flex gap-5'>
                        <div className='py-4 px-4 rounded-4' style={{border: '1px solid #A6A6A6', boxShadow: 'rgba(0, 0, 0, 0.5) -4px 8px 11px -4px'}}>
                            <div className='d-flex gap-2 flex-row py-2 border-bottom justify-content-between' style={{borderColor: '#A6A6A6'}}>
                                <div>
                                    <h3 className='fw-bold m-0' style={{color: '#243445'}}>Aman Singh</h3>
                                </div>
                                <div className='d-flex flex-row gap-2 text-dark normal-font'>
                                    <p className='m-0'>Email ID:</p>
                                    <p className='m-0'>shivamkaushal181@gmail.com</p>
                                </div>
                            </div>
                            <div className='d-flex gap-2 mt-4'>
                                <div style={{border: '1px solid #A6A6A6'}} className='rounded-4 px-1 py-4 d-flex flex-row'>
                                    <div className='d-flex flex-column justify-content-center align-items-center px-3' style={{borderRight: '1px solid #000000'}}> 
                                        <h2 className='fw-bold m-0' style={{color: '#243445'}} >100</h2>
                                        <p className='normal-font m-0' style={{color: '#636363'}}>Pending minute</p>
                                    </div>
                                    <div className='d-flex flex-column justify-content-center align-items-center px-3'>
                                        <h2 className='fw-bold m-0' style={{color: '#243445'}} >300</h2>
                                        <p className='normal-font m-0' style={{color: '#636363'}}>Total Minute</p>
                                    </div>
                                </div>  
                                <div style={{border: '1px solid #A6A6A6'}} className='rounded-4 px-1 py-4 d-flex flex-row'>
                                    <div className='d-flex flex-column justify-content-center align-items-center px-4' style={{borderRight: '1px solid #000000'}}> 
                                        <h2 className='fw-bold m-0' style={{color: '#243445'}} >100</h2>
                                        <p className='normal-font m-0' style={{color: '#636363'}}>Pending minute</p>
                                    </div>
                                    <div className='d-flex flex-column justify-content-center align-items-center px-4'>
                                        <h2 className='fw-bold m-0' style={{color: '#243445'}} >300</h2>
                                        <p className='normal-font m-0' style={{color: '#636363'}}>Total Minute</p>
                                    </div>
                                </div>  
                            </div>
                            <div className='position-relative mt-3 '>
                                <form>
                                    <textarea className='w-100 rounded-4 py-4 px-4 normal-font' style={{height: '150px'}} placeholder='Write a comment'/>
                                    <button type='submit' className='position-absolute rounded-circle m-0' style={{bottom: '15px' , right: '10px', backgroundColor: '#243445'}}>
                                        <img src='/icons/send-btn-arrow.svg' alt='send-button' />
                                        </button>
                                </form>
                            </div>
                        </div>
                        <div className='d-flex flex-column gap-3'>
                            <div className='d-flex gap-5'>
                                <div style={{border: '1px solid #A6A6A6', boxShadow: 'rgba(0, 0, 0, 0.5) -4px 8px 11px -4px', paddingInline: '4rem'}} className='rounded-4 py-4 '>
                            <h4 className='fw-bold m-0' style={{color: '#243445'}}>First Bolsta</h4>
                            <div className='d-flex flex-row mt-3 gap-5'>
                                <img src='/icons/speedometer.svg' alt='speedeter' />
                                <h3 className='m-0 text-center' style={{color: '#243445'}}>26%<br/>WPM</h3>
                            </div>
                             
                                </div>
                                <div style={{border: '1px solid #A6A6A6', boxShadow: 'rgba(0, 0, 0, 0.5) -4px 8px 11px -4px', paddingInline: '4rem'}} className='rounded-4 py-4 '>
                            <h4 className='fw-bold m-0' style={{color: '#243445'}}>Latest Bolsta</h4>
                            <div className='d-flex flex-row mt-3 gap-5'>
                                <img src='/icons/speedometer.svg' alt='speedeter' />
                                <h3 className='m-0 text-center' style={{color: '#243445'}}>84%<br/>WPM</h3>
                            </div>
                             
                                </div>
                            </div>
                            <div className='d-flex gap-5'>
                                <div style={{border: '1px solid #A6A6A6', boxShadow: 'rgba(0, 0, 0, 0.5) -4px 8px 11px -4px'}} className='rounded-4 py-4 px-4'>
                                    <div className='mt-1'>
                                        <h6 className='normal-font m-0' style={{color: '#243445'}}>Weak Words</h6>
                                        <div className='d-flex gap-2 align-items-end'>
                                            <p className='normal-font m-0' style={{color: '#243445'}}>(24%)</p>
                                            <progress value='24' max='100' style={{height: '20px', width: '17.4em' , maxWidth: '100%'}}/>
                                        </div>
                                    </div>
                                    <div className='mt-1'>
                                        <h6 className='normal-font m-0' style={{color: '#243445'}}>Filler Words</h6>
                                        <div className='d-flex gap-2 align-items-end'>
                                            <p className='normal-font m-0' style={{color: '#243445'}}>(24%)</p>
                                            <progress value='24' max='100' style={{height: '20px', width: '17.4em' , maxWidth: '100%'}}/>
                                        </div>
                                    </div>
                                    <div className='mt-1'>
                                        <h6 className='normal-font m-0' style={{color: '#243445'}}>Conciseness Score</h6>
                                        <div className='d-flex gap-2 align-items-end'>
                                            <p className='normal-font m-0' style={{color: '#243445'}}>(24%)</p>
                                            <progress value='24' max='100' style={{height: '20px', width: '17.4em' , maxWidth: '100%'}}/>
                                        </div>
                                    </div>
                                    <div className='mt-1'>
                                        <h6 className='normal-font m-0' style={{color: '#243445'}}>Smiling</h6>
                                        <div className='d-flex gap-2 align-items-end'>
                                            <p className='normal-font m-0' style={{color: '#243445'}}>(24%)</p>
                                            <progress value='24' max='100' style={{height: '20px', width: '17.4em' , maxWidth: '100%'}}/>
                                        </div>
                                    </div>
                                </div>
                                <div style={{border: '1px solid #A6A6A6', boxShadow: 'rgba(0, 0, 0, 0.5) -4px 8px 11px -4px'}} className='rounded-4 py-4 px-4'>
                                    <div className='mt-1'>
                                        <h6 className='normal-font m-0' style={{color: '#243445'}}>Weak Words</h6>
                                        <div className='d-flex gap-2 align-items-end'>
                                            <p className='normal-font m-0' style={{color: '#243445'}}>(24%)</p>
                                            <progress value='24' max='100' style={{height: '20px', width: '17.4em' , maxWidth: '100%'}}/>
                                        </div>
                                    </div>
                                    <div className='mt-1'>
                                        <h6 className='normal-font m-0' style={{color: '#243445'}}>Filler Words</h6>
                                        <div className='d-flex gap-2 align-items-end'>
                                            <p className='normal-font m-0' style={{color: '#243445'}}>(24%)</p>
                                            <progress value='24' max='100' style={{height: '20px', width: '17.4em' , maxWidth: '100%'}}/>
                                        </div>
                                    </div>
                                    <div className='mt-1'>
                                        <h6 className='normal-font m-0' style={{color: '#243445'}}>Conciseness Score</h6>
                                        <div className='d-flex gap-2 align-items-end'>
                                            <p className='normal-font m-0' style={{color: '#243445'}}>(24%)</p>
                                            <progress value='24' max='100' style={{height: '20px', width: '17.4em' , maxWidth: '100%'}}/>
                                        </div>
                                    </div>
                                    <div className='mt-1'>
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
                    <div className='py-4 px-4 rounded-4' style={{border: '1px solid #A6A6A6', boxShadow: 'rgba(0, 0, 0, 0.5) -4px 8px 11px -4px'}}>

                    </div>
                </div>
            /</div>

        </div>
    </>
  )
}
