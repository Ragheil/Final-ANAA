import '../css/dashboard.css';
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import Sidebar from '../components/Sidebar';

Chart.register(...registerables);

const Dashboard = () => {
    const [dataIndex, setDataIndex] = useState(0);
    const [facultyStatus, setFacultyStatus] = useState({ available: 0, busy: 0, offline: 0 });

    const monthlyData = [
        { month: 'January', data: [30, 45, 50, 40, 70, 60] },
        { month: 'February', data: [25, 35, 45, 55, 65, 75] },
        { month: 'March', data: [20, 30, 40, 50, 60, 70] },
        { month: 'April', data: [15, 25, 35, 45, 55, 65] },
        { month: 'May', data: [10, 20, 30, 40, 50, 60] },
        { month: 'June', data: [5, 15, 25, 35, 45, 55] },
    ];

    const data = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
        datasets: [
            {
                label: `${monthlyData[dataIndex].month} Queue Count`,
                data: monthlyData[dataIndex].data,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
    };

    // Fetch the faculty availability data from the API
    const fetchFacultyStatus = async () => {
        try {
            const response = await fetch('http://localhost:3001/faculty/status'); // Updated API endpoint
            const data = await response.json();

            setFacultyStatus(data);
        } catch (error) {
            console.error('Error fetching faculty status:', error);
        }
    };

    useEffect(() => {
        fetchFacultyStatus();
    }, []); // Fetch the data when the component mounts

    const handlePrevMonth = () => {
        setDataIndex((prevIndex) => (prevIndex - 1 + monthlyData.length) % monthlyData.length);
    };

    const handleNextMonth = () => {
        setDataIndex((prevIndex) => (prevIndex + 1) % monthlyData.length);
    };

    return (
        <div className="dashboard-container">
            <Sidebar />
            <div className="content">
                <div className="card-container">
                    <div className="card available">
                        <h2>Available</h2>
                        <p>{facultyStatus.available}</p>
                    </div>
                    <div className="card busy">
                        <h2>Busy</h2>
                        <p>{facultyStatus.busy}</p>
                    </div>
                    <div className="card offline">
                        <h2>Offline</h2>
                        <p>{facultyStatus.offline}</p>
                    </div>
                </div>

                <div className="layout">
                    <div className="graph-container">
                        <h3>Monthly Queue Data</h3>
                        <div className="chart-controls">
                            <button onClick={handlePrevMonth}>Previous</button>
                            <button onClick={handleNextMonth}>Next</button>
                        </div>
                        <Bar data={data} options={options} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;