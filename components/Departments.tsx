import React from 'react';
import { useNavigate } from 'react-router-dom';

const Departments = () => {
  const navigate = useNavigate();

  const departments = ['CSE', 'IT', 'CSIT', 'CSD', 'AIML', 'ECE'];

  const handleYearClick = (department: string, year: number) => {
    navigate(`/departments/${department}/year/${year}`);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Departments</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {departments.map((department) => (
          <div key={department} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">{department}</h2>
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4].map((year) => (
                <button
                  key={year}
                  onClick={() => handleYearClick(department, year)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
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
