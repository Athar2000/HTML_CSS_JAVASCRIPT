const user={
    username:"Athar",
    price:999,
    welcomeMessage:function(){
        console.log('${this.username},welcome to website');

    }
}
user.welcomeMessage()
user.username="sam"
user.welcomeMessage()
console.log(this);

function chai(){
    let username="hitesh"
    console.log(this.username);
}
chai()