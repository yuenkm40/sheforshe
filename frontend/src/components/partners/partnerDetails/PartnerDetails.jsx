import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import {getPartner, getPartnersBySearch} from '../../../actions/partners';
import useStyles from './styles';

function PartnerDetails() {
    const { partner, partners } = useSelector((state) => state.partners);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyles();
    const { id } = useParams();

    const openPartner = (_id) => {
      navigate(`/partners/${partner._id}`);
    };
    useEffect(() => {
      dispatch(getPartner(id));
    },[id,dispatch]);

    // useEffect(() => {
    //   if (partner) {
    //     dispatch(getPartnersBySearch({search:'none', tags: partner?.tags.join(',')}))
    //   }
    // },[partner,dispatch]);
    if (!partner) return null;

    const recommendedPartners = partners.filter(({_id}) => _id !== partner._id);
  
  return (
    <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={3}>
       <div className={classes.card}>
        <div className={classes.section}>
          <h1 style={{fontSize:40}}>{partner.name}</h1>
          <h2 style={{color:'grey',fontWeight:400, fontSize:20,marginTop:6}}>{partner.tags.map((tag) => `#${tag} `)}</h2>
          <Typography gutterBottom variant="body1" component="p" style={{marginTop:20}}>{partner.description}</Typography>
        
          
          {/* <Divider style={{ margin: '20px 0' }} /> */}
          <Typography variant="body1" style={{marginTop:20}}><strong>Work Experience</strong> <br></br> Shopee, Associate, Business Development (Shopee Mall) | Aug 2021 - Present<br></br>
            Lidl Asia Pte Limited, Graduate Trainee Program |  Sep 2019 - Aug 2021 <br></br>
            Circles.Life, Intern | May 2019 - Aug 2019</Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="body1"><strong>Academic Details</strong></Typography>
          <Divider style={{ margin: '20px 0' }} />
        </div>
        <div className={classes.imageSection}>
          <img className={classes.media} src={partner.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={partner.name} />
        </div>
      </div>
      {!!recommendedPartners.length && (
        <div className={classes.section}>
          <h1 style={{fontSize:20,marginLeft:10,fontWeight:400}}>You might also like:</h1>
          <div className={classes.recommendedPosts}>
            {recommendedPartners.map(({ name, description, selectedFile, _id }) => (
              <div style={{ margin: '20px', cursor: 'pointer' }} onClick={() => openPartner(_id)} key={_id}>
                <Typography gutterBottom variant="subtitle2">{name}</Typography>
                <Typography gutterBottom variant="subtitle2">{description}</Typography>
                <img src={selectedFile} width="200px" alt="" />
              </div>
            ))}
          </div>
        </div>
      )}
    </Paper>
  )
}

export default PartnerDetails
