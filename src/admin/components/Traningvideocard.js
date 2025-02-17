import React from 'react'

export default function Traningvideocard({title, time , description, thumbnail, setvideourl, setvideo}) {
    const updateurl = () => {
        setvideourl('./')
        setvideo(true)
    }
  return (
    <>
    <div className='col-12 col-md-4 text-black'>
    <div className='position-relative'>
        <img src={thumbnail} className='rounded w-100' alt='video-thumbanil'/>
        <img src='/icons/playbtn.svg' alt='play button' className='position-absolute' style={{left: '42%', top: '25%', cursor: 'pointer'}} onClick={updateurl}/>
        <div className='d-flex justify-content-between py-2 px-2'>
        <h4 className='' style={{color: '#243445'}}>{title}</h4>
        <p className='normal-font'>{time}</p>
        </div>
        <p className='normal-font px-2'>{description}</p>
    </div>
    </div>
    </>
  )
}
