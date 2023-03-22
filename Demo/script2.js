//let user ={};
let prop_name = "age";

//user[prop_name] = 22;
//user.prop_name = 23;

//property value shorthand
function make_user(name, age){
    return{
        name,
        age
    };
}

let user = make_user("fzp", 25);

console.log(user)

let chk = user["age"] === undefined;
let chk2 = "addr" in user;
//alert(chk2);

for (let key in user){
    alert(key);
    alert(user.key);
}