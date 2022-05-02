class Youtubes{
    firstname:string;
    lastname:string;
    age:number;
    
    getFirstname(){
        console.log("My firstname is "+this.firstname);
    }
    
    getLastname(){
        console.log("My lastname is "+this.lastname);
    }
}

let ytobj=new Youtubes();
ytobj.firstname="Satyam";
ytobj.getFirstname();
ytobj.lastname="Seth";
ytobj.getLastname();
