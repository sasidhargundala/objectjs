
var user = {
    firstName : "sasidhar",
    lastName : "sasi",
    emailId : "sasi123@gmail.com",
    age : 99,

    getfullName : function(){
        return this.firstName +" " + this.lastName
    }

}
let user1 = Object.create(user);
console.log(user1.firstName);
console.log(user1.lastName);
console.log(user.getfullName());