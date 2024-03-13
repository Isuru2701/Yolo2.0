import React from 'react';
import Box from '@mui/material/Box';
import { Check } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { useState } from 'react';
import Cookies from 'js-cookie';


function SuccessMessage() {
    const [amount, setAmount] = useState("");
    const [error, setError] = useState("");

    const handleLedger = async (event) => {
        event.preventDefault(); // Prevent the form from refreshing the page


        //hit up /upgrade with the email
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/users/upgrade/${Cookies.get('email')}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                if (data['success'] == true) {
                    //redirect to success page
                    window.location.href = '/success';
                }
            } else {
                setError("failed to upgrade");
            }
        }
        catch(error) {
            console.log(error);
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