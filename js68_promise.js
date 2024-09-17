const promiseOne=new Promise(function(resolve,reject){
    //DO an async task
    //DB calls,cryptography,network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("Promise consumed");
})




new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },100)
}).then(function(){
    console.log("Async 2 resolved");

})



const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Chai",email:"chai@chaiaurcode.com"})

    },1000)
})
    promiseThree.then(function(user){
        console.log(user);

    })




const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"hitesh",password:"123"})
        } else{
            reject('ERROR: Something went wrong')

        }

        
    },1000)
})

 promiseFour.then((user)=>{
    console.log(user);
    return user.username
 }).then((username)=>{
 console.log(username);
 }).catch(function(error){
    console.log(error);
 }).finally(()=>console.log("THE PROMISE IS either resolved or rejected"))


 
 
 
 const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"javascript",password:"123"})
        } else{
            reject('ERROR: js went wrong')
        }
},1000)
});
async function consumePromiseFive(){
   const responce= await promiseFive
   console.log(responce)

}



consumePromiseFive()
async function getAllUser() {
    try{
        const responce =await fetch('https://jsonplaceholder.typicode.com/users')
        console.log(date);
    }catch(error){
        console.log("E:",error);
        

    }
    
}
    