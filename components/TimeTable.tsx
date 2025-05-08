import React, { useState } from 'react';
import './YearDetails.css'; // Reusing the same styling as YearDetails
import './Staff.css'; // Reusing the Staff component's styling for consistency
import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const TimeTable = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState('');

  const togglePopup = (schedule = '') => {
    setSelectedSchedule(schedule);
    setShowPopup(!showPopup);
  };

  const timetableData = [
    { year: '1st Year', department: 'Computer Science', class: 'CS101', schedule: 'Monday: 10 AM - 12 PM' },
    { year: '2nd Year', department: 'Mechanical Engineering', class: 'ME201', schedule: 'Tuesday: 2 PM - 4 PM' },
    { year: '3rd Year', department: 'Electrical Engineering', class: 'EE301', schedule: 'Wednesday: 9 AM - 11 AM' },
    { year: '4th Year', department: 'Civil Engineering', class: 'CE401', schedule: 'Thursday: 1 PM - 3 PM' },
  ];

  const columnDefs: ColDef[] = [
    { headerName: 'Year', field: 'year', width: 150 },
    { headerName: 'Department', field: 'department', width: 300 },
    { headerName: 'Class', field: 'class', width: 150 },
    {
      headerName: 'Schedule',
      field: 'schedule',
      cellRenderer: (params: any) => (
        <button onClick={() => togglePopup(params.value)} className="view-button android-style">
          View
        </button>
      ),
      width: 150,
      filter: false, // Removed the filter option for the schedule field
      cellStyle: { textAlign: 'center' }, // Center align the items in the Schedule column
    },
  ];

  const defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  return (
    <div className="staff-container">
      <h1>Time Table</h1>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Class Schedule</h2>
            <p>{selectedSchedule}</p>
            <button onClick={() => togglePopup()} className="close-button">Close</button>
          </div>
        </div>
      )}
      <div
        className="ag-theme-alpine"
        style={{ height: '100%', width: '100%' }}
      >
        <AgGridReact
          rowData={timetableData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          pagination={true}
          paginationPageSize={5}
          paginationPageSizeSelector={[5, 20, 50, 100]} // Added 5 to the page size selector
          domLayout="autoHeight"
          animateRows={true}
          rowHeight={60}
        />
      </div>
    </div>
  );
};

export default TimeTable;