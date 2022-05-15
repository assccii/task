import React, {Component, Router} from "react"
import axios from 'axios'


class Page2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allData : []
        }
    }

    componentDidMount() {
        // console.log(this.props.match.params.id)
        axios.get('https://api.spacexdata.com/v4/launches')
        .then(response => {
            this.setState ({
                allData : response.data
            })
            // console.log(response.data)
            // console.log(this.state.allData.length)
        })
      }

    render() {
        const {allData} = this.state
        // console.log(allData[0].name)
        let fid = this.props.match.params.id;
        // console.log(fid)
        let ids = allData.map(function(element){
            return element.id;
        })
        // console.log(allData[0].launchpad)
        let idx;
        for(let i = 0; i < ids.length; i++) {
            if(fid === ids[i]) {
                idx = i;
                break;
            }
        }
        console.log(idx)
        let data = allData[idx];
        console.log(data)
        return ( 
        <div className="home">
            {/* <h2>Name : {data.name}</h2> */}
        </div>
    )
    }
}
export default Page2