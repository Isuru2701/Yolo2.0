import React, { useState } from "react";
import Chart from '../elements/Chart';

import '../../styles/developer.css';
import { Article, Cookie, CopyAll, DocumentScanner, PictureAsPdf } from "@mui/icons-material";
import Cookies from "js-cookie";


export default function DevDashboard() {

    const [error, setError] = useState(false);

    const [usage, setUsage] = useState(0);
    const [quota, setQuota] = useState(0);

    //TODO: first check if a user is premium. only then should they have permission to access the developer portal

    const handleUsage = async () => {

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/developers/usage?email=${Cookies.get("email")}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (response.ok) {
                const data = await response.json();
                setUsage(data.req_count);
                setQuota(data.total_usage);
            } else {
                setError("failed to fetch usage data");
            }
        } catch (error) {
            setError(true);
        }
    };

    handleUsage();

    return (
        <>
            <div className='dev-container'>
                <h1 className='heading'>Developer Portal</h1>
                <center className='text-blob'>
                    Access our services as an API for your awesome applications!
                    If you're going into production, and would like to increase your API limits, please contact us.
                </center>

                <br></br>

                <div className="dev-body">
                    <Chart dataset={[usage,(quota - usage)]}/>

                    <div className='col-container'>
                        <div className='api-token'>
                            <input type="text" placeholder="API Token" />
                            <button className='generate-btn'>Generate New Token</button>
                            <button className="generate-btn"><Article />DOCS</button>
                            <button className='copy'><CopyAll /></button>
                        </div>

                        <br></br>

                        <br></br>
                        <span className='docs-container'>



                        </span>

                    </div>
                </div>
                <div className='error'>{error}</div>
            </div>
        </>
    );
}