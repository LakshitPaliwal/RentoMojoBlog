import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';

import PersonIcon from '@material-ui/icons/Person';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import UserHeader from '../components/UserHeader';

class PostList extends React.Component{
    componentDidMount(){
        this.props.fetchPosts();
        //action creator
    }

renderList(){
    return this.props.posts.map(post=>{
        return(<>
            <List  key={post.id}>
            <ListItem>
            <Typography>
                    <UserHeader userId={post.userId}/> 
                </Typography> 
            </ListItem>
<Button>
            <ListItem>
              <ListItemAvatar>
               <Button> <Avatar>
                  <PersonIcon />
                </Avatar></Button>
              </ListItemAvatar>
              <ListItemText primary={post.title} secondary={post.body} />
            </ListItem>
            </Button>
           
            <Divider  component="li" />
            </List>



            
            </>
        )
    })
}

    render() {
        return (
            <div>
                {this.renderList()}
                
            </div>
        )
    }
}


const mapStateToProps = (state) =>{
    return { posts : state.posts};
};

export default connect( mapStateToProps, {fetchPosts}) (PostList) ;