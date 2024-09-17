const userLoggedIn=true;
const debitCard=true;
const loggedInFromGoogle=false;
const loggedInFromEmail=true;
if(userLoggedIn && debitCard){
    console.log("You can access the account");
}
if(loggedInFromGoogle||loggedInFromEmail){
    console.log("You can access the account");
}