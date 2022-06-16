import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './eventDetails.scss'

import Carousel from 'react-material-ui-carousel'
import EventDetailsBanner from './EventDetailsBanner';
import EventCarousel from './EventCarousel';
import { Rating } from '@mui/material';
import { Typography, Divider, Button } from '@material-ui/core';
import { WbSunny } from '@material-ui/icons';
import Map from '../../map/Map'


function EventDetails() {
    const[eventDetail, setEventDetail] = useState();
    const { id } = useParams();

    //Load event data
    useEffect(() => {
        const sendRequest = async () => {
        try{
            const response = await fetch(`http://localhost:5000/events/${id}`);
            const responseData = await response.json();
            setEventDetail(responseData);
        }catch(error){
            console.log(error.message);
        }
        }
        sendRequest();
    },[])

    // Obtain event information
    return(
        <div className="eventDetails">
            <EventDetailsBanner/>

            <div className="bottomPortion">
                <div className="eventImage">
                    <EventCarousel/>
                </div>
                <div className="empty">

                </div>
                <div className="description">
                    <div className="descriptionWrap">
                        <Typography variant="h4" component="p" style={{marginTop:15}}>
                            <strong>{eventDetail?.title}</strong>
                        </Typography>
                        <div className='caption'>
                            <strong>$22</strong>
                            {/* Interpunct */}
                            <span>&#183;</span>
                            <Typography variant="subtitle" >{eventDetail?.type}</Typography>
                        </div>
            
                        <Typography variant="body1" style={{marginTop:15}}>
                            <strong>Event description</strong> 
                            <br></br>
                            {eventDetail?.description}
                        </Typography>


                        <Typography variant="body1" style={{marginTop:15}}>
                            <strong>About speaker</strong> 
                            <br></br>
                            A problem solver at heart with the zeal for change-making impact and interest in the digital space.
                        </Typography>

                        <Typography variant="body1" style={{marginTop:20, marginBottom:10}}>
                            <strong>Address</strong> 
                            <br></br>
                            {eventDetail?.address}
                        </Typography>

                        {console.log(eventDetail)}
                        {
                            eventDetail && 
                            <div className="map">
                                <Map>
                                    {eventDetail}
                                </Map>
                            </div>
                        }

                        <Divider style={{ margin: '25px 0px' }} />
                            <div className='detailsContainer'>
                                {/* Component for weather */}
                                
                                <div className="weather">
                                    <Typography variant="h5">
                                        <WbSunny/>
                                        <strong>26</strong>
                                        <sup>o</sup>
                                    </Typography>
                                    <Typography style={{marginLeft:15}}>
                                        Sunny
                                    </Typography>
                                </div>

                                {/* Component for rating*/}
                                <div className="rating">
                                    <Typography variant="h5" style={{marginBottom:2, marginTop:6}}>
                                        <strong>8.4</strong>
                                        <sup style={{fontSize: 15 + 'px'}}>(6k)</sup>
                                    </Typography>
                                    <Rating size="small" name="read-only" value={4} readOnly />
                                </div>
                                
                                {/* Component for speaker image */}
                                <div className="speaker-image">
                                    <img className="speakerImg" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Empire_State_Building_%28HDR%29.jpg/1200px-Empire_State_Building_%28HDR%29.jpg"} alt=""/>
                                </div>
                            </div>
                        <Divider style={{ margin: '25px 0' }} />
                        <Button type="submit" fullWidth variant="contained" style={{borderRadius:15, color:'white', backgroundColor:'rgb(' + 221 + ',' + 132 + ',' + 132 + ')'}}>
                            Proceed to booking
                        </Button>
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default EventDetails
