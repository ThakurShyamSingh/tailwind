import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AgGridReact } from 'ag-grid-react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './analysis.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const renderChart = (
  chartRef: React.RefObject<HTMLCanvasElement | null>,
  data: {
    labels: string[];
    datasets: { data: number[]; backgroundColor: string[] }[];
  }
) => {
  if (chartRef.current) {
    const chartInstance = ChartJS.getChart(chartRef.current);
    if (chartInstance) {
      chartInstance.destroy();
    }
    return new ChartJS(chartRef.current, {
      type: 'pie',
      data,
    });
  }
};

const AnalysisResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const department = queryParams.get('department');
  const year = queryParams.get('year');
  const section = queryParams.get('section');

  const students = [
    {
      photo: '/student1.jpg',
      name: 'John Doe',
      rollNo: 'CSE001',
      attendance: '95%',
    },
    {
      photo: '/student2.jpg',
      name: 'Jane Smith',
      rollNo: 'CSE002',
      attendance: '88%',
    },
    {
      photo: '/student3.jpg',
      name: 'Alice Johnson',
      rollNo: 'CSE003',
      attendance: '92%',
    },
  ];

  const pieData = {
    labels: ['Present', 'Absent'],
    datasets: [
      {
        data: [85, 15],
        backgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  const defaultColDef = {
    floatingFilter: true,
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
      floatingFilter: false,
    },
    { headerName: 'Name', field: 'name', filter: 'agTextColumnFilter', width: 300 },
    { headerName: 'Roll No', field: 'rollNo', filter: 'agTextColumnFilter', width: 280 },
    { headerName: 'Attendance %', field: 'attendance', width: 150 },
  ];

  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    renderChart(chartRef, pieData);
  }, [pieData]);

  return (
    <div className="analysis-container">
      <h1>Results for {department} - {year} - Section {section}</h1>

      <div className="analysis-content" style={{ display: 'flex', gap: '20px' }}>
        <div style={{ flex: 3 }}>
          <div
            className="ag-theme-alpine"
            style={{ height: '400px', width: '100%' }}
          >
            <AgGridReact
              rowData={students}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              pagination={true}
              paginationPageSize={10}
              domLayout="autoHeight"
              animateRows={true}
              rowHeight={60}
            />
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <canvas ref={chartRef}></canvas>
        </div>
      </div>
    </div>
  );
};

export default AnalysisResults;