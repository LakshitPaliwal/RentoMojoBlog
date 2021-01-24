import React from 'react';
import PostList from './PostList';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const App=()=> {
  return (
    <div >
    <AppBar position="static">
        <Toolbar>
            <Typography>Rento Mojo Blog Assignment by LAKSHIT PALIWAL</Typography>
        </Toolbar>
      </AppBar>
      <PostList/>
    </div>
  );
}

export default App;
