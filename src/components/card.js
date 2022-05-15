import React, {Component, useState, BrowserRouter, Route, Switch, Link} from "react"
import axios from 'axios'
import Page2 from "./page2"

class Card extends Component {


    constructor(props) {
        super(props)
        this.state = {
            posts : []
        }
    }

    componentDidMount() {
        axios.get('https://api.spacexdata.com/v4/launchpads')
        .then(response => {
            this.setState ({
                posts : response.data
            })
            // console.log(response.data)
        })
    }

    

    render() {
        const {posts} = this.state
        // posts.launches.slice(0, 3);
        function handleClick() {
            // console.log("you clicked")
            <BrowserRouter>
                <div>
                    <switch>
                        <Route component = {Page2} />
                    </switch>
                </div>
            </BrowserRouter>
        }
        // console.log(posts[0])
        // console.log(posts[0].launches)
        return ( 
        <div className="home">
            
            <h1 className="heading"><u>List of launchpads from SpaceX</u></h1>
            {posts.length === 0 && <h2>No launches available</h2>}
            {
                posts.map(post => 
                <li className = "launch" key = {post.id}>
                    <h3 className="name size3 bold">Name : {post.name}</h3> <br />
                    <p className="details size3 bold"> Details : {post.details}</p><br />
                    <h4>Status : {post.status}</h4> <br />
                    {post.launches.length === 0 && <p><b>No launches available for this launchpad</b></p>}
                    {post.launches.length >= 3 && 
                        <div>
                            <p className="top-3-launches-text"><b>top 3 launches are for {post.name} are -</b></p>
                            <ol>
                                <li onClick = {()=>this.props.history.push(`/${post.launches[0]}`)}>
                                    {post.launches[0]}
                                </li>
                                <li onClick = {()=>this.props.history.push(`/${post.launches[1]}`)}>
                                    {post.launches[1]}
                                </li>
                                <li onClick = {()=>this.props.history.push(`/${post.launches[2]}`)}>
                                    {post.launches[2]}
                                </li>
                            </ol>
                        </div>
                        }
                     <hr />
                </li>)
            }
        </div>
    )
    }
}
export default Card