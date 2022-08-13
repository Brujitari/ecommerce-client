import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import accounting from "accounting";
import { Box } from "@mui/material";

import { useGetter } from "store";
function truncateString(str, num = 200) {
  if (str.length > num) {
    return str.slice(0, num) + " ... ";
  } else {
    return str;
  }
}
export default function ImgMediaCard({
  product: { ref, name, rate, stock, img, category, price, details },
}) {
  const { setCartOpen } = useGetter();
  const [isHover, setHover] = React.useState(false);
  const elevation = isHover ? 24 : 0;
  const {cart, setCart } = useGetter();
  return (
    <Card
      elevation={elevation}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      sx={{ maxWidth: 340, margin: "0 auto" }}
    >
      <CardMedia
        component="img"
        alt={name}
        height="192"
        image={img}

        sx={{ maxWidth: "100%", maxHeight: "100%" }}
      />
      <CardContent
        sx={{
          minHeight: "200px",
        }}
      >
        <Typography
          alt={category}
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold" }}
        >
          {name}
        </Typography>
        <Typography className="price" gutterBottom variant="h5" component="div">
          {accounting.formatMoney(price, { symbol: "€" })}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {truncateString(details)}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", justifyContent: "space-between", mr: 2 }}
      >
        <Button
          onClick={() => {
            setCartOpen(true);
            setCart([
              ...cart,
              { ref, name, rate, stock, img, category, price, details },
            ]);
          }}
          size="large"
          variant="contained"
          color="secondary"
          sx={{
            fontWeight: "bold",
            backgroundColor: "#7749F8",
            mb: 0,
            "&:hover": {
              backgroundColor: "#FFFFFF",
              color: "#7749F8",
              fontWeight: "bold",
            },
          }}
        >
          Add to Cart
        </Button>
        <Box sx={{ display: "flex" }}>
          {Array(rate)
            .fill()
            .map((_, i) => (
              <p key={i}>&#11088;</p>
            ))}
        </Box>
      </CardActions>
    </Card>
  );
}
