import "./homePage.scss";
import React from 'react'
import { Box, Grid, Typography } from '@mui/material'

import ImgMediaCard from "../components/productCard/ProductCard"
import { useGetter } from '../store'
import { useNavigate } from "react-router-dom";

export default function HomePage() {

  const {products} = useGetter();
  const navigate = useNavigate();
  const handleClick = () =>  navigate("/register")

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
    <Box className="homepage">
      {/* Titular 
      */}
{/*       <Typography variant='h2' sx={{
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
      </Typography> */}
{/* LATEST BANNER

          <div className= "banner">
            <div className= "banner-background">
            <div className="leftblock">
              <h3>Powerful & modern</h3>
              <h1>Technology</h1>
              
            </div>
            <div className="rightblock">
              <img className="gaming-pc" src="gaming-pc.png" alt="black futuristic legion nvidia gamer laptop" />
              </div>
            </div>
          </div>
      {/* Most Popular */}
   <div className= "banner">
      <button type="button" className="banner-button tn btn-dark" onClick={handleClick}> JOIN </button>
      <img className="banner-pic" src="Banner-horizontal-best-tech.png" alt="minimalist transparent banner with gaming pictures"/>
      </div>
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










