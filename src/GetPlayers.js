// GetPlayers.js

import React, { Fragment, Component } from 'react';
import axios from 'axios';

class GetPlayers extends Component {

    constructor(){
        super();
        this.state = {
            players: ''
        }
    }

    componentDidMount(){
        console.log(this.props.url)
        axios({
            url: "https://statsapi.web.nhl.com/api/v1/teams/" + this.props.url + "roster",
            method: 'GET',
            responseType: 'json'
        })
    }


    render(){
        return(
            <Fragment>

                <button>Players</button>

            </Fragment>
        )
    }
}

export default GetPlayers;