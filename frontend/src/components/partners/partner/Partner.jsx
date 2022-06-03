import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core/';

import useStyles from './styles';
export default function Partner({partner, setCurrentId}) {
  const classes=useStyles();
  return (
    <Card className={classes.card}>
    <CardMedia className={classes.media} image={partner.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={partner.title} />
    
    <div className={classes.details}>
      <Typography variant="body2" color="textSecondary" component="h2">{partner.tags.map((tag) => `#${tag} `)}</Typography>
    </div>
    <Typography className={classes.title} gutterBottom variant="h5" component="h2">{partner.title}</Typography>
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">{partner.description}</Typography>
    </CardContent>
  </Card>
  );
}
