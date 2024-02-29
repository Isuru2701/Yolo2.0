import React from "react";
import '../../styles/admin.css';
import ChartComponent from "../elements/Chart";
export default function AdminDashboard() {
    return (
        <>
            <div className='admin-dashboard-container'>
                <div className='admin-header'>
                    <h1>Admin Dashboard</h1>

                </div>

                <br />


                <div className='admin-actions'>
                    <button>
                        view boost requests
                    </button>
                    <button>
                        create a collection
                    </button>
                    <button>
                        edit collections
                    </button>

                </div>

                <br />

                <div className='admin-header'>
                    <h2> Analytics </h2>
                </div>
                <div className='admin-analytics'>

                    <ChartComponent />
                    <ChartComponent />
                    <ChartComponent />
                    <button>generate as report</button>
                </div>


            </div>
        </>
    );
}