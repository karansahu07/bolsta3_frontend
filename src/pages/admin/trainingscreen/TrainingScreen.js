import React, { useState } from 'react'
import Navbar from '../../../components/Navbar'
import '../Admin.css'
import Traningvideocard from '../../../components/Traningvideocard'


export default function TrainingScreen() {

    const [videourl, setvideourl] = useState('');
    const [video , setvideo] = useState(false);

    const tooglevideo = () => {
        setvideo(false)
    }

    const title = 'Demo Title'
    const time = '5:00'
    const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
    const thumbnail = '/admin/videodemo.jpg'
  return (
    <div className="container-fluid" style={{ paddingLeft: "0px", paddingRight: "0px" }}>
    <div className="row flex-nowrap" style={{'--bs-gutter-x' : '0px'}}>
      
    <div className="container trainingscreendiv analyzedatadiv">
    <div className="row w-100 pt-3 ps-3">
    <Traningvideocard title={title} time={time} description={description} thumbnail={thumbnail} setvideourl={setvideourl} setvideo={setvideo}/>
    <Traningvideocard title={title} time={time} description={description} thumbnail={thumbnail} setvideourl={setvideourl} setvideo={setvideo}/>
    <Traningvideocard title={title} time={time} description={description} thumbnail={thumbnail} setvideourl={setvideourl} setvideo={setvideo}/>
    <Traningvideocard title={title} time={time} description={description} thumbnail={thumbnail} setvideourl={setvideourl} setvideo={setvideo}/>
    <Traningvideocard title={title} time={time} description={description} thumbnail={thumbnail} setvideourl={setvideourl} setvideo={setvideo}/>
    </div>
    </div>
    {video && (
        <div className='d-flex position-absolute bg-blue w-100 h-100' style={{background: '#000000bd'}}>
                <button className="close-button position-absolute text-black bg-white d-block fs-6 rounded-circle" style={{right: '10%', top: '10%'}} onClick={tooglevideo}>
                ✕
              </button>
              <div>
                <video src={videourl} className='w-50 h-50'/>
              </div>
        </div>
    )}


    </div>
</div>
  )
}
