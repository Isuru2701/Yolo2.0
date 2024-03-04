import React from 'react';
import '../../styles/admin.css'; // Import the CSS file
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
export default function ApproveRequests() {
    // This is a placeholder. Replace it with your actual data.

    //replace in handleFetch
    var requests = [
        { id: 1, name: 'Request 1' },
        { id: 2, name: 'Request 2' },
        { id: 3, name: 'Request 3' },
        { id: 4, name: 'Request 4' },
        { id: 5, name: 'Request 5' },
        { id: 6, name: 'Request 6' }

    ];
    //load all requests from backend
    const handleFetch = async () => {
    }

    //approve a request 
    const handleApprove = async () => {
    }

    //reject a request
    const handleReject = async () => {
    }

    const generateReport = () => {
        const doc = new jsPDF();

        const tableColumn = ["ID", "Name"];
        const tableRows = [];

        requests.forEach(request => {
            const reportData = [request.id, request.name];
            tableRows.push(reportData);
        });
        const date = new Date();
        const dateString = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;

        doc.text("Pending Requests Report", 14, 15);
        doc.text(`Date: ${dateString}`, 14, 25); // Add the date to the report
        doc.autoTable(tableColumn, tableRows, { startY: 30 }); // Adjust the startY value to leave space for the date
        doc.save("pending-requests-report.pdf");
    }
    //TODO: after approving, turn the button text to approved and disable the button




    //load when component is mounted
    handleFetch();

    return (
        <div className='requests-container'>
            <button onClick={generateReport}>Generate report</button>
            <div className="requests-grid">

                {requests.map((request) => (
                    <div key={request.id} className="request">
                        {request.name}
                        <h1>Email</h1>
                        <p>Link</p>
                        <p>Description</p>

                        <button onClick={handleApprove}>Approve</button>
                        <button className='reject' onClick={handleReject}>Reject</button>
                    </div>
                ))}
            </div>
        </div>
    );
}