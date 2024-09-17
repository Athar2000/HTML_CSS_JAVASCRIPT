function User(email,password){
    this._email=email;
    this._password=password;
    Object.defineProperty(this,'email',{
    })
    Object.defineProperty(this,'password',{
    })
}
const chai=new User("chai@chai","Chai")
console.log(chai.password);
