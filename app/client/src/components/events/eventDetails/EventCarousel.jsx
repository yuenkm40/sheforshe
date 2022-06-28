import React from 'react';
import { useNavigate } from 'react-router-dom';
import './eventCarousel.scss';

import Carousel from 'react-material-ui-carousel';
import { ArrowBackSharp } from "@material-ui/icons";
import { Button } from '@material-ui/core';

function EventCarousel() {

    const items = [
        {
            Image: "https://images.unsplash.com/photo-1555109307-f7d9da25c244?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
        },
        {
            Image: "https://images.unsplash.com/photo-1555109307-f7d9da25c244?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
        }
    ];

    const navigate = useNavigate();

    const returnToEvents = () => {
        navigate(`/events`);
    };

    // Obtain event information
    return(
        <div className="eventCarousel">
             <Button
                sx={{ mb: 2 }}
                color="white"
                onClick={returnToEvents}
                startIcon={<ArrowBackSharp style={{ color: 'white'}}/>}
                style={{color:'white', fontSize:'14px'}}
                
                >
                 Back to events
            </Button>
            <Carousel interval="5000" navButtonsAlwaysVisible={true} indicators={true} animation="slide">
                {
                    items.map(item => { return(<img className="carouselImg" src={item.Image}/>);})
                }
            </Carousel>
            {/* For view all pictures button */}
            {/* <div className="viewImages">
                <Button type="submit" width="auto" variant="contained" style={{borderRadius:15, color:'white', backgroundColor:'rgb(' + 221 + ',' + 132 + ',' + 132 + ')'}}>
                    View all images
                </Button>
            </div> */}
        </div>

    );
}

export default EventCarousel;