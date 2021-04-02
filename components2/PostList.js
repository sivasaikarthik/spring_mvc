import React, { Component } from 'react'
import axios from 'axios'

 class PostList extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              posts:[],
              errorMessage:''
         }
     }
   //it only excuted in component life cycle once  
componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response=>{
        console.log(response)
        this.setState({posts:response.data})
    })
    .catch(error=>{console.log(error)})
    this.setState({errorMessage:'eroor in retriving data from  http'})
}

    render() {
        return (
            <div>
                Post list 
                {
                   this.state.posts.length? 
                   (this.state.posts.map(post=><div key={post.id}>{post.title}</div>)):null

                }
                <br/>
                {
                    this.state.errorMessage
                }
            </div>
        )
    }
}

export default PostList
