import { useState } from "react";
import useGet from "../../../hooks/useGet";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function AddCompany() {
  const [companyName, setCompanyName] = useState("");
  const [adminName, setAdminName] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [planType, setPlanType] = useState("monthly");
  const [planCount, setPlanCount] = useState(1);
  const [subscribers, setSubscribers] = useState(0);
  const [videosPerSubscriber, setVideosPerSubscriber] = useState(0);

  const [getcompanyState, companies ] = useGet("company")

  return (
    <div className="container py-5">
      <div className="card shadow-lg p-4">
        <h2 className="mb-4 text-dark fw-bold">Add Company</h2>

       
        <div className="row g-3">
         
          <div className="col-lg-4 col-md-6 col-sm-12">
            <label className="fw-semibold">Company Name</label>
            <input
              type="text"
              className="form-control mt-1"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Enter Your Company Name"
            />
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <label className="fw-semibold">Primary Admin Name</label>
            <input
              type="text"
              className="form-control mt-1"
              value={adminName}
              onChange={(e) => setAdminName(e.target.value)}
              placeholder="Enter Your Primary Admin Name"
            />
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <label className="fw-semibold">Primary Admin Email</label>
            <input
              type="email"
              className="form-control mt-1"
              value={adminEmail}
              onChange={(e) => setAdminEmail(e.target.value)}
              placeholder="Enter Your Primary Admin Email"
            />
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <label className="fw-semibold">Plan Type Monthly/Annual</label>
            <div className="d-flex align-items-center mt-1">
              <div className="form-check me-3">
                <input
                  type="radio"
                  className="form-check-input"
                  checked={planType === "monthly"}
                  onChange={() => setPlanType("monthly")}
                />
                <label className="form-check-label ms-1">Monthly</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  checked={planType === "annual"}
                  onChange={() => setPlanType("annual")}
                />
                <label className="form-check-label ms-1">Annual</label>
              </div>

              <div className="input-group ms-3 w-50">
               
                <input
                  type="number"
                  className="form-control text-center"
                  value={planCount}
                  onChange={(e) => setPlanCount((e.target.value))}
                />
                
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <label className="fw-semibold">No. Of Subscribers/Tokens</label>
            <div className="input-group mt-1">
              <input
                type="number"
                className="form-control"
                value={subscribers}
                onChange={(e) => setSubscribers((e.target.value))}
              />
             
             
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <label className="fw-semibold">Videos Per Subscribers</label>
            <div className="input-group mt-1">
              <input
                type="number"
                className="form-control"
                value={videosPerSubscriber}
                onChange={(e) => setVideosPerSubscriber((e.target.value))}
              />
              
            </div>
          </div>
        </div>

        <div className="mt-4 d-flex justify-content-end">
          <button
            onClick={() => {
              console.log({
                companyName,
                adminName,
                adminEmail,
                planType,
                planCount,
                subscribers,
                videosPerSubscriber,
              });
              alert("Company Added!");
            }}
            className="btn btn-dark d-flex align-items-center"
          >
            ADD COMPANY <span className="ms-2">+</span>
          </button>
        </div>
      </div>
      <div className="mt-4 d-flex justify-content-end">
          <button
            className="btn btn-primary d-flex align-items-center"
          >
            SUBMIT <span className="ms-2">+</span>
          </button>
        </div>
    </div>
  );
}