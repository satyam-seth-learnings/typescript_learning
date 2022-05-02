// let namets=(firstname:string,lastname:string)=>{
//     console.log(firstname,lastname);
// }
// namets("satyam","seth");
var namets = function (namepro) {
    console.log(namepro.firstname, namepro.lastname);
};
namets({
    firstname: "Satyam",
    lastname: "Seth"
});
