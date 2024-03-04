import React, { useState } from 'react';
import { Grid, Paper, Modal, Box, Typography } from '@mui/material';

export function GridComponent({ media, type }) {
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(null);

    const handleOpen = (item) => {
        setActiveItem(item);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    return (
        <>
            <Grid container spacing={3} width={'90%'}>
                {media.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} id={index} key={index} style={{ width: '200px', height: '300px' }}>
                        <Paper style={{ width: '100%', height: '100%', position: 'relative' }} onClick={() => handleOpen(item)}>
                            <img src={item.image_link} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <h4 style={{ color: 'white', textAlign: 'center', margin: 0 }}>{index} {item.title}</h4>
                            </div>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
            <h2 style={{ color: 'white', textAlign: 'center' }}>{type}</h2>
            <br />

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ width: 400, padding: 4, bgcolor: 'background.paper' }}>
                    {activeItem && (
                        <>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                {activeItem.title}
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                {activeItem.overview}
                            </Typography>
                            <img src={activeItem.image_link} alt={activeItem.title} />
                        </>
                    )}
                </Box>
            </Modal>
        </>
    );
}
