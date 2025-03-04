import React from 'react'
import '../Admin.css'
import Addpersonform from '../../../components/Addpersonform'

export default function Addperson() {
  return (
    <>
    <div className="container-fluid" style={{ paddingLeft: "0px", paddingRight: "0px" }}>
        <div className="row flex-nowrap" style={{'--bs-gutter-x' : '0px'}}>

        <div className="container analyzedatadiv" >
            <div className='px-md-3 pt-md-5 pt-5 d-flex flex-column flex-md-row justify-content-between'>
                <h2 className='fw-bold' style={{color: '#243445'}}>Add Person</h2>
                <div className='d-flex flex-column flex-md-row  gap-2'>
                    <button className='d-flex py-2 px-2 gap-2 rounded border-0' style={{backgroundColor: '#243445'}}>
                        <img src='/icons/pdf.svg' alt='pdf-icon'/>
                        <h6 className='normal-font text-white m-0' style={{whiteSpace: 'nowrap', lineHeight: 2}}>SAMPLE EXCEL</h6>
                    </button>
                    <button className='d-flex py-2 px-2 gap-2 rounded border-0' style={{backgroundColor: '#243445'}}>
                        <img src='/icons/pdf.svg' alt='pdf-icon'/>
                        <h6 className='normal-font text-white m-0' style={{whiteSpace: 'nowrap', lineHeight: 2}}>UPLOAD EXCEL</h6>
                    </button>
                </div>
            </div>
            <div className='mt-1 px-md-4 pt-md-3 '>
                <div className="row m-0 py-2 rounded" style={{backgroundColor: '#243445'}}>
                    <div className="col-12 col-md-4 text-white">Name</div>
                    <div className="col-12 col-md-4 text-white">Email</div>
                    <div className="col-12 col-md-4 text-white"></div>
                </div>
                <Addpersonform />
            </div>

        
        </div>
        </div>
        </div>
    </>
  )
}
