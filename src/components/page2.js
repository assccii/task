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
        axios.get('https://api.spacexdata.com/v4/launches')
        .then(response => {
            this.setState ({
                allData : response.data
            })
        })
      }

    render() {
        const {allData} = this.state
        let fid = this.props.match.params.id;
        let ids = allData.map(function(element){
            return element.id;
        })
        let idx;
        for(let i = 0; i < ids.length; i++) {
            if(fid === ids[i]) {
                idx = i;
                break;
            }
        }
        let data = allData[idx];
        console.log(data)
// not able to access the array data with either index of "property" !!

        return ( 
        <div className="home">
            {/* <h2>Name : </h2> */}

        </div>
    )
    }
}
export default Page2