import React, { useEffect } from 'react'
import Partner from './partner/Partner'
import useStyles  from './styles';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { getPartners } from '../../actions/partners';
import { useDispatch } from 'react-redux';
export default function Partners() {
    const classes = useStyles();
    const partners = useSelector((state) => state.partners);
    console.log(partners);
    // for (let i = 0; i< partners.length;i++) {
    //   console.log(partners[i]);
    // }
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getPartners());
    },[dispatch]);
   
  return (
    !partners.length ? <CircularProgress/> : (
    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
      {partners.map((partner) => (
         <Grid key={partner._id} item xs={12} sm={4}>
            <Partner partner={partner}/>
         </Grid>
      ))}
    </Grid>
  )

  );
}
