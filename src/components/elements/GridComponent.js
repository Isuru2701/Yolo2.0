import React from 'react';
import { Grid, Paper } from '@mui/material';

export function gridComponent(media, type) {

    return (
      <>
        <Grid container spacing={3} width={'90%'}>
          {media.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} id={index} key={index} style={{ width: '200px', height: '300px' }}>
              <Paper style={{ width: '100%', height: '100%', position: 'relative' }}>
                <img src={item.image_link} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <h4 style={{ color: 'white', textAlign: 'center', margin: 0 }}>{item.title}</h4>
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <h2 style={{ color: 'white', textAlign: 'center' }}>{type}</h2>
        <br />
      </>
    )
  
  }
  