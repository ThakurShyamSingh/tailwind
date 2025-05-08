import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ModuleRegistry, AllCommunityModule, ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './Staff.css';

ModuleRegistry.registerModules([AllCommunityModule]);

const Staff = () => {
  const [schedulePopup, setSchedulePopup] = useState(false);
  const [feedbackPopup, setFeedbackPopup] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState<string | null>(null);
  const [selectedFeedback, setSelectedFeedback] = useState<string[] | null>(null);

  const staffData = [
    {
      photo: '/student1.jpg',
      name: 'John Doe',
      rollNumber: '12345',
      schedule: 'Schedule details for John Doe',
      phoneNumber: '1234567890',
      joiningDate: '01/01/2020',
      feedback: ['Great teacher', 'Very helpful', 'Needs improvement in punctuality'],
    },
    {
      photo: '/student2.jpg',
      name: 'Jane Smith',
      rollNumber: '67890',
      schedule: 'Schedule details for Jane Smith',
      phoneNumber: '1234567890',
      joiningDate: '15/03/2021',
      feedback: ['Excellent mentor', 'Approachable and kind'],
    },
    {
      photo: '/student3.jpg',
      name: 'Alice Johnson',
      rollNumber: '11223',
      schedule: 'Schedule details for Alice Johnson',
      phoneNumber: '1234567890',
      joiningDate: '20/05/2022',
      feedback: ['Very knowledgeable', 'Inspires students'],
    },
  ];

  const columnDefs: ColDef[] = [
    {
      headerName: 'Photo',
      field: 'photo',
      cellRenderer: (params: any) => (
        <img src={params.value} alt="Staff" className="staff-photo" />
      ),
      filter: false, // Disabled filter for the photo field
      width: 100,
    },
    { headerName: 'Name', field: 'name', width: 200 },
    { headerName: 'Roll Number', field: 'rollNumber', width:200 },
    {
      headerName: 'Schedule',
      field: 'schedule',
      cellRenderer: (params: { value: string }) => (
        <button onClick={() => openSchedulePopup(params.value)}>View</button>
      ),
      floatingFilter: false, // Disabled filter for the schedule field
      filter: false, // Explicitly disabled filter
      width: 130,
    },
    { headerName: 'Phone Number', field: 'phoneNumber', width: 180 },
    { headerName: 'Joining Date', field: 'joiningDate', width: 180 },
    {
      headerName: 'Feedback',
      field: 'feedback',
      cellRenderer: (params: { value: string[] }) => (
        <button onClick={() => openFeedbackPopup(params.value)}>View</button>
      ),
      width: 192,
      floatingFilter: false, // Disabled filter for the feedback field
      filter: false, // Explicitly disabled filter
    },
  ];

  const defaultColDef: ColDef = {
    floatingFilter: true, // Enable floating filters globally
    sortable: true,
    filter: true,
  };

  const openSchedulePopup = (schedule: string) => {
    setSelectedSchedule(schedule);
    setSchedulePopup(true);
  };

  const openFeedbackPopup = (feedback: string[]) => {
    setSelectedFeedback(feedback);
    setFeedbackPopup(true);
  };

  const closePopup = () => {
    setSchedulePopup(false);
    setFeedbackPopup(false);
  };

  const popupStyle: React.CSSProperties = {
    width: '70%',
    height: '70%',
    background: 'white',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center', // Explicitly typed as 'center'
    overflow: 'auto',
  };

  return (
    <div className="staff-container">
      <h1>Staff Details</h1>
      <div className="ag-theme-alpine" style={{ height: '50px', width: '100%' }}>
        <AgGridReact
          rowData={staffData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef} // Apply default column definitions
          domLayout="autoHeight"
            pagination={true}
            paginationPageSize={10}
            rowSelection="single"
          animateRows={true}
          rowHeight={60}
        />
      </div>

      {schedulePopup && (
        <div className="popup">
          <div className="popup-content" style={popupStyle}>
            <h2>Schedule</h2>
            <p>{selectedSchedule}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}

      {feedbackPopup && selectedFeedback && (
        <div className="popup">
          <div className="popup-content" style={popupStyle}>
            <h2>Feedback</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {selectedFeedback.map((feedback: string, index: number) => (
                <li key={index}>{feedback}</li>
              ))}
            </ul>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Staff;