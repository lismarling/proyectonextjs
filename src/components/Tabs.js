"use client";
import React from 'react';
import { Tabs, Tab, Grid } from '@mui/material';

export default function ImageTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="TENDENCIAS" />
        <Tab label="NUEVOS PRODUCTOS" />
        <Tab label="CONTACTOS" />
      </Tabs>

      <Grid container spacing={2} justifyContent="center" style={{ marginTop: '20px' }}>
        {value === 0 && (
          <Grid item>
            <img src="/image/cafe.jpg" alt="Imagen 1" style={{ width: '300px' }} />
            <img src="/image/cafe.jpg" alt="Imagen 1" style={{ width: '300px' }} />
            <img src="/image/cafe.jpg" alt="Imagen 1" style={{ width: '300px' }} />
            <img src="/image/cafe.jpg" alt="Imagen 1" style={{ width: '300px' }} />
          
          </Grid>
        )}
        {value === 1 && (
          <Grid item>
            <img src="/image/capu.jpeg" alt="Imagen 2" style={{ width: '300px' }} />
            <img src="/image/capu.jpeg" alt="Imagen 2" style={{ width: '300px' }} />
            <img src="/image/capu.jpeg" alt="Imagen 2" style={{ width: '300px' }} />
         
          </Grid>
        )}
        {value === 2 && (
          <Grid item>
            <img src="/image/capu2.jpeg" alt="Imagen 3" style={{ width: '300px' }} />
            <img src="/image/capu2.jpeg" alt="Imagen 3" style={{ width: '300px' }} />
            <img src="/image/capu2.jpeg" alt="Imagen 3" style={{ width: '300px' }} />
            <img src="/image/capu2.jpeg" alt="Imagen 3" style={{ width: '300px' }} />
          </Grid>
        )}
      </Grid>
    </div>
  );
}
