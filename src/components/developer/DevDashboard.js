import React from "react";
import Chart from '../elements/Chart';

import '../../styles/developer.css';
import { Article, CopyAll, DocumentScanner, PictureAsPdf } from "@mui/icons-material";


export default function DevDashboard() {
    return (
        <>
            <div className='dev-container'>
                <h1 className='heading'>Developer Portal</h1>
                <center className='text-blob'>
                    Access our services as an API for your awesome applications!
                    Premium users can access the development API for free!
                    If you're going into production, and would like to increase your API limits, please contact us.
                </center>

                <br></br>

                <div className="dev-body">
                    <Chart />

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
            </div>
        </>
    );
}