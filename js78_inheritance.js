class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(this.username)
    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.password=password
        this.username=username
}
addCourse(){
    console.log(this.username,'athar bhai');


}
}
const chai=new Teacher("chai","biryani","kuchbhi")
chai.addCourse()
const masalaChai=new User("masalaChai")
masalaChai.logMe()
console.log(chai===masalaChai);
console.log(chai===Teacher);
console.log(chai instanceof User);