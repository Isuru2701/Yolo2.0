import React from 'react';
import Box from '@mui/material/Box';
import { Check } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { useState } from 'react';
import Cookies from 'js-cookie';


function SuccessMessage() {
    
    const [email, setEmail] = useState("");
    const [amount, setAmount] = useState("");
    const [error, setError] = useState("");

    const handleLedger = async (event) => {
        event.preventDefault(); // Prevent the form from refreshing the page

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/success`, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ "email": email, "amount": 10})
            });

            if (response.ok) {
                Cookies.set("email", email , "amount",amount )
                
            
            } else {
                setError("Invalid entry check payment details. Please try again.");
            }
        } catch (error) {
            setError("An unknown error occurred. Please try again later.");
        }
    };


    return (
        <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: "100%",
            backgroundColor: 'var(--base-grey)',
            color: 'white'
            
        }}
        >
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                height="100vh"
            >
                <Check style={{ fontSize: 60, color: 'green' }} />
                <Typography variant="h4" component="h1" gutterBottom>
                    Success!
                </Typography>
                <Typography variant="subtitle1" component="p">
                    Your operation was successful.
                </Typography>
            </Box>
        </div>
    );
}

export default SuccessMessage;