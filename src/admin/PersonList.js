import React, { useState } from "react";
import { Search } from "lucide-react";

const persons = [
  { name: "Chris Friskely", company: "Supermarket Villanos", image: "/icons/Avatar1.svg" },
  { name: "Maggie Johnson", company: "Oasis Organic Inc.", image: "/icons/Avatar2.svg" },
  { name: "Gael Harry", company: "New York Finest Fruits", image: "/icons/Avatar3.svg" },
  { name: "Jenna Sullivan", company: "Walmart", image: "/icons/Avatar4.svg" },
  { name: "Gael Harry", company: "New York Finest Fruits", image: "/icons/Avatar5.svg" },
];

const PersonList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPerson, setSelectedPerson] = useState(null);

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow-md">
      {/* Header Section */}
      <div className="cus-container d-flex justify-content-between pb-2 border-bottom">
        <h5 className="text-lg fw-bold text-dark">All Person</h5>
        <div className="border rounded-pill d-flex align-items-center px-3" style={{ background: "#243445" }}>
          <Search className="text-white" size={18} />
          <input
            type="text"
            placeholder="Search names..."
            className="border-0 rounded-pill text-white bg-transparent ms-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Scrollable Person List */}
      <div className="overflow-auto" style={{ maxHeight: "145px",}}>
        <ul className="list-unstyled">
          {filteredPersons.map((person, index) => (
            <li
              key={index}
              onClick={() => setSelectedPerson(index)}
              className={`d-flex justify-content-between align-items-center p-3 rounded cursor-pointer transition ${
                selectedPerson === index ? "bg-#243445 text-white" : "bg-light"
              }`}
            >
              <div className="d-flex align-items-center gap-3">
                <img src={person.image} alt={person.name} className="rounded-circle" width="40" height="40" />
                <div>
                  <h5 className="mb-0" style={{ color: "#243445" }}>{person.name}</h5>
                  <p className="small text-muted">{person.company}</p>
                </div>
              </div>
              <img src="/icons/Frame_13.svg" alt="" className="w-10 h-10 rounded-circle" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PersonList;
