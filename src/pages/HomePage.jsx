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
      <div id='wrapper'>
    <svg classname="Banner2" height={220} width={450} style={{display: 'flex', justifyContent: 'center'}}> 
            <polygon classname="BorderAnimationEx2 BannerBorderEx2" strokeMiterlimit={10} points="30 5, 20 200, 440 170, 440 55" style={{fill: 'none', stroke: '#000', strokeWidth: 5}} />  
            <polygon classname="BannerHolderEx2" points="5 31, 5 185, 410 205, 430 10" style={{opacity: '0.2', fill: '#000'}} />
            <polygon classname="BannerHolderEx2" points="5 31, 5 180, 410 200, 430 10" style={{opacity: 1, fill: '#0ADBB3'}} />  
            <text classname="SalesEx2" fontFamily="Viga" fontSize={65}>
              <tspan fill="#000" opacity="0.8" x={43} y={120} fontFamily="Viga" fontSize={65}>OFFER</tspan>
              <tspan x={43} y={117} fontFamily="Viga" fontSize={65} opacity={1} fill="#fff">OFFER</tspan>
            </text>
            <text classname="Mega" fontWeight={300} fontFamily="Josefin Sans" fontSize={23} fill="#000">
              <tspan fontWeight={700} x={280} y={60}>MEGA</tspan>
              <tspan x={280} y={97}>SALES</tspan>
              <tspan fontWeight={700} x={270} y={136}>LIMITED</tspan>
              <tspan x={260} y={175}>QUANTITY</tspan>
            </text>
            <text classname="ShopNowEx2" fontFamily="Josefin Sans" fontWeight={700} fontSize={20} fill="#fff">
              <tspan fill="#000" x={65} y={157}>S H O P&nbsp; &nbsp;N O W</tspan>
              <tspan x={65} y={155}>S H O P&nbsp; &nbsp;N O W</tspan>
            </text>
            <polyline classname="BorderAnimationEx2 BannerBorderLineEx2" points="30 3, 20 200" style={{fill: 'none', stroke: '#000', strokeWidth: '4.5'}} /> 
            Sorry, your browser does not support inline SVG.
          </svg>
          </div>
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










