import { Component } from "react";

class PresentationC extends Component{
    constructor(props) {
        super(props)

    }

    render(){
        return(
            <div>
            <h2>hi {this.props.nom} {this.props.prenom}</h2>
            <hr />
        </div>
        )
    }
}

export default PresentationC