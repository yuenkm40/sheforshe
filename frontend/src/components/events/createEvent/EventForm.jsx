import React, { useState} from 'react';
import { TextField, Button,Paper, Grid, MenuItem, FormControl, InputLabel, Select } from '@material-ui/core';
import useStyles from './styles';
import FileBase from 'react-file-base64';
import {useNavigate} from 'react-router-dom';
import DateAndTimePickers from './DateAndTimePickers';
import getCoordsForAddress from './location';


export default function Form( {currentId, setCurrentId}) {
  const [eventData, setEventData] = useState({  title: '', address: '', description: '', eventType: '',  date: '', selectedFile: '', lat: '', lng: ''});
  const navigate = useNavigate();
  const classes = useStyles();
  const clear = () => {
    // setCurrentId(0);
    setEventData({  title: '', address: '', description: '', eventType: '',  date: '', selectedFile: '', lat: '', lng: '' });
  };

  //For setting type
  const [type, setType] = useState('');
  const handleTypeChange = (event) => {
    //Set both type to render as well as for eventData
    setType(event.target.value);
    setEventData({ ...eventData, eventType: event.target.value })
  };

  //For setting date
  const handleDateChange = (event) => {
    //Need to parse the target value to appropriate string format here from ISO date format
    var currSetDate = new Date(event.target.value);

    const days = ['MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT', 'SUN'];
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    
    const AM_PM = currSetDate.getHours() < 12 ? 'AM' : 'PM';
    //Convert to TUE, JUN 10 2022, 10:00 AM
    const currDateString = days[currSetDate.getDay()] + ', ' +  months[currSetDate.getMonth()] + ' ' + (currSetDate.getDay() + 1) + ' ' +  currSetDate.getFullYear() + ", " + (currSetDate.getHours() % 13) + ':' + currSetDate.getMinutes() + ' ' + AM_PM;

    setEventData({ ...eventData, date: currDateString })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //Parse the address into exact coordinates and then save
    let addressCoord;

    try{
        addressCoord = await getCoordsForAddress(eventData.address);
        console.log(addressCoord.lat);
        console.log(addressCoord.lng);
        setEventData({ ...eventData, lat: addressCoord.lat })
        setEventData({ ...eventData, lng: addressCoord.lng })
    }catch(error){
        throw error;
    }

    // Axios post request here
    console.log(eventData);

    clear();
    navigate('/events');
  };
  return (
    <Paper className={classes.paper} elevation={0}>
    <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
  
      <h1 style={{fontWeight:500, marginTop:6, fontSize:30,marginBottom:40}}>   {"Create your own event"}</h1>
      <TextField name="title" InputLabelProps={{className: classes.input}} variant="outlined" label="Title" fullWidth value={eventData.title} onChange={(e) => setEventData({ ...eventData, title: e.target.value })} />

      <TextField name="address" InputLabelProps={{className: classes.input}} variant="outlined" label="Address" fullWidth value={eventData.address} onChange={(e) => setEventData({ ...eventData, address: e.target.value })} />

      <TextField name="description" InputLabelProps={{className: classes.input}} variant="outlined" label="Description (no more than 50 words)" fullWidth  multiline rows={4} value={eventData.description} onChange={(e) => setEventData({ ...eventData, description: e.target.value })} />
      
      {/* Need to set onchange for event files */}
      <div className={`${classes.eventDate}`}>
        <FormControl style={{width:240, fontWeight:500, fontSize:30, marginTop:6,marginBottom:6}} variant="outlined" >
          <InputLabel>Event Type</InputLabel>
          <Select value={type} onChange={handleTypeChange}>
            <MenuItem value={'seminar'}>Seminar</MenuItem>
            <MenuItem value={'spotlight'}>Spotlight</MenuItem>
          </Select>
        </FormControl>

        <DateAndTimePickers setDate={handleDateChange}/>
      </div>

      <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setEventData({ ...eventData, selectedFile: base64 })} /></div>
      <Grid item xs={12} sm = {6}><Button className={classes.buttonSubmit} variant="contained"color="primary" size="small" onClick={clear} fullWidth>Clear</Button></Grid>
        <Grid item xs={12} sm = {6} >
        <Button className={classes.buttonSubmit} style={{marginLeft:35,backgroundColor:"pink"}} variant="contained" color="primary" size="small" type="submit" fullWidth>Submit</Button></Grid>
    </form>
  </Paper>
  )
}
