import React from 'react'
import PersonList from '../../../components/PersonList'
import '../Admin.css'

export default function SuperDashboard() {
    return (
        <>
            <div className="container-fluid d-flex flex-column gap-4" >
                <div className=' pt-md-3 pt-sm-5 pt-5 d-block ' style={{ borderBottom: '2px solid #ABABAB' }}>
                    <h2 className='fw-bold cus-heading' style={{ color: '#243445' }}>Dashboard</h2>
                </div>

                <div className='container-fluid ps-0 pe-0'>
                    <div className='rounded' style={{ backgroundColor: '#243445' }}>
                        <h4 className='fw-bold text-white'>XYZ pvt</h4>
                    </div>

                    <div className='row'>
                        <div className='col-lg-4'>
                            <p className='text-dark'>Primary Admin Name : ABCD XYZ</p>
                        </div>
                        <div className='col-lg-4'>
                        <p className='text-dark'>Primary Admin Email : ABCD@gmail.com</p>
                        </div>
                        <div className='col-lg-4'>
                        <p className='text-dark'>No. of Subscribers/Token : 1000</p>
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
