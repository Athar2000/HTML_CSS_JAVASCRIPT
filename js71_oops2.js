//constructor function
function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    return this
}
//const userOne=new User("Athar",24,true)
//const userTwo=new User("Anwar",22,false)
console.log(userOne);
console.log(userOne);


function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    this.greeting=function(){
        console.log(this.username);
    }
    return this
}
const userOne=new User("Athar",24,true)
const userTwo=new User("Anwar",22,false)
console.log(userOne);
console.log(userOne);





