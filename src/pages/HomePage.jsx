import "./homePage.scss";
import React from 'react'
import { Box, Grid, Typography } from '@mui/material'

import ImgMediaCard from "../components/productCard/ProductCard"
import { useGetter } from '../store'

export default function HomePage() {

  const {products} = useGetter();

  function menorPrice () {
    const priceSort = products.sort((a,b)=> a.price - b.price)
    return (
      priceSort.map(product => product.rate < 5 ? (
          <Grid key={product.ref} item xs={12} sm={6} md={4} lg={3}>
        <ImgMediaCard product={product} />
      </Grid>
  ) : null))
  }

  return (
    <Box>
      {/* Titular 
      
      
      background: #314755;  fallback for old browsers 
background: -webkit-linear-gradient(to right, #26a0da, #314755);   Chrome 10-25, Safari 5.1-6 
background: linear-gradient(to right, #26a0da, #314755); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ 

      */}
      <Typography variant='h2' sx={{
        textAlign: 'center',
        backgroundColor: '#EBE5FC', height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center',
      }}>
        Your e-commerce
        </Typography>
        <Typography variant='h6' sx={{
        textAlign: 'center', 
        backgroundColor: '#EBE5FC', height: 50, display: 'flex', justifyContent: 'center', alignItems: 'flex-start',
      }}>
        Most awarded e-commerce 2022
      </Typography>
      {/* Most Popular */}
      <Box >
          <Box sx={{ flexGrow: 1, marginTop: 5, }} >
            <Typography variant='h4' sx={{ cursor: 'pointer', marginLeft: 5 }}>
              Most Popular
            </Typography>
            <Grid container spacing={2} padding={3} sx={{display:'flex', alignItems:'center', justifyContent:'center'}} >
              {
                products.map(product => product.rate > 4 ? (
                  <Grid item key={product.ref} xs={12} sm={6} md={4} lg={3}>
                    <ImgMediaCard product={product} />
                  </Grid>
                ) : null)
              }
            </Grid>
        </Box>
        {/* Discount */}
        <Box sx={{ flexGrow: 1, marginTop: 5 }} >
          <Typography variant='h4' sx={{ cursor: 'pointer', marginLeft: 5 }}>
            Discount
          </Typography>
          <Grid container spacing={2} padding={3} sx={{display:'flex', alignItems:'center', justifyContent:'center'}} >
            {
              menorPrice()
            }
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}










