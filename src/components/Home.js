import React, {Component} from 'react'
import axios from 'axios'

class Home extends Component{
    state = {
        posts:[ ]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res =>{
            console.log("results are ",res)
            this.setState({
                posts : res.data
            })
        } )
    }
    render(){
        const postsList = this.state.posts.length  ? (
            this.state.posts.map(post=>{
                return(
                    <div className="post card" key={post.id}>
                    <div className="card-content yellow">
                        <span className="card-title"> {post.title}</span>
                        <p>{post.body}</p>
                    </div>
                  </div>
                )
            })
        ) :(
                <div>
                    posts are not found
                </div>
            
        )
        return(
            <div className="container">
                <h4 className="center">Home</h4>
                <div>{postsList}</div>
            </div>
        )
    }
}
export default Home