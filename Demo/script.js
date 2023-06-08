//create
let user = {};
let user1 = new Object();

user = {
    name:"fzp",
    age:25
};
user.addr = "Dhaka";
user["id"] = 21;

// before after math


//add or modify
user.addr = "Dhaka";
//user.[id] = 21;

//delete
delete user.addr;
//delete user["name"];

//view
//alert(user.name);
//alert(user["age"]);

//multiword props
let user2 = {
    name:"fzp",
    age:25
};
user2.name= "ff";
user2["is Student"]= true;
//alert(user2["is Student"]);
//console.log(user2)

//naming restrictions: reserved words

let registration = {
    "for": "exam",
    "let": true
}
//console.log(registration.for);




//console.log(user);

//alert(user);