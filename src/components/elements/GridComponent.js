import React, { useState } from 'react';
import { Grid, Paper, Modal, Box, Typography } from '@mui/material';
import { IconButton, Divider } from '@mui/material';
import { Close, Google } from '@mui/icons-material';
import { Button } from '@mui/material';
import { Link as LinkIcon } from '@mui/icons-material';

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
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box sx={{
                    width: '80%',
                    maxHeight: '80%',
                    overflowY: 'auto', // Add overflowY property to enable scrolling
                    backgroundColor: 'var(--base-black)',
                    p: 4,
                }}>
                    <Box sx={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        zIndex: 999,
                    }}>
                        <IconButton onClick={handleClose} color="inherit">
                            <Close />
                        </IconButton>
                    </Box>
                    {activeItem && (
                        <>
                            <div style={{ width: "100%" }}>
                                <Typography variant="h2" component="h2" gutterBottom style={{ color: 'white', textAlign: 'center', width: '100%' }}>
                                    {activeItem.title}
                                </Typography>
                            </div>

                            <br />
                            <div>
                                <img src={activeItem.image_link} alt={activeItem.title} style={{ color: 'white', width: '50%', maxHeight: "20%", borderRadius: 8 }} />
                                <Divider />
                                <Typography variant="body1" color="text.secondary" component="p" sx={{ mt: 2, textAlign: 'center', color: 'white' }}>
                                    {activeItem.overview}
                                </Typography>
                            </div>
                            <br/>

                            <Box display="flex" justifyContent="center">
                                <Button color="primary" aria-label="More info" onClick={() => window.open(activeItem.search_link, '_blank')}>
                                    <LinkIcon />
                                    More Info
                                </Button>

                                <Button color="primary" aria-label="More info" onClick={() => window.open('https://www.google.com/search?q='+activeItem.title, '_blank')}>
                                    <Google />
                                    Search on Google
                                </Button>
                            </Box>

                        </>
                    )}
                </Box>
            </Modal>

        </>
    );
}
