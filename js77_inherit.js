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
const chai=new Teacher("chai","chai@teacher.com","345")
chai.addCourse()
