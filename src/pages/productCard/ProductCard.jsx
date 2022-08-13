import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import accounting from 'accounting';
import { Box,  } from '@mui/material';
function truncateString(str, num = 200 ) {
  if (str.length > num) {
    return str.slice(0, num) + " ... ";
  } else {
    return str;
  }
}
export default function ImgMediaCard({product: {id, name, rating, stock, image, category, price, details }}) {
  return (
    <Card sx={{height:'100%'}}>
      <CardMedia
        component="img"
        alt={name}
        height="192"
        image={image}
        sx={{maxWidth: '100%', maxHeight: '100%'}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:'bold'}}>
          {name}
        </Typography>
        <Typography className="price" gutterBottom variant="h5" component="div" >
          {accounting.formatMoney(price,{symbol:'€'})}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {truncateString(details)}
        </Typography>
      </CardContent>
      <CardActions sx={{display:"flex", justifyContent:"space-between", mr:2}}>
        <Button size="large" variant="contained" color="secondary" sx={{fontWeight:"bold", backgroundColor:"#7749F8",mb:0, '&:hover':{backgroundColor:"#FFFFFF", color:"#7749F8", fontWeight:'bold'} }}>Add to Cart</Button>
        <Box sx={{display:"flex"}}>
            {Array(rating)
              .fill()
              .map((_, i)=>(
              <p>&#11088;</p>
              ))}
        </Box>
        </CardActions>
    </Card>
  );
}









