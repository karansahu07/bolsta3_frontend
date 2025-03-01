import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa"; // Importing FontAwesome icons
import Navbar from '../components/Navbar';
import './PersonDetail.css';
import * as XLSX from "xlsx";

const PersonDetail = () => {
  const [filterText, setFilterText] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  // Sample Data
  const data = [
    {
      id: 1,
      name: "Rahul Kumar",
      firstBolsta: "23%",
      latestBolsta: "89%",
      weakWords: "24%",
      filterWords: "30%",
      consciousScore: "15%",
      smiling: "17%",
      videoLeft: "05",
      minutesLeft: "40",
    },
    {
      id: 2,
      name: "Amit Sharma",
      firstBolsta: "45%",
      latestBolsta: "78%",
      weakWords: "20%",
      filterWords: "35%",
      consciousScore: "22%",
      smiling: "20%",
      videoLeft: "03",
      minutesLeft: "35",
    }
  ];

  // Filter Function
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  // Export to Excel
  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(filteredData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Persons");
    XLSX.writeFile(wb, "PersonsData.xlsx");
  };

  // Function to open the View Popup
  const handleViewClick = (row) => {
    setSelectedRow(row);
    setShowPopup(true);
  };

  // Close Popup Function
  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedRow(null);
  };

  // Table Columns
  const columns = [
    { name: "Name", selector: (row) => row.name, sortable: true },
    { name: "First Bolsta", selector: (row) => row.firstBolsta, sortable: true },
    { name: "Latest Bolsta", selector: (row) => row.latestBolsta, sortable: true },
    { name: "Weak Words", selector: (row) => row.weakWords, sortable: true },
    { name: "Filter Words", selector: (row) => row.filterWords, sortable: true },
    { name: "Conscious Score", selector: (row) => row.consciousScore, sortable: true },
    { name: "Smiling", selector: (row) => row.smiling, sortable: true },
    { name: "Video Left", selector: (row) => row.videoLeft, sortable: true },
    { name: "Minutes Left", selector: (row) => row.minutesLeft, sortable: true },
    {
      name: "Actions",
      cell: (row) => (
        <div className="icon-container">
          <FaEdit className="action-icon edit-icon" />
          <FaTrash className="action-icon delete-icon" />
          <FaEye className="action-icon view-icon" onClick={() => handleViewClick(row)} />
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  return (
    <div className="container-fluid" style={{ paddingLeft: "0px", paddingRight: "0px" }}>
      <div className="row flex-nowrap" style={{ '--bs-gutter-x': '0px' }}>
        <Navbar />
        <div className="container analyzedatadiv mt-4">
          
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search name..."
            className="search-input rounded-pill border-1 ps-4 p-2"
            style={{ width: '80%' }}
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          />

          {/* Header and Export Button */}
          <div className="custom-container d-flex justify-content-between mt-4 mb-3">
            <h2 style={{ color: "#243445" }}>All Person</h2>
            <button className="export-btn border-0 text-white" style={{ background: "#243445" }} onClick={exportToExcel}>
              EXPORT EXCEL
            </button>
          </div>

          {/* Data Table */}
          <div className="custom-container2">
            <DataTable
              columns={columns}
              data={filteredData}
              pagination
              highlightOnHover
            />
          </div>

          {/* View Popup */}
          {showPopup && selectedRow && (
            <div className="popup-overlay">
              <div className="popup-box">
                <h3>Person Details</h3>
                <p><strong>Name:</strong> {selectedRow.name}</p>
                <p><strong>First Bolsto:</strong> {selectedRow.firstBolsto}</p>
                <p><strong>Latest Bolsto:</strong> {selectedRow.latestBolsto}</p>
                <p><strong>Weak Words:</strong> {selectedRow.weakWords}</p>
                <p><strong>Filter Words:</strong> {selectedRow.filterWords}</p>
                <p><strong>Conscious Score:</strong> {selectedRow.consciousScore}</p>
                <button className="close-btn" onClick={handleClosePopup}>Close</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonDetail;
