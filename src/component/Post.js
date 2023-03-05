import React,{useState,useEffect} from 'react'
import { Container, List, ListItem, ListItemText, Typography } from '@mui/material';
import Badge from '@mui/material/Badge';
import RecommendIcon from '@mui/icons-material/Recommend';
import Divider from '@mui/material/Divider';

function Post() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/posts')
          .then(response => response.json())
          .then((data)=>{
            
            setPosts(data.posts);
           
          });
      }, []); 
  return (
  <Container>
    <List >
    {posts.map(post => {
     
      return (
        
    <ListItem key={post.id}>
         
        <ListItemText primary={post.title} secondary={
            <>
            
            <Typography>{post.body}</Typography>
            
                <Badge sx={{mt:1}} badgeContent={post.reactions>0?post.reactions:'0'} color="primary" ><RecommendIcon/></Badge>
                
            <Typography>Tags:</Typography>
             {post.tags.map(tag => (<Typography>{tag}</Typography>))}
              <Typography sx={{mb:1}}> User Id:{post.userId}</Typography>
              <Divider />
              </>
            } />
           
        <ListItem>
        </ListItem>
      </ListItem>
      );
      
    })}
  
    </List>
    
    </Container>
  )
}

export default Post
