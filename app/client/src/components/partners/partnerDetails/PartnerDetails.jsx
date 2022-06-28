import React, { useEffect, useState } from 'react';
import { Paper, Typography, Divider, Button } from '@material-ui/core/';
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

    const [request,setRequest] = useState(false);
    const [text, setText] = useState("Connect");
    useEffect(() => {
      dispatch(getPartner(id));
      dispatch(getPartnersBySearch({search:'none', tags: partner?.tags.join(',')}));
    },[id,dispatch]);
    console.log("Partners");
    console.log(partners);

    useEffect(() => {
      switch(request) {
        case true:
          setText("Your Request has been sent");
          break;
        default:
          setText("Connect");
      }
    },[request])
    // useEffect(() => {
    //   try{
    //     dispatch(getPartnersBySearch({search:'none', tags: partner?.tags.join(',')}));
    //   } catch (error) {
    //     console.log(error.message);
    //   }
    // },[partner,dispatch]);

    if (!partner) return null;

    const openPartner = (_id) => {
      navigate(`/partners/${_id}`);
    };

    const recommendedPartners = partners.filter(({_id}) => _id !== partner._id);
    console.log("Recommended Partners");
    console.log(recommendedPartners);
  return (
    <Paper style={{ padding: '30px', borderRadius: '15px' }} elevation={3}>
       <div className={classes.card}>
        <div className={classes.section}>
        <div className ="first-line" style={{display:'flex', flexDirection:'row',justifyContent:'space-between'}}>
        <h1 style={{fontSize:40}}>{partner.name}</h1>
          <Button className={classes.button} onClick={() => setRequest(!request)} style={{height:40,marginRight:30,marginTop:5,backgroundColor:"pink", color:"white"}}
        variant="contained">{text}</Button>
        </div>
          
          <h2 style={{color:'grey',fontWeight:400, fontSize:20,marginTop:6}}>{partner.tags.map((tag) => `#${tag} `)}</h2>
          <Typography gutterBottom variant="body1" component="p" style={{marginTop:20}}>{partner.description}</Typography>
        
          
          {/* <Divider style={{ margin: '20px 0' }} /> */}
          <Typography variant="body1" style={{marginTop:20}}><strong>Work Experience</strong> <br></br> Shopee, Associate, Business Development (Shopee Mall) | Aug 2021 - Present<br></br>
            Lidl Asia Pte Limited, Graduate Trainee Program |  Sep 2019 - Aug 2021 <br></br>
            Circles.Life, Intern | May 2019 - Aug 2019</Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="body1"><strong>Academic Details</strong><br></br> Singapore Management University School of Information Systems</Typography>
          {/* <Divider style={{ margin: '20px 0' }} /> */}
        </div>
        <div className={classes.imageSection}>
          <img className={classes.media} src={partner.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={partner.name} />
        </div>
      </div>
      {!!recommendedPartners.length && (
        <div className={classes.section}>
          <h1 style={{fontSize:20,marginTop:12,fontWeight:400}}>You might also like:</h1>
          <div className={classes.recommendedPosts}>
            {recommendedPartners.map(({ name, description, selectedFile, _id }) => (
              <div style={{ margin: '20px', cursor: 'pointer' }} onClick={() => openPartner(_id)} key={_id}>
                <h3>{name}</h3>
                <img src={selectedFile} height="145px" alt="" style={{marginTop:10,borderRadius:10}} />
                <h4 style={{marginTop:10, fontSize:15,fontWeight:300,marginBottom:10,width:'65%'}}>{description}</h4>
               
              </div>
            ))}
          </div>
        </div>
      )}
    </Paper>
  )
}

export default PartnerDetails
