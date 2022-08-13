import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { useGetter } from '../store'
import ImgMediaCard from "../components/productCard/ProductCard"

export default function HomePage() {

  const {products} = useGetter();

  console.log(products)

  function menorPrice () {
    const priceSort = products.sort((a,b)=>{
      return a.price - b.price
    })
    return (
      priceSort.slice(0,3).map(product => {
        return(
          <Grid key={product.ref} item xs={12} sm={6} md={4} lg={3}>
        <ImgMediaCard product={product} />
      </Grid>
        )
  }))
  }

  return (
    <Box>
      {/* Titular */}
      <Typography variant='h2' sx={{
        cursor: 'pointer', textAlign: 'center', border: '2px solid #EBE5FC',
        backgroundColor: '#EBE5FC', height: 237, display: 'flex', justifyContent: 'center', alignItems: 'center',
      }}>
        Welcome in e-commerce
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










