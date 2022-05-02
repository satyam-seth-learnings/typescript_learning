class Youtubes{
    // firstname:string;
    // public lastname:string;
    // private age:number;
    // protected test:number;
    
    // constructor(firstname:string,lastname:string,age?:number){
    //     this.firstname=firstname;
    //     this.lastname=lastname;
    // }
    constructor(private firstname:string,private lastname:string,private age?:number){}

    getFirstname(){
        console.log("My firstname is "+this.firstname);
    }
    
    getLastname(){
        console.log("My lastname is "+this.lastname);
    }
}

let ytobj=new Youtubes("Satyam","Seth",22);
// ytobj.age=24;
ytobj.getFirstname();
ytobj.getLastname();
