const name={
    name:"Athar",
    age: 24,
    location:'Lucknow',
    email:'athar@gmail.com',
    isLoggedin:false,
    lastLoginDays:["All360Days"]
}
console.log(name.name)
console.log(name.age)
console.log(name.email)
console.log(name.isLoggedin)
console.log(name.lastLoginDays)
name.email="bhai@gmail.com"
Object.freeze(name)
name.email="ahdgdg.com"
console.log(name);

name.greeting=function(){
    console.log("In the name of Athar");

}
console.log(name.greeting());
