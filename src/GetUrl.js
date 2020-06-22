// GetUrl.js

import React, { Component, Fragment } from 'react';
import GetPlayers from './GetPlayers'


class GetUrl extends Component {

    constructor(){
        super();
        this.state = {
            url: '',
            isShowing: false
        }
    }
    
    handleClick = (e) => {
        
        const link = e.target.value;
        
        this.setState({
            url: "https://statsapi.web.nhl.com/api/v1/teams/" + {link} + "roster",
            isShowing: this.state.isShowing ? false : true
        })
    }
    
    render(){
        console.log(this.state.url)
        return (
            <Fragment>

                <button onClick={this.handleClick} value={this.props.value}>{this.props.name}</button>

                {
                    this.state.isShowing ? <GetPlayers url={this.state.url}/> : null
                }

            </Fragment>
        )
    }

}

export default GetUrl;