import React,{useState,useEffect} from 'react'
import { Container, List, ListItem, ListItemText, Typography } from '@mui/material';
import Badge from '@mui/material/Badge';
import RecommendIcon from '@mui/icons-material/Recommend';
import Divider from '@mui/material/Divider';

function Post() {
    const [posts, setPosts] = useState([]);  // Define a state variable 'posts' with an initial value of an empty array using the 'useState' hook
    useEffect(() => {
        fetch('https://dummyjson.com/posts')  
          .then(response => response.json())  // Convert the response to JSON format 
          .then((data)=>{
            
            setPosts(data.posts); // Set the state variable 'posts' to the array of posts fetched from the API
           
          });
      }, []); // The effect runs only once, as there is an empty dependency array
  return (
  // Create a container that centers its child elements horizontally on the page
  <Container>
    <List > {/* Create an unordered list to display the list of posts */}

     {/* Map through the 'posts' array and render each post */}
    {posts.map(post => {
     
      return (
        
     <ListItem key={post.id}>    {/*Create a list item to display each post*/}
         {/* Render the post title and body */}
        <ListItemText primary={post.title} secondary={
            <>
            
            <Typography>{post.body}</Typography>
             {/* Render a badge with the number of reactions */}
                <Badge sx={{mt:1}} badgeContent={post.reactions>0?post.reactions:'0'} color="primary" ><RecommendIcon/></Badge>
                
            <Typography>Tags:</Typography>
             {post.tags.map(tag => (<Typography>{tag}</Typography>))}
              {/* Render the user ID */}
              <Typography sx={{mb:1}}> User Id:{post.userId}</Typography>
              {/* Render a divider between each post */}
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
