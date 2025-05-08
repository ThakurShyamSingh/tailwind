import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './analysis.css';

const Analysis = () => {
  const navigate = useNavigate();
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedSection, setSelectedSection] = useState('');

  const departments = ['CSE', 'ECE', 'ME', 'CE'];
  const years = ['1st Year', '2nd Year', '3rd Year', '4th Year'];
  const sections = ['A', 'B', 'C'];

  const handleSubmit = () => {
    if (selectedDepartment && selectedYear && selectedSection) {
      navigate(`/analysis/results?department=${selectedDepartment}&year=${selectedYear}&section=${selectedSection}`);
    } else {
      alert('Please select all fields.');
    }
  };

  return (
    <div className="analysis-container">
      <h1>Analysis</h1>

      <div className="dropdowns">
        <label>
          Select Department:
          <select value={selectedDepartment} onChange={(e) => setSelectedDepartment(e.target.value)}>
            <option value="">--Select Department--</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </label>

        <label>
          Select Year:
          <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
            <option value="">--Select Year--</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </label>

        <label>
          Select Section:
          <select value={selectedSection} onChange={(e) => setSelectedSection(e.target.value)}>
            <option value="">--Select Section--</option>
            {sections.map((section) => (
              <option key={section} value={section}>
                {section}
              </option>
            ))}
          </select>
        </label>

        <button onClick={handleSubmit}>View Results</button>
      </div>
    </div>
  );
};

export default Analysis;