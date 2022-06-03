import React, { useState } from 'react'
import './partnershome.scss'
import Partners from './Partners';
import EventPic from '../assets/women.png'
import {NavLink, useNavigate, useLocation, Navigate, useSearchParams} from 'react-router-dom';
import {Paper, TextField, Button} from '@material-ui/core';
import ChipInput from 'material-ui-chip-input';
import Pagination from './Pagination';
import useStyles from './styles.jsx';
import {getPartnersBySearch } from '../../actions/partners';
import { useDispatch } from 'react-redux';
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
export default function PartnersHome() {
  const query = useQuery();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');
  const classes = useStyles();
  const [search,setSearch] = useState('');
  const [tags,setTags] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPartner();
    }
  };

  const handleAdd = (tag) => setTags([...tags, tag]);
  const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete));
  const searchPartner = () => {
    if (search.trim() || tags) {
      dispatch(getPartnersBySearch({search, tags: tags.join(',')}));
      navigate(`/partners/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    } else {
      navigate('partners');
    }
  };

  return (
    <div className="partnershome">
      <div className="top-banner">
        <img src={EventPic} alt=""></img>
        <div className="text">
        <h1>Discover and get connected to the world's best mentors.</h1>
        <button> <NavLink to="/admin">
                Be a mentor
            </NavLink></button>
        </div>
      </div>

      <div className="bottom">
      <div className="search">
        <TextField name="search" 
          variant="outlined" 
          label="Search Partners" 
          value={search}
          fullWidth
          onKeyPress={handleKeyPress}
          InputLabelProps={{className: classes.input}}
          style={{width:570}}
          onChange={(e) => setSearch(e.target.value)}/>

        <ChipInput  style={{marginLeft:'50px', height:60, width:370}}
          value={tags}
          onAdd={handleAdd}
          onDelete={handleDelete}
        
          InputLabelProps={{className: classes.input}}
          label="Search Tags"
          variant="outlined"
        />

        <Button onClick={searchPartner}  className={classes.button} style={{marginLeft:65,backgroundColor:"pink", color:"white",marginTop:10}}
        variant="contained">Search</Button>
      </div>

      <Partners/>
      {(!searchQuery && !tags.length) && (
      <Paper elevation={0} style={{marginTop:35, borderRadius:4,padding:'16px 380px', alignItems:'center'}}>
        <Pagination page={page}/>
      </Paper>
      )}
      </div>
    
    </div>
  )
}
