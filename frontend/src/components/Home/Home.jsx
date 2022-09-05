import React, { useState } from 'react'
import { Container, Grow, Grid, Paper, InputBase, Button } from '@material-ui/core';
import ChipInput from 'material-ui-chip-input';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getPostsBySearch } from '../../actions/posts';
import Paginate from '../Pagination/Pagination'
import { useNavigate, useLocation } from 'react-router-dom';
import useStyles from './styles';
import SearchIcon from '@material-ui/icons/Search';

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const Home = () => {
    const [ currentId, setCurrentId ] = useState(0);
    const [ search, setSearch ] = useState('');
    const [ tags, setTags ] = useState([]);
    const { posts } = useSelector((state) => state.posts)
    const query = useQuery();
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');

    const handleKeyPress = (e) => {
      if (e.keyCode === 13) {
        searchPost();
      }
    }

    const handleAdd = (tag) => {
      return setTags([...tags, tag]);
    }
    const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete));
    const searchPost = () => {
      if ( search.trim() || tags ) {
        dispatch(getPostsBySearch({search, tags: tags.join(',')}));
        navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`)
      } else {
        navigate('/')
      }
    }
    
  return (
    <Grow in>
    <Container maxWidth='xl'>
      <Grid container className={classes.mainContainer} spacing={3} justifyContent='space-between' alignItems='stretch'>
         <Grid item xs={12} sm={6} md={9}>
           <Posts setCurrentId={setCurrentId}/>
         </Grid>
         <Grid item xs={12} sm={6} md={3}>
           <div className={classes.searchContainer}>
           <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              value={search}
              onKeyPress={handleKeyPress}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <ChipInput 
            className={classes.chipInput}
            value={tags}
            onAdd={handleAdd}
            onDelete={handleDelete}
            placeholder='Search by tags'
            variant='outlined'
          />
          <Button onClick={searchPost} className={classes.searchButton} color='primary' variant='contained'>Search</Button>
           </div>
           <Form currentId={currentId} setCurrentId={setCurrentId}/>
         </Grid>
      </Grid>
      {( !searchQuery && !tags.length) && (
        <Paper className={classes.pagination} elevation={6}>
          <Paginate page={page} />
        </Paper>
      )}
    </Container>
  </Grow>
  )
}

export default Home