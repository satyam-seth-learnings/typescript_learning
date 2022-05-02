// let namets=(firstname:string,lastname:string)=>{
//     console.log(firstname,lastname);
// }

// namets("satyam","seth");

// let namets=(namepro:{firstname:string,lastname:string})=>{
//     console.log(namepro.firstname,namepro.lastname);
// }

// namets({
//     firstname:"Satyam",
//     lastname:"Seth"
// });

interface Namepro{
    firstname:string,
    lastname:string,
}

let namets=(namepro:Namepro)=>{
    console.log(namepro.firstname+" "+namepro.lastname);
}

namets({
    firstname:"Satyam",
    lastname:"Seth"
})