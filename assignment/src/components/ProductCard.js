import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Avatar from '@material-ui/core/Avatar';
import { red } from "@material-ui/core/colors";
import Grid from '@material-ui/core/Grid';
import './ProductCard.css';
import TextField from "@material-ui/core/TextField";




const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [editValue, setEditValue] = useState(true);

  const handleEdit = (e) => {
    e.preventDefault();
    setEditValue(!editValue);
    // console.log("editValue", editValue);
  };

  return (
    <div>
    <Card className={classes.root} >
      <CardHeader className="cardHeader"
       avatar={<Avatar className={classes.avatar}>WM</Avatar>}
          action={<MoreVertIcon onClick={(e) => handleEdit(e)} />}
        title={props.productName}
        subheader={props.productId}
      />
      <Rating
        name="customized-empty"
        defaultValue={props.reviewRating}
        precision={0.5}
        emptyIcon={<StarBorderIcon fontSize="inherit" />}
        style={{ display: "flex", justifyContent: "center" }}
      />
      <CardMedia
        className={classes.media}
        image={props.productImage}
      />
       <CardContent>
          {editValue ? (
            <Typography
              className="description"
              variant="body2"
              color="textSecondary"
              component="p"
            >
              <div>{props.shortDescription}</div>
            </Typography>
          ) : (
            <TextField
              style={{ width: "100%" }}
              id="outlined-basic"
              variant="outlined"
              value={props.shortDescription}
            />
          )}
        <CardActions
          style={{ flexDirection: "column-reverse" }} >
          <div className="price">{props.price}</div>
          <div>
            <Typography variant="body2" color="textSecondary" component="h1">
              Review Count : {props.reviewCount}
            </Typography>
          </div>
          <div>
            <Typography variant="body2" color="textSecondary" component="h1">
              Availability: {props.inStock ? "Available" : "Unavailable"}
            </Typography>
          </div>
        </CardActions>
      </CardContent>
    </Card>
    </div>
  );
}
