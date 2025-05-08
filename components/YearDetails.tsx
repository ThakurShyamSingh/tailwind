import React, { useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { AgGridReact } from 'ag-grid-react';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community'; // Use AllCommunityModule
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './YearDetails.css';
import { ColDef } from 'ag-grid-community';

// Register all Community modules
ModuleRegistry.registerModules([AllCommunityModule]);

const YearDetails = () => {
  const { department, year } = useParams<{ department: string; year: string }>();
  const gridRef = useRef<any>(null); // Reference to the grid

  const onGridReady = useCallback((params: any) => {
    gridRef.current = params.api; // Initialize gridRef with the grid API
    console.log('AG Grid API initialized:', params.api);
  }, []);

  if (!department || !year) {
    return <div className="error-message">Invalid department or year. Please try again.</div>;
  }

  const students = [
    {
      photo: '/student1.jpg',
      name: 'John Doe',
      rollNo: 'CSE001',
      passOutYear: 2025,
      cgpa: 3.8,
      backlogs: 0,
      feeDetails: 'Paid',
    },
    {
      photo: '/student2.jpg',
      name: 'Jane Smith',
      rollNo: 'CSE002',
      passOutYear: 2025,
      cgpa: 3.6,
      backlogs: 1,
      feeDetails: 'Pending',
    },
    {
      photo: '/student3.jpg',
      name: 'Alice Johnson',
      rollNo: 'CSE003',
      passOutYear: 2025,
      cgpa: 3.9,
      backlogs: 0,
      feeDetails: 'Paid',
    },
    {
      photo: '/student3.jpg',
      name: 'Alice Johnson',
      rollNo: 'CSE003',
      passOutYear: 2025,
      cgpa: 3.9,
      backlogs: 0,
      feeDetails: 'Paid',
    },
    {
      photo: '/student3.jpg',
      name: 'Alice Johnson',
      rollNo: 'CSE003',
      passOutYear: 2025,
      cgpa: 3.9,
      backlogs: 0,
      feeDetails: 'Paid',
    }
  ];

  const defaultColDef: ColDef = {
    floatingFilter: true, // Enable floating filters globally
    sortable: true,
    filter: true,
  };

  const columnDefs: ColDef[] = [
    {
      headerName: 'Photo',
      field: 'photo',
      cellRenderer: (params: { value: string }) => (
        <img src={params.value} alt="Student" className="student-photo" />
      ),
      width: 110,
      filter:false // Disable floating filter for this column
    },
    { headerName: 'Name', field: 'name', filter: 'agTextColumnFilter', width: 300 },
    { headerName: 'Roll No', field: 'rollNo', filter: 'agTextColumnFilter', width: 280 },
    { headerName: 'Pass Out Year', field: 'passOutYear', width: 165 },
    { headerName: 'CGPA', field: 'cgpa', width: 90 },
    { headerName: 'Backlogs', field: 'backlogs', width: 120 },
    { headerName: 'Fee Details', field: 'feeDetails', width: 170 },
  ];

  return (
    <div className="year-details-container">
      <h1>
        {department} - Year {year}
      </h1>
      <div className="grid-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Student Details</h2>
        
      </div>
      <div
        className="ag-theme-alpine"
        style={{ height: '100%', width: '100%' }} // Ensure the grid takes full height and width
      >
        <AgGridReact
          ref={gridRef} // Attach grid reference
          rowData={students}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef} // Apply default column definitions
          pagination={true}
          paginationPageSize={70} // Set default page size
          domLayout="autoHeight"
          animateRows={true}
          rowHeight={60}
          onGridReady={onGridReady} // Ensure gridRef is initialized
        />
      </div>
    </div>
  );
};

export default YearDetails;
