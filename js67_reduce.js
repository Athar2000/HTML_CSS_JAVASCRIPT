const myNums=[2,3,4,5,6]
const myTotal=myNums.reduce(function(acc,currval){
    console.log({acc},{currval})
    return acc+currval
},2)
console.log(myTotal)


const myNum=[2,3,4,5,6]
const myTotals=myNum.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal);


const Shoppinng=[
    {
        itemName:"js ourse",
        price:2999
    },
    {
        itemName:"python ourse",
        price:200
    },
    {
        itemName:"c++ ourse",
        price:3999
    },
    {
        itemName:"nod.js ourse",
        price:9876
    },
]
const priceToPay=Shoppinng.reduce((acc ,item)=>(acc+item.price),0)
console.log(priceToPay)




