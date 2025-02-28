import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { FaEdit, FaTrash } from "react-icons/fa";
import Navbar from '../components/Navbar'
import * as XLSX from "xlsx";

const columns = [
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "First Bolsto",
    selector: (row) => row.firstBolsto,
    sortable: true,
  },
  {
    name: "Latest Bolsto",
    selector: (row) => row.latestBolsto,
    sortable: true,
  },
  {
    name: "Weak Words",
    selector: (row) => row.weakWords,
    sortable: true,
  },
  {
    name: "Filter Words",
    selector: (row) => row.filterWords,
    sortable: true,
  },
  {
    name: "Conscious Score",
    selector: (row) => row.consciousScore,
    sortable: true,
  },
  {
    name: "Smiling",
    selector: (row) => row.smiling,
    sortable: true,
  },
  {
    name: "Video Left",
    selector: (row) => row.videoLeft,
    sortable: true,
  },
  {
    name: "Minutes Left",
    selector: (row) => row.minutesLeft,
    sortable: true,
  },
  {
    name: "",
    cell: (row) => (
      <div>
        <FaEdit style={{ color: "blue", cursor: "pointer", marginRight: "10px" }} />
        <FaTrash style={{ color: "red", cursor: "pointer" }} />
      </div>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];

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
];

const PersonDetail = () => {
  const [filterText, setFilterText] = useState("");

  // Filter function
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

  return (
    <div className="container-fluid" style={{ paddingLeft: "0px", paddingRight: "0px" }}>
    <div className="row flex-nowrap" style={{'--bs-gutter-x' : '0px'}}>


        <Navbar />
        <div className="container analyzedatadiv mt-4">

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search name..."
        className="search-input rounded-pill border-1 ps-4 p-2" style={{ width: '80%'}}
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      

      <div className="custom-container d-flex justify-content-between mt-4 mb-3">
        <h2 style={{ color: "#243445"}}>All Person</h2>
        {/* Export Button */}
      <button className="export-btn border-0 text-white" style={{ background: "#243445" }} onClick={exportToExcel}>
        EXPORT EXCEL
      </button>
      </div>

      <div className="custom-container2">
        {/* Data Table */}
      <DataTable
        title=""
        columns={columns}
        data={filteredData}
        pagination
        highlightOnHover
      />
      </div>
      
    </div>
    </div>

</div>
  );
};

export default PersonDetail;
