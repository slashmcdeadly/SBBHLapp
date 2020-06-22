import React, { Component, Fragment } from 'react';
import axios from 'axios';
import GetUrl from './GetUrl'
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      teamNames: [], 
      // teamUrl: ''
    }
  }
  
  componentDidMount(){
    
    axios({
      url: 'https://statsapi.web.nhl.com/api/v1/teams',
      method: 'GET',
      dataType: 'json',  
    }).then((response) => {
  
      this.setState({
        teamNames: response.data.teams
      })
        console.log(this.state.teamNames)
      })
    }
  
  // handleClick = (e) => {
    
  //   this.setState({
  //     teamUrl: e.link
  //   })
  // }

    
  
  render(){
    // console.log(this.state.teamNames)
    return (
      <Fragment>
        <h1>SBBHL</h1>
        {
          this.state.teamNames.map( (team, index) => {
            return (
              <Fragment key={index}>

                <GetUrl 
                value={team['link']} name={team['name']}/>
                
               </Fragment>
              
            )
          })
        }

      </Fragment>

      
    );
  }
}


export default App;
