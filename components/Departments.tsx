import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Departments.css';

const Departments = () => {
  const navigate = useNavigate();

  const departments = ['CSE', 'IT', 'CSIT', 'CSD', 'AIML', 'ECE'];

  const handleYearClick = (department: string, year: number) => {
    navigate(`/departments/${department}/year/${year}`);
  };

  return (
    <div className="departments-container">
      <h1>Departments</h1>
      <div className="department-list">
        {departments.map((department) => (
          <div key={department} className="department-item">
            <h2>{department}</h2>
            <div className="year-dropdown">
              {[1, 2, 3, 4].map((year) => (
                <button key={year} onClick={() => handleYearClick(department, year)}>
                  Year {year}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;
