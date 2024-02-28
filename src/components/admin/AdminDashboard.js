import React from "react";
import '../'
export default function AdminDashboard() {
    return (
        <>
            <div className='admin-dashboard-container'>
                <div className='admin-header'>
                    <h1>Admin Dashboard</h1>

                </div>

                <div className='admin-analytics'>
                    <button>generate report</button>
                </div>

                <div className='admin-actions'>
                    <button>
                        view boost requests
                    </button>
                    <button>
                        create a collection
                    </button>
                    <button>
                        edit a collection
                    </button>

                </div>


            </div>
        </>
    );
}