import React, { Component } from 'react'

export default class JeuDe extends Component {
    constructor(props) {
        super(props)
        this.state = { face: null, compteur: 0, fin: false };
    }

    jouer() {
        const valeur = Math.floor(Math.random() * 6) + 1;//1..6

        if(valeur==this.props.cache){
            this.setState({face:valeur,fin:true, compteur:this.state.compteur+1})
        }else{
            this.setState({face:valeur, compteur:this.state.compteur+1})
        }
    }

    initialiser() {
        this.setState({ face: null, compteur: 0, fin: false });
    }

    getImage() {
        return `images/face${this.state.face}.PNG`;
    }

    render() {
        const styleImage = { width: "60px", height: "60px" };
        return (
            <div style={{ margin: "50px" }}>
                <img src="images/init.PNG" />
                <h1>Jeu de Dé {this.props.cache}</h1>
                <h2>face: {this.state.face}</h2>
                {this.state.face && <img src={this.getImage()} style={styleImage} />}
                <h2>nombre d'essais {this.state.compteur}</h2>
                {
                    this.state.fin ?
                    <div>
                        <p>Bravo vous avez trouvez la face cachée.....</p>
                        <button onClick={() => this.initialiser()}>Initialiser</button>
                    </div>
                    : <button onClick={() => this.jouer()}>jouer</button>
                }
            </div>
        )
    }
}
