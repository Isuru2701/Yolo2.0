import React, { useEffect } from 'react';
import '../../styles/admin.css'; // Import the CSS file
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import Cookies from 'js-cookie';
import { useState } from 'react';
export default function ApproveRequests() {
    // This is a placeholder. Replace it with actual data.

    const [error, setError] = useState("");
    const [requests, setRequests] = useState([]);
    //replace in handleFetch


    //load all requests from backend
    const handleFetch = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/creators/pending`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (response.ok) {
                const data = await response.json();
                console.log(requests);
                setRequests(data);



            } else {
                setError("failed to fetch usage data");
            }
        } catch (error) {
            setError(true);
        }
    }

    //approve a request 
    const handleApprove = async (docId, index) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/creators/approve?doc=${docId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                // Successfully approved the boost request

                console.log('Boost request approved successfully');

                setRequests(prevRequests => {
                    const updatedRequests = [...prevRequests];
                    updatedRequests[index].status = "approved";
                    return updatedRequests;
                });

            } else {
                // Handle error response from the backend
                console.error('Failed to approve boost request');
            }
        } catch (error) {
            // Handle network or other errors
            console.error('Error:', error);
        }
    }
    //reject a request
    const handleReject = async (docId, index) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/creators/reject?doc=${docId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                // Successfully rejected the boost request

                setRequests(prevRequests => {
                    const updatedRequests = [...prevRequests];
                    updatedRequests[index].status = "rejected";
                    return updatedRequests;
                });
                console.log('Boost request rejected successfully');
            } else {
                // Handle error response from the backend
                console.error('Failed to reject boost request');
            }
        } catch (error) {
            // Handle network or other errors
            console.error('Error:', error);
        }
    }

    const generateReport = () => {
        const doc = new jsPDF();

        const tableColumn = ["Title", "Email", "Keywords", "Link"];
        const tableRows = [];

        requests.forEach(request => {
            const reportData = [request.title, request.email, request.keywords, request.content_url];
            tableRows.push(reportData);
        });
        const date = new Date();
        const dateString = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

        doc.text("YOLO ADMIN REPORT", 14, 10);
        doc.text("Pending Requests Report", 14, 15);
        doc.text(`Date: ${dateString}`, 14, 25); // Add the date to the report
        doc.autoTable(tableColumn, tableRows, { startY: 30 }); // Adjust the startY value to leave space for the date
        doc.save("pending-requests-report.pdf");
    }

    //load when component is mounted
    useEffect(() => {
        handleFetch();
    }, []);

    return (
        <div className='requests-container'>
            <button onClick={generateReport}>Generate report</button>
            <div className="requests-grid">

                {requests.map((request, index) => (
                    <div key={request.id} className="request">
                        <h1>{request.title}</h1>
                        {request.email}
                        <p><a href={request.content_url}>Link</a></p>
                        {request.status === "pending" ? (
                            <>
                                <button onClick={() => handleApprove(request.doc_id, index)}>Approve</button>
                                <button className='reject' onClick={() => handleReject(request.doc_id, index)}>Reject</button>
                            </>
                        ) : (
                            <div>{request.status === "approved" ? "Approved" : "Rejected"}</div>
                        )}
                    </div>
                ))}

            </div>
        </div>
    );
}