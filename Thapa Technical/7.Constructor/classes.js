var Youtubes = /** @class */ (function () {
    function Youtubes(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    Youtubes.prototype.getFirstname = function () {
        console.log("My firstname is " + this.firstname);
    };
    Youtubes.prototype.getLastname = function () {
        console.log("My lastname is " + this.lastname);
    };
    return Youtubes;
}());
// let ytobj=new Youtubes("Satyam","Seth",22);
var ytobj = new Youtubes("Satyam", "Seth");
ytobj.getFirstname();
ytobj.getLastname();
