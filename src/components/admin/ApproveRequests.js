import React from 'react';
import '../../styles/admin.css'; // Import the CSS file

export default function ApproveRequests() {
    // This is a placeholder. Replace it with your actual data.
    const requests = [
        { id: 1, name: 'Request 1' },
        { id: 2, name: 'Request 2' },
        { id: 3, name: 'Request 3' },
        { id: 4, name: 'Request 4' },
        { id: 5, name: 'Request 5' },
        { id: 6, name: 'Request 6' }
        // Add more requests as needed...
    ];

    return (
        <div className="requests-grid">
            {requests.map((request) => (
                <div key={request.id} className="request">
                    {request.name}
                </div>
            ))}
        </div>
    );
}