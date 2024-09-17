const User={
    nam:"chai",
    email:"athar@gmail.com"
}

const Teacher={
    makeVideo:true

}
const TeacherSupport={
    isAvailable:false

}
const TASupport={
    makeAssignment:'js assignment',
    fullTime:true,
    __proto__:TeacherSupport,
}
Teacher.__proto__=User



//modern Syntax
Object.setPrototypeOf(TeacherSupport,Teacher)
let anotherUsername="ChaiAurCode"
String.prototype.trueLength=function(){
    console.log(this)
    console.log(this.name)
    console.log(this.trim().length);
}
anotherUsername.trueLength()


