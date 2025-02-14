import React, { useState, useRef, useEffect, Suspense } from 'react';
import Webcam from 'react-webcam';
import * as faceapi from 'face-api.js';
import './index.css';
import "./MobileMenu.css";
import { Link } from 'react-router-dom';
import Talktosaleform from './components/Talktosaleform';
import Loading from './components/Loading';


const SmileDetectionComponent = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [happyTime, setHappyTime] = useState(0);
  const [resultscreen, setresult] = useState(false);
  const [loader, setloader] = useState(false);
  const [totalDetectionTime, setTotalDetectionTime] = useState(0);
  const [fillerWordPercentage, setFillerWordPercentage] = useState(0);
  const [weakWordPercentage, setWeakWordPercentage] = useState(0);
  const [wordpermin, setwordpermin] = useState(0);
  const [concisePercentage, setConcisePercentage] = useState(0);
  const [summarizedData, setSummarizedData] = useState('');
  const [grammer, Setgrammerdata] = useState('');
  const [isDetectionRunning, setIsDetectionRunning] = useState(false);
  const [isWebcamActive, setIsWebcamActive] = useState(false);
  const [recordedVideoURL, setRecordedVideoURL] = useState(null);
  const [serverResponse, setServerResponse] = useState('');
  const [Consizness, setConsizness] = useState('');
  const [sessionId, setSessionId] = useState('');
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioRecorderRef = useRef(null);
  const streamRef = useRef(null);
  const detectionStartTimeRef = useRef(null);
  const happyStartTimeRef = useRef(null);
  const smilePercentageRef = useRef(0);
  const sessionemailid = useRef(sessionId);
  const totaltimee = useRef(totalDetectionTime);
  const originalword = useRef('');
  const filee = useRef('');
  const videoduration = useRef(0);
  const fillerwordcount = useRef(0)
  const weakwordcount = useRef(0)
  const fillerpercentage = useRef(0);
  const weakpercentage = useRef(0);
  const consiness = useRef(0);
  const consinesspercentage = useRef(0);
  const wordperminute = useRef(0);
  const summerydata = useRef(summarizedData);
  const grammardata = useRef(grammer);
  const uservideocount = useRef('')
  const userduration = useRef('')
  const userdurationused = useRef('')
  const uservideocountused = useRef('')
  const [uservideoinfocount, setuservideoinfocount] = useState(false)
  const [usererrormsg, setusererrormsg] = useState('Loading...')
  const [sections, setSections] = useState({
    spokenText: { height: "80px", buttonText: "+" },
    correctedContent: { height: "80px", buttonText: "+" },
    concisedContent: { height: "80px", buttonText: "+" },
    summerize: { height: "450px", buttonText: "+" },
  });

  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  

  const fillerWords = ["um", "uh", "like", "you know", "so", "actually", "basically", "literally", "just", "I mean", "kind of"];
  const weakWords = ["maybe", "perhaps", "probably", "possibly", "might", "could", "should", "would"];
  var weakwordper;
  var filwordper;
  var countword;

  useEffect(() => {
    const loadModels = async () => {
      console.log('Loading models...');
      await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
      await faceapi.nets.faceExpressionNet.loadFromUri('/models');
      console.log('Models loaded.');
      createSession();
      userinfo();
    };
    loadModels();
  }, []);

  const createSession = () => {
    const storedemail = localStorage.getItem('currentSession');
    if (storedemail) {
      
      const sessionjson = JSON.parse(storedemail);
      sessionemailid.current = sessionjson.idemail
      setSessionId(sessionjson.idemail);
    }
  };

  const userinfo = async () => {
    try{
      console.log(sessionemailid.current)
      const response = await fetch('https://bolsta.nyraleadership.com/webcam-api/api/user_video_details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
           },
        body: JSON.stringify({
          id: sessionemailid.current
         }),
      
      });
  
      if (!response.ok) throw new Error('Failed');
      const text = await response.json()
      userdurationused.current = text.durationused
      uservideocountused.current = text.video_count_used
      userduration.current = (text.duration * 60)
      uservideocount.current = text.video_count
      if((userduration.current - userdurationused.current) > 0 && (uservideocount.current - uservideocountused.current) > 0) setuservideoinfocount(true) 
      else{setusererrormsg( <>
        You are out of credit. Please reach out to the Representative for support.
        <br/>
        <div style={{marginTop: '10px'}}>
        <Talktosaleform />
        </div>
      </>);
      }
    }
    catch{
      console.error('error processing email')
    }
  }
  

  const startDetection = async () => {
    if (isDetectionRunning) return;
    setIsDetectionRunning(true);
    detectionStartTimeRef.current = Date.now();
    setHappyTime(0);
    setTotalDetectionTime(0);
    console.log('Detection started...');
    detectSmile();
  };

  const simulateLoaderProgress = () => {
    let simulatedProgress = 0;
    const interval = setInterval(() => {
      if (simulatedProgress < 95) {
        simulatedProgress += 1; // Increment progress
        setProgress(simulatedProgress); // Update progress
      } else {
        clearInterval(interval); // Stop simulation at 99%
      }
    }, 500); // Adjust the speed as necessary
  };

  const stopDetection = () => {
    if (!isDetectionRunning) return;
    setIsDetectionRunning(false);
  
    if (happyStartTimeRef.current) {
      setHappyTime((prev) => prev + (Date.now() - happyStartTimeRef.current) / 1000);
      happyStartTimeRef.current = null;
    }
  
    const totalTime = (Date.now() - detectionStartTimeRef.current) / 1000;
    totaltimee.current = totalTime;
    setTotalDetectionTime(totalTime);
  
    // Calculate the final smile percentage after the stop
    const finalSmilePercentage = totalTime > 0 ? (happyTime / totalTime) * 100 : 0; // Update the state with final smile percentage
    
    smilePercentageRef.current = finalSmilePercentage;  // Update ref value
  
    console.log(`Detection stopped.`);
    console.log(`Total detection time: ${totalTime.toFixed(2)} seconds`);
    console.log(`Total happy time: ${happyTime.toFixed(2)} seconds`);
    console.log(`Smiling percentage: ${finalSmilePercentage.toFixed(2)}%`);
  };
  

  const detectSmile = async () => {
        const videoElement = webcamRef.current?.video;
    
        if (
          !videoElement ||
          videoElement.paused ||
          videoElement.ended ||
          !faceapi.nets.faceExpressionNet.isLoaded
        ) {
          return setTimeout(() => detectSmile(), 100);
        }
    
        if (videoElement && faceapi.nets.tinyFaceDetector.isLoaded) {
          const options = new faceapi.TinyFaceDetectorOptions();
          const result = await faceapi
            .detectSingleFace(videoElement, options)
            .withFaceExpressions();
    
          if (result) {
            const happiness = result.expressions.happy;
            console.log(`Happiness: ${Math.round(happiness * 100)}%`);
    
            if (happiness > 0.5) {
              if (!happyStartTimeRef.current) {
                happyStartTimeRef.current = Date.now();
                console.log('User started smiling...');
              }
            } else if (happyStartTimeRef.current) {
              const smilingDuration = (Date.now() - happyStartTimeRef.current) / 1000;
              setHappyTime((prev) => prev + smilingDuration);
              happyStartTimeRef.current = null;
              console.log('User stopped smiling.');
            }
          }
    
          setTotalDetectionTime((Date.now() - detectionStartTimeRef.current) / 1000);
        }
    
        setTimeout(detectSmile, 100);
      };
  

  const startWebcam = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    streamRef.current = stream;

    if (webcamRef.current) {
      webcamRef.current.video.srcObject = stream;
    }

    setIsWebcamActive(true);
    console.log('Webcam started');
  };

  const stopWebcam = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }

    setIsWebcamActive(false);
    console.log('Webcam stopped');
  };

  const startRecording = async () => {
    if (!isWebcamActive) {
      await startWebcam();
    }
    setIsRecording(true);
    startDetection();
    const videooptions = {
  mimeType: 'video/webm;codecs=vp9',
  videoBitsPerSecond: 500000 // Lower the bitrate (500 kbps for small size)
};



    const mediaRecorder = new MediaRecorder(streamRef.current, videooptions);
    const chunks = [];
    const audiochunks = [];
    const audioSteam = new MediaStream(streamRef.current.getAudioTracks());
    const options = { mimeType: 'audio/webm;codecs=opus', audioBitsPerSecond: 16000 };
    const audioRecorder = new MediaRecorder(audioSteam, options);
    audioRecorder.start();
    audioRecorderRef.current = audioRecorder;
    console.log('Audio Recording Started');

    audioRecorder.ondataavailable = (e) => {
      audiochunks.push(e.data);
    }

    audioRecorder.onstop = async () => {
      const blob = new Blob(audiochunks, { type: 'audio/webm'});
      const audiourl = URL.createObjectURL(blob);
      console.log(audiourl);
      console.log('audio saved locally ');

      const formData = new FormData();
      const timestamp = Date.now();
      const filename = `recorded-audio-${timestamp}.mp3`;
      
      
    
      formData.append('videoFile', blob, filename);
      try {
        const response = await fetch('https://bolsta.nyraleadership.com/webcam-api/upload', {
          method: 'POST',
          body: formData,
        });
    
        if (!response.ok) throw new Error('Failed to upload video');
        const text = await response.json()
        console.log('Video uploaded successfully!');
        videoduration.current = Math.round(text[1]);
        console.log('Server response:', text[0]);
        originalword.current = text[0];
    
        let fillerCount = 0;
        let weakCount = 0;
        const highlightWords = (text) => {
          return text
            .split(/\b/)
            .map((word, index) => {
              const cleanWord = word
                .toLowerCase()
                .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    
              if (fillerWords.includes(cleanWord)) {
                fillerCount++;
                return (
                  <span key={index} style={{ backgroundColor: 'red', color: 'white' }}>
                    {word}
                  </span>
                );
              } else if (weakWords.includes(cleanWord)) {
                weakCount++;
                return (
                  <span key={index} style={{ backgroundColor: 'yellow' }}>
                    {word}
                  </span>
                );
              } else {
                return word;
              }
            });
        };
    
        setServerResponse(highlightWords(text[0]));

        fillerwordcount.current = fillerCount;
        weakwordcount.current = weakCount;
    
        const totalWords = text[0].split(/\b/).length / 2;
        weakwordper = ((weakCount / totalWords) * 100).toFixed(2);
        filwordper = ((fillerCount / totalWords) * 100).toFixed(2);
        countword = (totalWords / (totaltimee.current / 60));
        wordperminute.current = (totalWords / (totaltimee.current / 60));
        setwordpermin((totalWords / (totaltimee.current / 60)));
        fillerpercentage.current = ((fillerCount / totalWords) * 100).toFixed(2);
        weakpercentage.current = ((weakCount / totalWords) * 100).toFixed(2);
        setFillerWordPercentage(((fillerCount / totalWords) * 100).toFixed(2));
        setWeakWordPercentage(((weakCount / totalWords) * 100).toFixed(2));
    
        const [conciseResponse, grammarFixResponse] = await Promise.all([
          fetch('https://bolsta.nyraleadership.com/webcam-api/api/conciseness', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content: text }),
          }),
          fetch('https://bolsta.nyraleadership.com/webcam-api/api/grammarFix', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content: text }), // Use the original content for grammar fix
          }),
        ]);
      
        // Process the concise API response
        if (conciseResponse.ok) {
          const conciseData = await conciseResponse.json();
          console.log('Conciseness Response:', conciseData);
          const concisedWords = conciseData.concised;
          consiness.current = concisedWords;
          setConsizness(concisedWords);
      
          const originalWords = text[0];
          const conciseScore = Math.round(
            ((originalWords.length - concisedWords.length) / originalWords.length) * 100
          );
          consinesspercentage.current = conciseScore;
          setConcisePercentage(conciseScore);
        } else {
          console.error('Error processing conciseness');
        }
      
        // Process the grammar fix API response
        if (grammarFixResponse.ok) {
          const grammarFixData = await grammarFixResponse.json();
          console.log('Grammar Fix Response:', grammarFixData);
          grammardata.current = grammarFixData.corrected;
          Setgrammerdata(grammarFixData.corrected);
        } else {
          console.error('Error processing grammar fix');
        }
       
    
        // Summarize after conciseness, independent of grammarFix
        const summarizeResponse = await fetch('https://bolsta.nyraleadership.com/webcam-api/api/summarizedata', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ content : {
            fillerWords: Math.round(fillerpercentage.current) + '%',
            weakWords: Math.round(weakpercentage.current) + '%',
            conciseness: Math.round(consinesspercentage.current) + '%',
            smiling: Math.round(smilePercentageRef.current.toFixed(2)) + '%',
            speakingSpeed: Math.round(wordperminute.current) + ' words per minute',
          }}),
        });
    
        const summarizeData = await summarizeResponse.json();
        console.log(filwordper);
        console.log(weakwordper);
        console.log(consiness.current);
        console.log(smilePercentageRef.current);
        console.log(countword);
        console.log(summarizeData);
        summerydata.current = summarizeData.corrected.replace(/\n/g, "<br>")
        setSummarizedData(summarizeData.corrected.replace(/\n/g, "<br>"));

        //send data to server
        const senddatatoserver = await fetch('https://bolsta.nyraleadership.com/webcam-api/api/save_data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({content: {
            user_id: sessionemailid.current,
            video_name: filee.current,
            filler_words_percentage: Math.round(fillerpercentage.current),
            filler_words_count: fillerwordcount.current,
            weak_words_percentage: Math.round(weakpercentage.current),
            weak_words_count: weakwordcount.current,
            conciseness_score: Math.round(consinesspercentage.current),
            smiling_percentage: Math.round(smilePercentageRef.current.toFixed(2)),
            speed: Math.round(wordperminute.current),
            what_you_spoke: originalword.current,
            grammar: grammardata.current,
            concise_version: consiness.current,
            summarize_version: summerydata.current,
            duration: videoduration.current
          }}),
        });

        const serverResponse = await senddatatoserver.json()
        console.log(serverResponse)
        setresult(true);
        setloader(false);



      } catch (error) {
        console.error('Error processing requests:', error);
      }
      
    }

    
    mediaRecorder.ondataavailable = (e) => {
      chunks.push(e.data);
    };

    mediaRecorder.onstop = async () => {
      const blob = new Blob(chunks, { type: 'video/mp4' });
      const videoURL = URL.createObjectURL(blob);
      console.log(videoURL)
      setRecordedVideoURL(videoURL);


    
      console.log('Recording saved locally.');
    
      const formData = new FormData();
      const timestamp = Date.now();
      const filename = `recorded-video-${timestamp}.mp4`;
      filee.current = filename;
    
      formData.append('videoFile', blob, filename);
      setIsUploading(true);
      simulateLoaderProgress(); 
    
      try {
        const response = await fetch('https://bolsta.nyraleadership.com/webcam-api/uploadvideo', {
          method: 'POST',
          body: formData,
        });
    
        if (!response.ok) throw new Error('Failed to upload video');
        setProgress(100);
        console.log('Video uploaded successfully!');
      }
   catch (error) {
        console.error('Error processing requests:', error);
      }
      finally {
        setTimeout(() => { 
          setIsUploading(false); // Hide loader
        }, 1000); // Add a delay to ensure 100% is visible
      }
    };    
    
    mediaRecorder.start();
    mediaRecorderRef.current = mediaRecorder;
    console.log('Recording started');
    
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
    if(audioRecorderRef.current) {
      audioRecorderRef.current.stop();
    }
    stopWebcam();
    stopDetection();
    setloader(true);

    console.log('Recording stopped');
  };

  const toggleSection = (section) => {
    setSections((prev) => ({
      ...prev,
      [section]: {
        height: prev[section].height === "80px" || prev[section].height === "450px" ? "auto" : section === "summerize" ? "450px" : "80px",
        buttonText: prev[section].buttonText === "+" ? "-" : "+",
      },
    }));
  };

  
  const speakText = () => {
    const text = document.getElementById('correctedContent').textContent; // Get the text from the div
    const utterance = new SpeechSynthesisUtterance(text); // Create a speech utterance
    window.speechSynthesis.speak(utterance); // Speak the utterance
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const tryagain = () => {
    if(resultscreen){
      setresult(false);
      setIsRecording(false)
    }
  }

  return (
    <div style={{
    color: 'white',
    background: 'linear-gradient(150deg, rgb(58, 109, 112) 0%, rgb(36, 52, 69) 13%, rgb(36, 52, 69) 88%, rgb(58, 109, 112) 99%)',
    }}>
      

      <div className="container-fluid" style={{
            paddingLeft: '0px',
            paddingRight: '0px',
      }}>
  <div className="row flex-nowrap" style={{'--bs-gutter-x' : '0px'}}>
  <div
      style={{
        width: "0%",
        padding: 0,
        margin: 0,
        transition: "width 0.3s ease",
      }}
      className="outer-container"
    >
      {/* Hamburger Icon */}
      {!isOpen && (
        <div className="hamburger-menu" onClick={toggleMenu}>
        <div style={{display:'flex',position:'fixed',left:0,paddingLeft: '17px',flexDirection: 'column'}}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
        </div>
        <img
              className="img-fluid"
              src="/bolsta_logo.png"
              alt="Logo"
              style={{paddingRight: '10px', width: '120px'}}
            />
      </div>
      )}

      {/* Sidebar Menu */}
      <div className={`sidebar-menu ${isOpen ? "open" : ""}`}>
        {/* Close Button */}
        {isOpen && (
          <button className="close-button" onClick={toggleMenu}>
            ✕
          </button>
        )}

        <div className="d-flex flex-column align-items-sm-start px-4 pt-2 text-white min-vh-100">
          <a
            href="/"
            className="d-flex align-items-center pb-3 pt-4 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <span className="fs-5 d-inline">
              <img
                className="img-fluid"
                src="/video/images/black_bolsta_logo.png"
                alt="Logo"
              />
            </span>
          </a>
          <ul
            className="nav nav-pills flex-column mb-auto align-items-center align-items-sm-start"
            id="menu"
            style={{ width: "100%" }}
          >
            <li
              className="nav-item mt-2"
              style={{
                width: "100%",
                background:
                  "linear-gradient(90deg, rgba(92, 230, 172, 1) 0%, rgb(58 220 255) 100%)",
                borderRadius: 27,
              }}
            >
              <Link
                to="/practice"
                className="nav-link align-middle px-0"
                style={{
                  color: "black",
                }}
                onClick={tryagain }
              >
                <img
                  className="img-fluid"
                  src="/video/images/Vector.png"
                  alt="Practice Icon"
                  style={{ paddingLeft: 10 }}
                />
                <span className="ms-1 d-inline">Practice</span>
              </Link>
            </li>
            <li className="nav-item mt-2" style={{ width: "100%" }}>
              <Link
                to="/analyze-data"
                className="nav-link px-0 align-middle"
                style={{
                  color: "black",
                }}
              >
                <img
                  className="img-fluid"
                  src="/video/images/Vector.png"
                  alt="Video Icon"
                  style={{ paddingLeft: 10 }}
                />{" "}
                <span className="d-inline">My Video</span>
              </Link>
            </li>
          </ul>
          <hr />
          <Link
                to="/"
                className="nav-link px-0 mb-4 align-middle"
                style={{
                  color: "black",
                  position: 'absolute',
                  bottom: 0
                }}
              >
                <img
                  className="img-fluid"
                  src="/video/images/Vector.png"
                  alt="Video Icon"
                  style={{ paddingLeft: 10 }}
                />{" "}
                <span className="d-inline">Log Out</span>
              </Link>
        </div>
      </div>
    </div>
    <div className="col py-3">
      {!resultscreen && (
      <div className="container " id="main_screen">
        <div className="row" style={{ textAlign: "center" }}>
          <div className="col-md-12" style={{ marginBottom: 12 }}>
            <div style={{}}>
              <h3>
              Bolsta your everyday communication
              </h3>
            </div>
            <div>
              <h6>
                Record, Analyze, and Improve with Bolsta
              </h6>
            </div>
          </div>
        </div>
        {/*<div style="border: 1px solid;">*/}
        <div>
          {/*<div class="row" style="background: #e9e9e966; margin: 6px;">*/}
          <div className="row" style={{}}>
          {uservideoinfocount ? (
              <div>
                <h5 style={{textAlign: 'center', color: '#4ce2d4'}}>{`${(Math.round(userduration.current - userdurationused.current)/60) } minutes left of  ${userduration.current/60} | ${uservideocountused.current} video of ${uservideocount.current}` }</h5>
              </div>
            ) : (
              <div>
                <h5 style={{textAlign: 'center', color: '#4ce2d4'}}>{`${Math.round((userduration.current - userdurationused.current)/60) } minutes left of  ${userduration.current/60} | ${uservideocountused.current} video of ${uservideocount.current}` }</h5>
              </div>
            )}
            <div className="col-md-12 bg_img" style={{ textAlign: "center" }}>
              <div className="row">
                <div className="col-md-1" />
                <div
                  className="col-md-10"
                  style={{ position: "relative", top: 12 }}
                >
                  <div className="embed-responsive embed-responsive-16by9">
                    
                    {!isWebcamActive && (
        <div
          style={{
            width: "100%",
                 background: "black",
                        border: "2px solid white",
                        borderRadius: 32,
                        height: '50vh',
          }}
        >
        </div>
      )}

      {/* Only render the Webcam component after Start Recording is clicked */}
      {isWebcamActive && (
        <Suspense fallback={<Loading/>}>
          <Webcam
            ref={webcamRef}
            audio={false}
            className="embed-responsive-item vidframesize"
            videoConstraints={{ width: 640, height: 480 }}
            style={{
                        background: "black",
                        border: "2px solid white",
                        borderRadius: 32
            }}
          />
          </Suspense>
      )}
                  </div>
                </div>
                <div className="col-md-1" />
              </div>
              <div className="row">
                <div className="col-md-2" />
                {/*<div class="col-md-8 remove_bg" style="background: #e9e9e966; margin: 6px; border: 6px solid white; border-radius: 26px;">*/}
                <div className="col-md-8 remove_bg" style={{}}>
                  <div
                    className="row"
                    style={{
                      paddingTop: 25,
                      paddingBottom: 40,
                      alignItems: "baseline"
                    }}
                  >
                    <div className="col-md-12">
                      {uservideoinfocount ? ( !isRecording ? ( 
                      <button
                        onClick={startRecording}
                        className="camera_btn"
                        id="startRecording"
                        style={{padding: '10px 25px'}}
                      >
                        Start Recording
                      </button>
                      ) :
                       (
                        <button
                          className="camera_btn"
                          onClick={stopRecording}
                          id="stopRecording"
                          style={{padding: '10px 25px'}}
                        >
                          Stop Recording
                        </button>)
                    ) : (!uservideoinfocount && (
                          <div> 
                            <h5 style={{marginTop: '20px',color: '#4ce2d4'}}>{usererrormsg}</h5>
                          </div>
                      ))
                    }
                    
                       
                    </div>
                  </div>
                </div>
                <div className="col-md-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
      {/* Result code */}
      {resultscreen && (
      <div className="container shivcontainerpractice" id="result_screen">
        <div style={{}}>
          <div className="row" style={{ margin: 6 }}>
            <div className="col-md-12 bg_img" style={{ paddingTop: 24 }}>
              {/*<div class="row" style="align-items: center;">*/}
              <div className="row">
                {/*<div class="col-md-1"></div>*/}
                <div className="col-md-6 shivvideoplayer" style={{ paddingLeft: 0 }}>
                  <div style={{ marginRight: 8 }}>
                    {/* <img
                      className="img-fluid loading_image"
                      src="/video/images/giphy.webp"
                      style={{ height: "100%", border: "4px solid white" }}
                    /> */}
                    
                    <video
                      controls
                      className="img-fluid video_bg_img"
                      style={{
                        height: "100%",
                        border: "4px solid white",
                      }}
                      id="myVideo"
                      playsInline
                    >
                      <source src={recordedVideoURL} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    {isUploading && (
                                         <div>
                                         <span>Uploading in Progress</span>
                         <div
                           style={{
                             width: '100%',
                             height: '13px',
                             background: '#243445',
                             position: 'relative',
                             marginBottom: '20px',
                             overflow: 'hidden',
                             borderRadius: '15px',
                             border: '1px white solid'
                           }}
                         >
                           
                           <div
                             style={{
                               width: `${progress}%`,
                               height: '100%',
                               background: '#3fddf2',
                               transition: 'width 0.2s linear',
                             }}
                           />
                         </div>
                       </div>

                    )}
                    <audio
                      id="audioPlayback_value"
                      controls=""
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
                <div
                  className="col-md-6 change_setting"
                  style={{ display: "grid", border: "4px solid white" }}
                >
                  <div
                    className="row"
                    style={{
                      alignItems: "center",
                      paddingTop: 26,
                      paddingBottom: 25
                    }}
                  >
                    <div
                      className="col-md-12"
                      style={{
                        textAlign: "left"
                      }}
                    >
                      <div
                        className="row"
                        style={{ alignItems: "center", marginBottom: 15 }}
                      >
                        <div className="col-md-5 speeddialdiv" style={{justifyContent:'center'}}>
                          {/* <div className="speedo">
                            <div className="face">
                            <div className={`needle ${
    Math.round(wordpermin) < 140
      ? 'slow'
      : Math.round(wordpermin) > 140 && Math.round(wordpermin) < 160
      ? 'medium'
      : 'fast'
  }`} />
                            </div>
                          </div> */}
                          <div
  role="progressbar"
  aria-valuenow={75}
  aria-valuemin={0}
  aria-valuemax={100}
  style={{ '--value': ` ${
    wordperminute.current < 140
      ? 10
      : wordperminute.current > 140 && wordperminute.current < 160
      ? 50
      : 90
  }` }}
></div>
                        </div>
                        <div className="col-md-7">
                          <h3 id="words_per_minute" style={{textAlign:'center',paddingTop:'10px'}}>Speed: {Math.round(wordpermin)} WPM</h3>
                        </div>
                      </div>
                      <h3 className="sml_size" id="week_words">
                        Weak Words: {Math.round(weakWordPercentage)}% ( {weakwordcount.current} words )
                      </h3>
                      <progress
                        className="colored weak_word_color"
                        id="weak_words_progress_bar"
                        value={Math.round(weakWordPercentage)}
                        max={100}
                      />
                      <h3
                        className="sml_size"
                        style={{ marginBottom: 0 }}
                        id="filler_words"
                      >
                        Filler Words: {Math.round(fillerWordPercentage)}% ( {fillerwordcount.current} words )
                      </h3>
                      <progress
                        className="colored filler_word_color"
                        id="filler_words_progress_bar"
                        value={Math.round(fillerWordPercentage)}
                        max={100}
                      />
                      <h3 className="sml_size" id="concisePercentage">
                        Conciseness Score: {Math.round(concisePercentage)}%
                      </h3>
                      <progress
                        className="colored conciseness_word_color"
                        id="concisePercentage_progress_bar"
                        value={Math.round(concisePercentage)}
                        max={100}
                      />
                      <h3 className="sml_size" id="smilescore">
                        Smiling: {Math.round(smilePercentageRef.current.toFixed(2))}%
                      </h3>
                      <progress
                        className="colored smiling_word_color"
                        id="smilescore_progress_bar"
                        value={Math.round(smilePercentageRef.current.toFixed(2))}
                        max={100}
                      />
                      <Link
                        to="/practice"
                        style={{ textDecoration: "none" }}
                      >
                        <button
                          className="form-control try_btn"
                          style={{ fontSize: 12}}
                          onClick={tryagain}
                        >
                          Let’s Try Again!
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 shivsummerize">
                  <div
                    className="row remove_css"
                    style={{
                      marginRight: 8,
                      background: "#e9e9e966",
                      marginTop: 28,
                      paddingLeft: 6,
                      paddingRight: 6,
                      paddingBottom: 6
                    }}
                  >
                    <div
                      className="col-md-12 change_result_css"
                      style={{
                        textAlign: "left",
                        marginTop: 10,
                        background: "white",
                        paddingTop: 12,
                        paddingBottom: 12,
                        paddingLeft: 12
                      }}
                    >
                      {/*<div class="row">  */}
                      <h4 style={{ color: "#3d75c3"}}>
                        Summary:
                      </h4>
                      <span
                        className="form-control"
                        style={{
                          fontFamily: "neuethinlight",
                          border: "none",
                          background: "white",
                          overflow: "hidden",
                          height: sections.summerize.height
                        }}
                        id="summerize"
                        dangerouslySetInnerHTML={{ __html: `${summarizedData}` }}
                      >
                      </span>
                      <button
                        className="summerizeplusbtn try_btn"
                        onClick={() => toggleSection("summerize")}
                        style={{
                          float: "right",
                          fontSize: 12,
                          borderRadius: 4
                        }}
                      >
                        {sections.summerize.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6"
                  style={{ background: "#e9e9e966", marginTop: 28 }}
                >
                  <div
                    className="row remove_css"
                    style={{ paddingLeft: 6, paddingRight: 6 }}
                  >
                    {/*<div class="col-md-1"></div>*/}
                    <div
                      className="col-md-12 change_result_css"
                      style={{
                        textAlign: "left",
                        marginTop: 10,
                        background: "white",
                        paddingTop: 12,
                        paddingBottom: 12,
                        paddingLeft: 12,
                        color: "black"
                      }}
                    >
                      <div className="row">
                        <div className="col-md-12">
                          <h4 style={{ color: "#3d75c3" }}>
                            What You Spoke:
                          </h4>
                        </div>
                        {/*<div class="col-md-2 col-4" style="text-align: center;"> */}
                        {/*<button class="try_btn" id="speak" style="font-size: 12px; font-family: neuethinbold; border-radius: 4px;">Read Text</button>*/}
                        {/*</div>    */}
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <p
                            className="form-control"
                            style={{
                              fontFamily: "neuethinlight",
                              border: "none",
                              background: "white",
                              marginBottom: 0,
                              overflow: "hidden",
                              height: sections.spokenText.height
                            }}
                            id="spokenText"
                            >
                              {serverResponse}
                          </p>
                          <button
                            className="spokeplusbtn try_btn"
                            onClick={() => toggleSection("spokenText")}
                            style={{
                              float: "right",
                              fontSize: 12,
                              borderRadius: 4
                            }}
                          >
                            {sections.spokenText.buttonText}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="row remove_css"
                    style={{ paddingLeft: 6, paddingRight: 6 }}
                  >
                    <div
                      className="col-md-12 change_result_css"
                      style={{
                        textAlign: "left",
                        marginTop: 10,
                        background: "white",
                        paddingTop: 12,
                        paddingBottom: 12,
                        paddingLeft: 12,
                        color: "black"
                      }}
                    >
                      <div className="row">
                        <div className="col-md-8 col-7">
                          <h4 style={{ color: "#3d75c3" }}>
                            Grammar Correction:
                          </h4>
                        </div>
                        <div
                          className="col-md-4 col-5"
                          style={{ textAlign: "center" }}
                        >
                          <button
                            className="try_btn"
                            onClick={speakText}
                            id="speak_correctedcontent"
                            style={{
                              fontSize: 12,
                              borderRadius: 4
                            }}
                          >
                            Hear the Pronunciation
                          </button>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <p
                            className="form-control"
                            style={{
                              fontFamily: "neuethinlight",
                              border: "none",
                              background: "white",
                              overflow: "hidden",
                              marginBottom: 0,
                              height: sections.correctedContent.height
                            }}
                            id="correctedContent"
                            >
                              {grammer}
                            </p>
                          <button
                            className="grammerplusbtn try_btn"
                            onClick={() => toggleSection("correctedContent")}
                            style={{
                              float: "right",
                              fontSize: 12,
                              borderRadius: 4
                            }}
                          >
                            {sections.correctedContent.buttonText}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="row remove_css"
                    style={{ paddingLeft: 6, paddingRight: 6 }}
                  >
                    <div
                      className="col-md-12 change_result_css"
                      style={{
                        textAlign: "left",
                        marginTop: 10,
                        background: "white",
                        paddingTop: 12,
                        paddingBottom: 12,
                        paddingLeft: 12,
                        color: "black"
                      }}
                    >
                      <h4 style={{ color: "#3d75c3" }}>
                        Suggested Concise Version:
                      </h4>
                      <p
                        className="form-control"
                        style={{
                          fontFamily: "neuethinlight",
                          border: "none",
                          background: "white",
                          overflow: "hidden",
                          marginBottom: 0,
                          height: sections.concisedContent.height
                        }}
                        id="concisedContent"
                        >{Consizness}</p>
                      <button
                        className="concisedplusbtn try_btn"
                        onClick={() => toggleSection("concisedContent")}

                        style={{
                          float: "right",
                          fontSize: 12,
                          borderRadius: 4
                        }}
                      >
                         {sections.concisedContent.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
      <div className="row">
        <div className="col-md-12 ">
          {(loader && 
          <div id="loader-wrapper" >
            <div id="loader" />
          </div>
          )}
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default SmileDetectionComponent;
