import User from "./User.js";
import Stagiaire from "./Stagiaire.js";
import { CENTRE,GROUPE, sayHi } from "./User.js";


let u1 = new User("johndoe@gmail.com","1213456");
console.log(u1.info());

let s1 = new Stagiaire("johndoe@gmail.com","1213456","john","doe");
console.log(s1.info());

console.log(CENTRE);
console.log(GROUPE);
sayHi();

