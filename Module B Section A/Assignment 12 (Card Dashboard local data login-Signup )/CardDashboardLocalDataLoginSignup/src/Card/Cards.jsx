import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function Cards({ title, desc, image, id }) {
  const navigate = useNavigate();
  
  const truncatedDesc = desc.length > 100 ? `${desc.substring(0, 80)}...` : desc;
  const truncateTitle = title.length > 15 ? `${title.substring(0,15)}...` : title;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {truncateTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {truncatedDesc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => navigate(`/products/${id}`)} size="small">Add</Button>
      </CardActions>
    </Card>
  );
}
