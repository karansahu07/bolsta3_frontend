import React from "react";
import Navbar from '../components/Navbar'
import { Table, Button, InputGroup, FormControl, Pagination } from "react-bootstrap";

export default function PersonDetail () {
  return (
    
    <div className="container-fluid" style={{ paddingLeft: "0px", paddingRight: "0px" }}>
    <div className="row flex-nowrap" style={{'--bs-gutter-x' : '0px'}}>


        <Navbar />
        <div className="container analyzedatadiv mt-4">
      {/* Search Bar */}
      <InputGroup className="mb-3">
        <FormControl placeholder="Search name.." style={{ background: "#fff" }} />
        <Button style={{ background: "#fff" }}>
          <i className="fas fa-search"></i>
        </Button>
      </InputGroup>

      {/* Title and Export Button */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 style={{ color: "#243445" }}><strong>All Persons</strong></h3>
        <Button variant="dark">EXPORT EXCEL</Button>
      </div>

      {/* Table */}
      <div className="table-responsive border border-primary rounded p-2">
        <Table striped bordered hover>
          <thead className="text-white" style={{ background: "#243445" }}>
            <tr>
              <th>Name</th>
              <th>First Bolsta</th>
              <th>Latest Bolsta</th>
              <th>Weak Words</th>
              <th>Filler Words</th>
              <th>Conciseness Score</th>
              <th>Smiling</th>
              <th>Video Left</th>
              <th>Minutes Left</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ color: "rgb(36, 52, 69) !important;" }}>Rahul Kumar</td>
              <td style={{ color: "#243445 !important" }}>23%</td>
              <td style={{ color: "#243445 !important" }}>89%</td>
              <td style={{ color: "#243445 !important" }}>24%</td>
              <td style={{ color: "#243445 !important" }}>30%</td>
              <td style={{ color: "#243445 !important" }}>15%</td>
              <td style={{ color: "#243445 !important"}}>17%</td>
              <td style={{ color: "#243445 !important" }}>05</td>
              <td style={{ color: "#243445 !important" }}>40</td>
              <td><i className="fas fa-chevron-right"></i></td>
            </tr>
          </tbody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-between mt-3">
        <Button variant="dark" style={{ background: "#243445" }}>&laquo; NEXT PREV</Button>
        <Pagination>
          <Pagination.Item active style={{ background:'#243445'  }}>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Item>{4}</Pagination.Item>
          <Pagination.Item>{5}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{10}</Pagination.Item>
        </Pagination>
        <Button variant="dark" style={{ background: "#243445" }}>NEXT PAGE &raquo;</Button>
      </div>
    </div>
    /</div>

</div>
  );
};


