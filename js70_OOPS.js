const user={
    username:"hitesh", 
    loginCount: 8,
    signedIn:true
}
console.log(user.username);



const userm={
    username:"hitesh", 
    loginCount: 8,
    signedIn:true,

getUsermDetails:function(){
   // console.log("got user detail from database");
   console.log(this.username);
    }
}
//console.log(user.username); 
//console.log(user.getUsermDetails());