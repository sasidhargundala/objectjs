class user{
    constructor(firstName, lastName, emailId, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
        this.age = age;
    }
    getfirstName(){
        return this.firstName;
    }
    getlastName(){
        return this.lastName;
    }
}
let user1 = new user("sasidhar","sasi", "sasi@1234","99");
console.log(user1);