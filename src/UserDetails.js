import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './MobileMenu.css';

import './index.css';

function UserDetails() {
    const { userId } = useParams();
    // const [details, setDetails] = useState({});
    const [details, setDetails] = useState([]);
    const [sections, setSections] = useState({
        spokenText: { height: "80px", buttonText: "+" },
        correctedContent: { height: "80px", buttonText: "+" },
        concisedContent: { height: "80px", buttonText: "+" },
        summerize: { height: "450px", buttonText: "+" },
      });
      const fillerWords = ["um", "uh", "like", "you know", "so", "actually", "basically", "literally", "just", "I mean", "kind of"];
      const weakWords = ["maybe", "perhaps", "probably", "possibly", "might", "could", "should", "would"];

    useEffect(() => {
        fetch(`https://bolsta.nyraleadership.com/webcam-api/api/user_details`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: userId })
        })
        .then(response => response.json())
        .then(data => setDetails(data))
        .catch(error => console.log('Error fetching details:', error));
    }, [userId]);

    const toggleSection = (section) => {
        setSections((prev) => ({
          ...prev,
          [section]: {
            height: prev[section].height === "80px" || prev[section].height === "450px" ? "auto" : section === "summerize" ? "450px" : "80px",
            buttonText: prev[section].buttonText === "+" ? "-" : "+",
          },
        }));
      };

      const highlightWords = (text) => {
        return text
          .split(/\b/)
          .map((word, index) => {
            const cleanWord = word
              .toLowerCase()
              .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
  
            if (fillerWords.includes(cleanWord)) {
              return (
                <span key={index} style={{ backgroundColor: 'red', color: 'white'  }}>
                  {word}
                </span>
              );
            } else if (weakWords.includes(cleanWord)) {
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

      const speakText = () => {
        const text = document.getElementById('correctedContent').textContent; // Get the text from the div
        const utterance = new SpeechSynthesisUtterance(text); // Create a speech utterance
        window.speechSynthesis.speak(utterance); // Speak the utterance
      };
      const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    return (
	        <div className="container-fluid"
            style={{paddingLeft: 0, paddingRight: 0, background: 'linear-gradient(150deg, rgb(58, 109, 112) 0%, rgb(36, 52, 69) 13%, rgb(36, 52, 69) 88%, rgb(58, 109, 112) 99%)',}}
            >
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
              }}
            >
              <Link
                to="/practice"
                className="nav-link align-middle px-0"
                style={{
                  color: "black",
                }}
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
            <li className="nav-item mt-2" style={{ width: "100%", background:
                              "linear-gradient(90deg, rgba(92, 230, 172, 1) 0%, rgb(58 220 255) 100%)",
                            borderRadius: 27, }}>
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
	
        <div className="container">       
            {details.map(item => (
                            <div key={item.id} className="row my-2">
                                <div className="col-md-12">
                                <div className="container shivcontainer" id="result_screen">
        {/* <input id="inputId" hidden="" /> */}
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
                      <source src={`https://bolsta.nyraleadership.com/node/uploads/${item.video_name}`} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
            {/* <VideoPlayer 
            style={{
                height: "100%",
                border: "4px solid white",
              }}
            videoName={item.video_name}
            className="img-fluid video_bg_img"
             /> */}

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
    item.speed < 140
      ? 'slow'
      : item.speed > 140 && item.speed < 160
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
    item.speed < 140
      ? 10
      : item.speed > 140 && item.speed < 160
      ? 50
      : 90
  }` }}
></div>
                        </div>
                        <div className="col-md-7">
                          <h3 id="words_per_minute" style={{textAlign:'center',paddingTop:'10px'}}>Speed: {item.speed} WPM</h3>
                        </div>
                      </div>
                      <h3 className="sml_size" id="week_words">
                        Weak Words: {item.weak_words_percentage} % ( {item.weak_words_count} Words )
                      </h3>
                      <progress
                        className="colored weak_word_color"
                        id="weak_words_progress_bar"
                        value={item.weak_words_percentage}
                        max={100}
                      />
                      <h3
                        className="sml_size"
                        style={{ marginBottom: 0 }}
                        id="filler_words"
                      >
                        Filler Words: {item.filler_words_percentage} % ( {item.filler_words_count} Words )
                      </h3>
                      <progress
                        className="colored filler_word_color"
                        id="filler_words_progress_bar"
                        value={item.filler_words_percentage}
                        max={100}
                      />
                      <h3 className="sml_size" id="concisePercentage">
                        Conciseness Score: {item.conciseness_score}%
                      </h3>
                      <progress
                        className="colored conciseness_word_color"
                        id="concisePercentage_progress_bar"
                        value={item.conciseness_score}
                        max={100}
                      />
                      <h3 className="sml_size" id="smilescore">
                        Smiling: {item.smiling_percentage}%
                      </h3>
                      <progress
                        className="colored smiling_word_color"
                        id="smilescore_progress_bar"
                        value={item.smiling_percentage}
                        max={100}
                      />
                      <Link
                        to="/practice"
                        style={{ textDecoration: "none" }}
                      >
                        <button
                          className="form-control try_btn"
                          style={{ fontSize: 12 }}
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
                      <h4 style={{ color: "#3d75c3" }}>
                        Summarize:
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
                        dangerouslySetInnerHTML={{ __html: `${item.summarize_version}` }}
                      > 
                      </span>
                      <button
                        className="summerizeplusbtn try_btn"
                        onClick={() => toggleSection("summerize")}
                        style={{
                          float: "right",
                          fontSize: 12,
                          fontFamily: "neuethinbold",
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
                           {highlightWords(item.what_you_spoke)} 
                          </p>
                          <button
                            className="spokeplusbtn try_btn"
                            onClick={() => toggleSection("spokenText")}
                            style={{
                              float: "right",
                              fontSize: 12,
                              fontFamily: "neuethinbold",
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
                          <h4 style={{ color: "#3d75c3" }}  >
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
                              fontFamily: "neuethinbold",
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
                          {item.grammar}  
                          </p>

                          <button
                            className="grammerplusbtn try_btn"
                            onClick={() => toggleSection("correctedContent")}
                            style={{
                              float: "right",
                              fontSize: 12,
                              fontFamily: "neuethinbold",
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
                      >
                       {item.concise_version} 
                      </p>
                      <button
                        className="concisedplusbtn try_btn"
                        onClick={() => toggleSection("concisedContent")}
                        style={{
                          float: "right",
                          fontSize: 12,
                          fontFamily: "neuethinbold",
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
                                </div>
                            </div>
                        ))}
        </div>
                </div>
            </div>
        </div>

    );
}

export default UserDetails;
