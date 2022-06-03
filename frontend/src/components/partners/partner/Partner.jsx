import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core/';

import useStyles from './styles';
export default function Partner({partner}) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
    <CardMedia className={classes.media} image={partner.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={partner.name} />
    
    <div className={classes.details}>
      <Typography variant="body2" color="textSecondary" component="h2">{partner.tags.map((tag) => `#${tag} `)}</Typography>
    </div>
    <Typography className={classes.title} style={{fontSize:20}}gutterBottom variant="h5" component="h2">{partner.name}</Typography>
 
      <Typography variant="body2" style={{marginLeft:15,marginRight:15, marginBottom:20,fontSize:12}} color="textSecondary" component="p">{partner.description}</Typography>
   
  </Card>
  );
}
