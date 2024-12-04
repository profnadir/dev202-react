/* let isAdmin = false; */

/* if(isAdmin){
    console.log("admin");
}
else{
    console.log("not admin");
} */

/* console.log(isAdmin ? "admin" : "not admin");

let isMember=true;
let remise=isMember==true?0.2:0.1
console.log("remise: ",remise)

let nom = "nadir"
let salutation=nom?"salut "+nom:"inconnu"
console.log(salutation) */

//Object destructing

/* let formateur= {
    nom : "nadir",
    filiere : "dev",
    ville : "mohammedia"
} */

/* let nom = formateur.nom;
let filiere = formateur.filiere;
let ville = formateur.ville; */

/* let { nom , filiere, ville } = formateur;

function showInfo({nom,filiere,ville}) {
    console.log(nom, filiere, ville);
    
}

showInfo(formateur)

console.log(nom);
console.log(filiere);
console.log(ville); */

const personnes = [
    { nom: "Rami", age: 33, estMember: true },
    { nom: "Fatihi", age: 24, estMember: false },
    { nom: "Chakib", age: 45, estMember: true },
    { nom: "Mounir", age: 37, estMember: false },
];

let member = personnes.find(p=>p.age > 35).nom;
console.log(member);


/* let tabNames = personnes.map(
    // function(personne){
    //    return personne.nom
    //} 

    //personne => personne.nom
    p => p.nom
); */

let tabNames = personnes.map(p=>p.nom)

/* let members = personnes.filter(
    function(element) {
        return element.estMember == true
    }
) */

//let members = personnes.filter(p => p.estMember == true)
let members = personnes.filter(p => p.age > 33).map(p=>p.nom.toLocaleUpperCase())
console.log(members);


console.log(tabNames);

/* function (a,b) {
    return a+b
}

(a,b) => a+b */


/* let tabNom = [];

for (let i = 0; i < personnes.length; i++) {
    const nom = personnes[i].nom;
    tabNom.push(nom)
}

console.log(tabNom); */


let nums=[2,5,8,7,3]

let nums3 = nums.map(n=>n*3)

console.log(nums3);



const clients = [
    { nom: "Rami", montant: 4500 },
    { nom: "Karimi", montant: 2300 },
    { nom: "Chaouki", montant: 5500 },
    { nom: "Ramoun", montant: 7700 },
];
    
// old = 0
// old = 0 + 4500 = 4500
// old = 4500 + 2300 = 6800
// old = 6800 + 5500 = 12300
// old = 12300 + 7700 = 20000

let total = clients.reduce(
    function(old,element){
        return old = old + element.montant;
    }
,0);

console.log(total);

const stagiaires = [
    { nom: "Rami", note: 15 },
    { nom: "Karimi", note: 18 },
    { nom: "Chaouki", note: 10 },
    { nom: "Ramoun", note: 13 },
];

let t = stagiaires.reduce((o,s) => o+=s.note , 0)
console.log(t/stagiaires.length);


let notes = [12,13,14,35];

/* let cc1 = notes[0];
let cc2 = notes[1];
let cc3 = notes[2];
let efm = notes[3]; */

let [cc1,cc2,cc3,efm] = notes;

console.log(cc1,cc2,cc2,efm);


let numsdev = [1,2,3,4,5];

let [a,b,...rest] = numsdev;

// a = 1
// b = 2
/// rest = [3,4,5]


///////////////////////////////////

// dev1 
let tab1 = [1,2,3]
let tab2 = [...tab1.filter(n=>n!=2)];

tab1[1]=5
console.log(tab1);


//dev2
console.log(tab2);
//6


