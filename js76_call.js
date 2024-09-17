function SetUsername(username){
    //complex DB Calls
    this.username=username
    console.log("athar");
}
function createUser(username,emal,password){
    SetUsername.call(this,username)
    this.emal=emal
    this.password=password

}
const chai=new createUser("chai","chai@fb.com","234")
console.log(chai);