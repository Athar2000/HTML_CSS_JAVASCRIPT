/*const descripter= Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter);
const chai={
    name:'ginger chai',
    price: 250,
    isAvailable:true
}
console.log(chai);*/



const descripter2= Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter2);
const chai={
    name:'ginger chai',
    price: 250,
    isAvailable:true
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
Object.defineProperties(chai,'name',{
    writable:false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
