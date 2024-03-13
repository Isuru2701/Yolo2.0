import React, { useState, useEffect } from "react";
import Chart from '../elements/Chart';

import '../../styles/developer.css';
import { Article, Cookie, CopyAll, DocumentScanner, PictureAsPdf } from "@mui/icons-material";
import Cookies from "js-cookie";


export default function DevDashboard() {

    const [error, setError] = useState(false);

    const [token, setToken] = useState("");
    const [usage, setUsage] = useState(0);
    const [quota, setQuota] = useState(0);

    //TODO: first check if a user is premium. only then should they have permission to access the developer portal
    if(!Cookies.get('email')){
        window.location.href = '/login';
    }
    if(!Cookies.get('premium')){
        window.location.href = '/checkout?t=premium';
    }

    const handleFetchDevInfo = async () => {

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/developers/usage?email=${Cookies.get("email")}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setToken(data.token)
                setUsage(data.req_count);
                setQuota(data.total_usage);
            } else {
                setError("failed to fetch usage data");
            }
        } catch (error) {
            setError(true);
        }
    };

    const handleGenerateApiKey = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/developers/generate?email=${Cookies.get('email')}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            if (response.ok) {
                const data = await response.json();
            } else {
                setError("failed to generate API key");
            }
        } catch (error) {
            setError(true);
        }
    };


    useEffect(() => {
        handleFetchDevInfo();
    }, []);
    const handleCopyClick = async () => {
        try {
          await navigator.clipboard.writeText(token);
          console.log('API token copied to clipboard');
        } catch (err) {
          console.log('Failed to copy API token: ', err);
        }
      };

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
                            <input id='tokenHolder' type="text" placeholder="API Token" value={token} readOnly={true}/>
                            {/* <button className='generate-btn' onClick={handleGenerateApiKey}>Generate New Token</button> */}
                            <button className="generate-btn"><Article />DOCS</button>
                            <button className='copy' onClick={handleCopyClick}><CopyAll /></button>
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