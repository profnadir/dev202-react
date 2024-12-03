export default class User {
    constructor(email,pwd){
        this.email = email;
        this.pwd = pwd;
    }

    info(){
        return `Email : ${this.email}`;
    }
}

export const CENTRE = "CFPMSM";
export const GROUPE = "DEV202";

export function sayHi() {
    console.log("hi")
}

//export {CENTRE,GROUPE, sayHi}