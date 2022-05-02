var Youtubes = /** @class */ (function () {
    function Youtubes() {
    }
    Youtubes.prototype.getFirstname = function () {
        console.log("My firstname is " + this.firstname);
    };
    Youtubes.prototype.getLastname = function () {
        console.log("My lastname is " + this.lastname);
    };
    return Youtubes;
}());
var ytobj = new Youtubes();
ytobj.firstname = "Satyam";
ytobj.getFirstname();
ytobj.lastname = "Seth";
ytobj.getLastname();
