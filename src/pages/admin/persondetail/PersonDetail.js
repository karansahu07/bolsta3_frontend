import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { FaEdit, FaTrash, FaEye, FaSearch } from "react-icons/fa";
import './PersonDetail.css';
import * as XLSX from "xlsx";
import UsePagination from "../../../components/Pagination"

const PersonDetail = () => {
  const [filterText, setFilterText] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

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
    },
    {
      id: 3,
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

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(filteredData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Persons");
    XLSX.writeFile(wb, "PersonsData.xlsx");
  };

  const handleViewClick = (row) => {
    setSelectedRow(row);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedRow(null);
  };

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
      name: "",
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
    <div className="container-fluid">
        
        <div className="mt-4 custom-right-div">
          
          <div className="search-container" style={{ position: 'relative', width: '92%', display: 'flex', alignItems: 'center' }}>
            <FaSearch style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#888' }} />
            <input
              type="text"
              placeholder="Search name..."
              className="search-input rounded-pill border-1 ps-5 p-2"
              style={{ width: '100%', paddingLeft: '2.5rem!important', paddingRight: '40px', marginTop:'3px' }}
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
            />
            <button className="search-btn" style={{ position: 'absolute', right: '-85px', background: '#243445', border: 'none', padding: '8px', borderRadius: '50%' }}>
              <FaSearch style={{ color: 'white', height: '0.9em', width: '1.3em' }} />
            </button>
          </div>
          
          <div className="custom-container d-flex justify-content-between mt-4 mb-3">
            <h3 style={{ color: "#243445" }}>All Person</h3>
            <button className="export-btn border-0 text-white" style={{ background: "#243445" }} onClick={exportToExcel}>
              EXPORT EXCEL
            </button>
          </div>

          <div className="custom-container2" style={{ height : "fit-content" }}>
            <DataTable
              columns={columns}
              data={filteredData}
              pagination={false}
              highlightOnHover
            />
            <UsePagination />
          </div>

          {showPopup && selectedRow && (
            <div className="popup-overlay">
              <div className="popup-box">
                <h3>Person Details</h3>
                <p><strong>Name:</strong> {selectedRow.name}</p>
                <p><strong>First Bolsta:</strong> {selectedRow.firstBolsta}</p>
                <p><strong>Latest Bolsta:</strong> {selectedRow.latestBolsta}</p>
                <p><strong>Weak Words:</strong> {selectedRow.weakWords}</p>
                <p><strong>Filter Words:</strong> {selectedRow.filterWords}</p>
                <p><strong>Conscious Score:</strong> {selectedRow.consciousScore}</p>
                <button className="close-btn" onClick={handleClosePopup}>Close</button>
              </div>
            </div>
          )}
        </div>
      
    </div>
  );
};

export default PersonDetail;
