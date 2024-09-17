let myHeros=["thor","spiderman"]
let heroPower={
    thor:"hammer",
    spiderman:"web",
    getSpiderPower:function(){
        console.log(this.spiderman)

    }
}
Object.prototype.hitesh=function(){
    console.log("hitesh");
}
Array.prototype.heyHitesh=function(){
    console.log("hey hitesh");
}
heroPower.hitesh()
myHeros.hitesh()
myHeros.heyHitesh()