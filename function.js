// using object literals or object initializers

var user = {
    firstName : "sasidhar",
    lastName : "sasi",
    emailId : "sasi123@gmail.com",
    age : 99,

    getfullName : function(){
        return this.firstName +" " + this.lastName
    }

}
console.log(user);
console.log(user.getfullName());