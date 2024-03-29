import React from 'react';
import Box from '@mui/material/Box';
import { Check } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { useState } from 'react';
import Cookies from 'js-cookie';


function SuccessMessage() {
    const [amount, setAmount] = useState("");
    const [error, setError] = useState("");

    const handleLedger = async () => {


        console.log(Cookies.get("email"));
        //hit up /upgrade with the email
        if (Cookies.get('boost_doc')) {
            const boost_doc = Cookies.get('boost_doc');
            console.log(boost_doc);
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/creators/approve_payment?doc=${boost_doc}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (response.ok) {
                    // Successfully approved the boost request
                    console.log('Boost request approved successfully');
                } else {
                    console.log('Failed to approve the boost request');
                }

                Cookies.remove('boost_doc');
            } catch (error) {
                console.error('Error:', error);
            }

        }
        else {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/users/upgrade?email=${Cookies.get('email')}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log(data);

                    //update the cookie
                    Cookies.set('premium', true);


                } else {
                    setError("failed to upgrade");
                }
            }
            catch (error) {
                console.log(error);
            }

        };
    }


    handleLedger();


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