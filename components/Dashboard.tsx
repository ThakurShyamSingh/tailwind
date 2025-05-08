import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, TooltipItem } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import { PieChart } from '@mui/x-charts/PieChart';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';
import './Dashboard.css';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement);

const Dashboard = () => {
  const [date, setDate] = React.useState<Date | null>(new Date());

  const footer = date ? <p>You picked {format(date, 'PP')}.</p> : <p>Please pick a day.</p>;

  // Data for Pie Charts
  const totalClasses = 100;

  // Student attendance data
  const studentAttendance = { '1st Year': 20, '2nd Year': 25, '3rd Year': 20, '4th Year': 15 };
  const totalStudentAttendance = Object.values(studentAttendance).reduce((sum, val) => sum + val, 0);
  const studentAbsence = totalClasses - totalStudentAttendance;

  // Faculty attendance data
  const facultyAttendance = { 'Dept A': 20, 'Dept B': 25, 'Dept C': 15, 'Dept D': 10 };
  const totalFacultyAttendance = Object.values(facultyAttendance).reduce((sum, val) => sum + val, 0);
  const facultyAbsence = totalClasses - totalFacultyAttendance;

  const studentPieChartData = [
    { value: 20, label: '1st Year', color: '#36A2EB' },
    { value: 25, label: '2nd Year', color: '#4BC0C0' },
    { value: 20, label: '3rd Year', color: '#FFCE56' },
    { value: 15, label: '4th Year', color: '#FF6384' },
    { value: 20, label: 'Absent', color: '#D3D3D3' },
  ];

  const facultyPieChartData = [
    { value: 20, label: 'Dept A', color: '#36A2EB' },
    { value: 25, label: 'Dept B', color: '#4BC0C0' },
    { value: 15, label: 'Dept C', color: '#FFCE56' },
    { value: 10, label: 'Dept D', color: '#FF6384' },
    { value: 30, label: 'Absent', color: '#D3D3D3' },
  ];

  // Data for Bar Chart
  const trendData = {
    labels: [
      'May 1', 'May 2', 'May 3', 'May 4', 'May 5', 'May 6', 'May 7', 'May 8', 'May 9', 'May 10',
    ],
    datasets: [
      {
        label: 'Attendance %',
        data: [85, 90, 80, 75, 95, 88, 92, 87, 78, 91],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384AA', '#36A2EBAA', '#FFCE56AA', '#4BC0C0AA', '#9966FFAA', '#FF9F40AA', '#FF6384AA', '#36A2EBAA', '#FFCE56AA', '#4BC0C0AA'],
        borderRadius: 10,
        barPercentage: 0.6,
      },
    ],
  };

  const trendOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: TooltipItem<'bar'>) => `${context.raw}% Attendance`,
        },
      },
    },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true, max: 100 },
    },
  };

  return (
    <div className="dashboard-container">
    <h1 className='topbar'>Dashboard</h1>
    <div className="dashboard">
      <div className="top-section">
        <div className="chart-container calendar">
          <h2>Calendar</h2>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              value={date}
              onChange={(newDate: Date | null) => setDate(newDate)}
              slotProps={{
                textField: {
                  fullWidth: true,
                  variant: "outlined",
                  size: "small",
                },
              }}
            />
          </LocalizationProvider>
          {footer}
        </div>
        <div className="chart-container pie">
          <h2>Student Attendance</h2>
          <div className="pie-chart-wrapper">
            <PieChart
              series={[
                {
                  data: studentPieChartData,
                  innerRadius: 60,
                  outerRadius: 70,
                  paddingAngle: 2,
                  cornerRadius: 5,
                },
              ]}
            />
          </div>
        </div>
        <div className="chart-container pie">
          <h2>Faculty Attendance</h2>
          <div className="pie-chart-wrapper">
            <PieChart
              series={[
                {
                  data: facultyPieChartData,
                  innerRadius: 60,
                  outerRadius: 70,
                  paddingAngle: 2,
                  cornerRadius: 5,
                },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="bottom-section">
        <div className="chart-container bar">
          <h2>Attendance Trends</h2>
          <Bar data={trendData} options={trendOptions}  />
          {/* <h2></h2> */}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;