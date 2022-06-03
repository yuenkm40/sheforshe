import React, {useEffect} from 'react';
import { Pagination, PaginationItem } from '@material-ui/lab';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPartners } from '../../actions/partners';
import useStyles from './stylespagination'

export default function Paginate({page}) {
    const classes=useStyles();
    const dispatch = useDispatch();
    const {numberOfPage} = useSelector((state) => state.partners);
    useEffect(() => {
      if (page)
      dispatch(getPartners(page));
    },[page,dispatch]);
  return (
    <Pagination 
        classes={{ ul: classes.ul}}
        count={numberOfPage}
        page={Number(page) || 1}
        variant="outlined"
        color="primary"
        renderItem={(item) => (
            <PaginationItem style={{marginLeft:20}}{...item} component={Link} to={`/partners?page=${item.page}`}/>
        )}
    />
   
  )
}
