import React from 'react'

export default function AddPersonformfields({setformfields, formfield, fieldno}) {

    console.log(fieldno)

    const increaseformfield = () => {
        setformfields(formfield + 1)
    }
    const decreaseformfield = () => {
        setformfields(formfield -1 )
    }
  return (
    <>
    <div className='row py-2  gap-sm-0 gap-2'>
    <div className="col-12 col-md-4 text-white">
                    <input type='name' name='name' placeholder='Enter Your Name' className='w-100 rounded normal-font py-1 px-1' style={{backgroundColor: '#EAEAEA'}}/>
                    </div>
                    <div className="col-12 col-md-4 text-white ">
                        <input type='email' name='email' placeholder='Enter Your Email' className='w-100 rounded normal-font py-1 px-1' style={{backgroundColor: '#EAEAEA'}}/>
                    </div>
                    <div className="col-12 col-md-4 text-white d-flex justify-content-center">
                    {fieldno===0 ? (<button className='d-flex py-1 px-3 gap-2 rounded border-0 ' style={{backgroundColor: '#243445'}}  onClick={increaseformfield}>
                        <img src='/icons/plus.svg' alt='addperson-icon'/>
                         <h6 className='text-white m-0' style={{whiteSpace: 'nowrap', lineHeight: 2}}>ADD PERSON</h6>
                    </button>) :
                    (
                        <button className='d-flex py-1 px-3 gap-2 rounded border-0 ' style={{backgroundColor: '#243445'}}  onClick={decreaseformfield}>
                        <img src='/icons/minus.svg' width='18px'height='32px' alt='addperson-icon'/>
                         <h6 className='text-white m-0' style={{whiteSpace: 'nowrap', lineHeight: 2}}>DELETE PERSON</h6>
                    </button>
                    )}
        </div>
        </div>
    </>
  )
}
