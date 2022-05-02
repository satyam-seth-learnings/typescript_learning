var Youtubes = /** @class */ (function () {
    // firstname:string;
    // public lastname:string;
    // private age:number;
    // protected test:number;
    // constructor(firstname:string,lastname:string,age?:number){
    //     this.firstname=firstname;
    //     this.lastname=lastname;
    // }
    function Youtubes(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    Youtubes.prototype.getFirstname = function () {
        console.log("My firstname is " + this.firstname);
    };
    Youtubes.prototype.getLastname = function () {
        console.log("My lastname is " + this.lastname);
    };
    return Youtubes;
}());
var ytobj = new Youtubes("Satyam", "Seth", 22);
// ytobj.age=24;
ytobj.getFirstname();
ytobj.getLastname();
