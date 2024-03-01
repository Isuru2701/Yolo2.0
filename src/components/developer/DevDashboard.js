import React from "react";
import Chart from '../elements/Chart';

import '../../styles/developer.css';
import { Article, Cookie, CopyAll, DocumentScanner, PictureAsPdf } from "@mui/icons-material";
import Cookies from "js-cookie";


export default function DevDashboard() {
    
handleUsage()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleUsage = async (event) => {
        event.preventDefault(); // Prevent the form from refreshing the page

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/usage?email=${Cookies.get("email")}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (response.ok) {
                // Update cookie or perform any other successful login action
            } else {
                setError(true);
            }
        } catch (error) {
            setError(true);
        }
    };

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