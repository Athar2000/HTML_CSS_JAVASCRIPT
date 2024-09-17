//["","".""]
//[{},{},{}]
const arr=[2,3,4,5,6,7]
for (const iterator of arr){
    console.log(iterator);
}

const greeting="Hi Athar"
for(const greet of greeting){
    console.log(greet)

}

//Maps
const map=new Map()
map.set('IN',"India")
map.set('USA',"UK")
map.set('bn',"Bangladesh")
console.log(map);
for(const [key,value]of map){
    console.log(key,':-',value)
}