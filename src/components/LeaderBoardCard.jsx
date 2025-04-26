import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { List, ListItem } from '@mui/material';
import { ListItemButton, ListItemText } from '@mui/material';
import PointIcon from '@mui/icons-material/MonetizationOn';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function LeaderBoardCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 275 }}>
      <Typography variant="subtitle1" color="text.primary" sx={{
        ml: '1rem',
        mt: '1rem',
        fontFamily: 'Montserrat Alternates'
      }}>
        Daily leaderboard
      </Typography>
      <CardHeader
        title="Kundan"
        sx={{padding: '0.5rem 3rem'}}
        titleTypographyProps={{variant:'h7'}}
        avatar={
          <>
            <Avatar sx={{ bgcolor: 'transparent', color: '#000000' }} aria-label="recipe">
              1.
            </Avatar>
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          </>
        }
      />
      <CardContent sx={{p:'0'}}>
        <List style={{
              padding: '0.5rem'
            }}>
          <ListItem secondaryAction={
              <IconButton aria-label="points" sx={{fontSize: '16px'}} >
                <PointIcon style={{
                    fontSize: '20px',
                    verticalAlign: 'sub',
                    color: '#ffc147'
                  }} /> 23
              </IconButton>
            } style={{
              border: '2px solid black',
              padding: '0.1rem',
              borderRadius: '.8rem'
            }}>
              <ListItemText primary="EXP" />
          </ListItem>
        </List>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <List>
            <ListItem secondaryAction={
                <IconButton aria-label="points" sx={{fontSize: '16px'}} >
                  <PointIcon style={{
                      fontSize: '20px',
                      verticalAlign: 'sub',
                    }} /> 23
                </IconButton>
              }>
                <ListItemText primary="CodeStudio" />
            </ListItem>
            <ListItem secondaryAction={
                <IconButton aria-label="points" sx={{fontSize: '16px'}} >
                  <PointIcon style={{
                      fontSize: '20px',
                      verticalAlign: 'sub',
                    }} /> 23
                </IconButton>
              }>
                <ListItemText primary="GFG" />
            </ListItem>
            <ListItem secondaryAction={
                <IconButton aria-label="points" sx={{fontSize: '16px'}} >
                  <PointIcon style={{
                      fontSize: '20px',
                      verticalAlign: 'sub',
                    }} /> 23
                </IconButton>
              }>
                <ListItemText primary="Leetcode" />
            </ListItem>
            <ListItem secondaryAction={
                <IconButton aria-label="points" sx={{fontSize: '16px'}} >
                  <PointIcon style={{
                      fontSize: '20px',
                      verticalAlign: 'sub',
                    }} /> 23
                </IconButton>
              }>
                <ListItemText primary="Hackerrank" />
            </ListItem>
          </List>
        </CardContent>
      </Collapse>
    </Card>
  );
}