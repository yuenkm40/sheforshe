import React, { useState} from 'react';
import { TextField, Button,Paper, Grid, MenuItem, FormControl, InputLabel, Select } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { createPartner } from '../../../actions/partners';
import FileBase from 'react-file-base64';
import {useNavigate} from 'react-router-dom';
import DateAndTimePickers from './DateAndTimePickers';


export default function Form( {currentId, setCurrentId}) {
  const [partnerData, setPartnerData] = useState({ name: '', occupation: '', tags: '', selectedFile: '', description:'' });
  const partner = useSelector((state) => (currentId ? state.partners.partners.find((description) => description._id === currentId) : null));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const clear = () => {
    // setCurrentId(0);
    setPartnerData({  name: '', occupation: '', tags: '', selectedFile: '', description:'' });
  };

  const [type, setType] = useState('');
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(partnerData);
    dispatch(createPartner(partnerData));
    clear();
    navigate('/partners');
    // if (currentId === 0) {
    //   dispatch(createPartner(partnerData));
    //   clear();
    // } else {
    //   dispatch(updatePartner(currentId, partnerData));
    //   clear();
    // }
  };
  return (
    <Paper className={classes.paper} elevation={0}>
    <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
  
      <h1 style={{fontWeight:500, marginTop:6, fontSize:30,marginBottom:40}}>   {currentId ? `Editing "${partner.name}"` : "Create your own event"}</h1>
      <TextField name="title" InputLabelProps={{className: classes.input}} variant="outlined" label="Title" fullWidth value={partnerData.name} onChange={(e) => setPartnerData({ ...partnerData, name: e.target.value })} />

      <TextField name="address" InputLabelProps={{className: classes.input}} variant="outlined" label="Address" fullWidth value={partnerData.tags} onChange={(e) => setPartnerData({ ...partnerData, tags: e.target.value.split(',') })} />

      <TextField name="description" InputLabelProps={{className: classes.input}} variant="outlined" label="Description (no more than 50 words)" fullWidth  multiline rows={4} value={partnerData.description} onChange={(e) => setPartnerData({ ...partnerData, description: e.target.value })} />
      
      <div className={`${classes.eventDate}`}>
        <FormControl style={{width:240, fontWeight:500, fontSize:30, marginTop:6,marginBottom:6}} variant="outlined" >
          <InputLabel>Event Type</InputLabel>
          <Select value={type} onChange={handleTypeChange}>
            <MenuItem value={'seminar'}>Seminar</MenuItem>
            <MenuItem value={'spotlight'}>Spotlight</MenuItem>
          </Select>
        </FormControl>

        <DateAndTimePickers/>
      </div>

      <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPartnerData({ ...partnerData, selectedFile: base64 })} /></div>
      <Grid item xs={12} sm = {6}><Button className={classes.buttonSubmit} variant="contained"color="primary" size="small" onClick={clear} fullWidth>Clear</Button></Grid>
        <Grid item xs={12} sm = {6} >
        <Button className={classes.buttonSubmit} style={{marginLeft:35,backgroundColor:"pink"}} variant="contained" color="primary" size="small" type="submit" fullWidth>Submit</Button></Grid>
    </form>
  </Paper>
  )
}
