import User from "./User.js";

class Stagiaire extends User{
    constructor(email,pwd,nom,prenom){
        super(email,pwd);
        this.nom = nom;
        this.prenom = prenom;
    }

    info(){
        return `${super.info()} Nom : ${this.nom} Prenom : ${this.prenom}`;
    }
}
export default Stagiaire;