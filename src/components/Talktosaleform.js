import React from 'react'
import { useState } from 'react';

export default function Talktosaleform() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
    
      const [sucessmsg, Setsucessmsg] = useState('')
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch(
            "https://bolsta.nyraleadership.com/webcam-api/talk-to-sale-data",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            }
          );
    
          if (response.ok) {
            Setsucessmsg('Thank you for Submiting')
            setFormData({ name: "", email: "", message: "" });
          } else {
            alert("Failed to send message. Please try again.");
          }
        } catch (error) {
          console.error("Error sending message:", error);
          alert("An error occurred. Please try again.");
        }
      };
  return (
    <>
    <button
                className="btn btn-success rad_button"
                data-bs-toggle="modal"
                data-bs-target="#talkToSalesModal"
              >
                Talk to Representative 
              </button>
              <div
        className="modal fade"
        id="talkToSalesModal"
        tabIndex="-1"
        aria-labelledby="talkToSalesModalLabel"
        aria-hidden="true"
        style={{top: '15%'}}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="talkToSalesModalLabel" style={{color: 'black'}}>
                Talk to Representative 
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label" style={{color: 'black'}}>Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" style={{color: 'black'}}>Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" style={{color: 'black'}}>Message</label>
                  <textarea
                    name="message"
                    className="form-control"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{background: 'linear-gradient(90deg, rgb(58 220 255) 0%, rgba(92, 230, 172, 1) 100%)', color: 'black'}}>
                  Send
                </button>
                <p className="mt-4" style={{color: 'green', textAlign: 'center'}}>{sucessmsg}</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
