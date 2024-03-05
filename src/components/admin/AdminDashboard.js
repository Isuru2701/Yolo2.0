import React, { useState } from "react";
import '../../styles/admin.css';
import ChartComponent from "../elements/Chart";
import Cookies from "js-cookie";
import ManageCollections from "./ManageCollections";
export default function AdminDashboard() {


    return (
        <>
            <div className='admin-dashboard-container'>
                <div className='admin-header'>
                    <h1>Admin Dashboard</h1>

                </div>

                <br />


                <div className='admin-actions'>
                    <button onClick={() => window.location.href = '/admin/requests'}>
                        view boost requests
                    </button>
                    <button onClick={() => window.location.href = '/admin/collections/create'}>
                        create a collection
                    </button>

                </div>

                <br />

                {/* <div className='admin-header'>
                    <h2> Analytics </h2>
                </div>
                { <div className='admin-analytics'>

                    <ChartComponent />
                    <ChartComponent />
                    <ChartComponent />
                    <button>generate report</button>
                </div> 

                 */}
                <ManageCollections />

            </div>
        </>
    );
}