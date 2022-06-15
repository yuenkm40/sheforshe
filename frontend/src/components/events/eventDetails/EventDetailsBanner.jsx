import React from 'react';
import './eventDetailsBanner.scss'

import { CalendarToday } from "@material-ui/icons";
import { Button } from '@material-ui/core';


function EventDetailsBanner() {

    // Obtain contain calendar
    return(
        <div className='top-banner'>
            <div className='event-details'>
                <Button type="submit" width="auto" variant="contained" style={{fontSize:12, borderRadius:15, color:'white', backgroundColor:'rgb(' + 221 + ',' + 132 + ',' + 132 + ')'}}>
                    Go to your events
                    <CalendarToday fontSize="small" style={{ color: 'white', marginLeft:'8px' }}/>
                </Button>   
            </div>
        </div>
    );
}

export default EventDetailsBanner;
