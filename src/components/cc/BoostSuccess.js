import React from 'react';
import Box from '@mui/material/Box';
import { Check } from '@mui/icons-material';
import { Typography } from '@mui/material';
function BoostSuccess() {
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
                    Your action was successful. Keep cooking!
                </Typography>
            </Box>
        </div>
    );
}

export default BoostSuccess;