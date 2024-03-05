import React from 'react';
import '../../styles/admin.css'; // Import the CSS file
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
export default function ApproveRequests() {
    // This is a placeholder. Replace it with your actual data.

    //replace in handleFetch
    var requests = [
        { id: 1, name: 'Request 1', email: 'email1', link: 'link1', comments: 'comments1' },
        { id: 2, name: 'Request 2', email: 'email2', link: 'link2', comments: 'comments2' },
        { id: 3, name: 'Request 3', email: 'email3', link: 'link3', comments: 'comments3' },
        { id: 4, name: 'Request 4', email: 'email4', link: 'link4', comments: 'comments4' },
        { id: 5, name: 'Request 5', email: 'email5', link: 'link5', comments: 'comments5' },

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

        const tableColumn = ["ID", "Name", "Email", "Link", "Comments"];
        const tableRows = [];

        requests.forEach(request => {
            const reportData = [request.id, request.name, request.email, request.link, request.comments];
            tableRows.push(reportData);
        });
        const date = new Date();
        const dateString = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;

        doc.text("YOLO ADMIN REPORT", 14, 10);
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