import React, { useState } from 'react'
import AddPersonformfields from './AddPersonformfields'

export default function Addpersonform() {

    const [formfield, setformfields] = useState(1);

    const onsubmit = () => {

    }
  return (
    <div className='border-bottom' >
        
        <form className="py-2" action={onsubmit }>
                        {
                    [...Array(formfield)].map((_, i) => (
                        <AddPersonformfields key={i} fieldno={i} setformfields={setformfields} formfield={formfield}/>
                    ))
                }
                
                    <div className='d-flex justify-content-center mt-2'>
                    
                    <button className='d-flex py-1 px-3 gap-2 rounded border-0' style={{backgroundColor: '#243445'}} >
                        
                         <h6 className='text-white m-0' style={{whiteSpace: 'nowrap', lineHeight: 2}}>Submit</h6>
                         <img src='/icons/submit.svg' alt='submit-icon'/>
                    </button>
                    </div>
        </form>
    </div>
  )
}
