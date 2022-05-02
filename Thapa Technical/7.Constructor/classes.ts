class Youtubes{
    firstname:string;
    lastname:string;
    age:number;

    constructor(firstname:string,lastname:string,age?:number){
        this.firstname=firstname;
        this.lastname=lastname;
    }

    getFirstname(){
        console.log("My firstname is "+this.firstname);
    }
    
    getLastname(){
        console.log("My lastname is "+this.lastname);
    }
}

// let ytobj=new Youtubes("Satyam","Seth",22);
let ytobj=new Youtubes("Satyam","Seth");
ytobj.getFirstname();
ytobj.getLastname();
