import React, { Component } from 'react'

export default class Message extends Component {

    constructor(props) {
        super(props);

        this.state = {
            msg : "Bienvenue visiteur",
            msgBTN : "inscription"
        }

        //this.inscription = this.inscription.bind(this);
    }

    inscription(){
        console.log("hi");
        //read only : !!! this.state.msg = "votre inscription est effectuée"
        this.setState({
            msg:"votre inscription est effectuée",
            msgBTN:"merci"
        })
    }

  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={() => this.inscription()}>{this.state.msgBTN}</button>
      </div>
    )
  }
}
