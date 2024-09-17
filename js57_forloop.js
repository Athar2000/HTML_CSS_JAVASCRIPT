for (let i=0;i<=9;i++){
    console.log('outer loop values: ${i}');
    for(let j=0;j<=9;j++){
        
        //console.log('inner loop values: ${element}');
        console.log(i+'*'+j+'='+i*j)
    }

}

let myArray=["flash","Athar","kaousar"]
for (let index=0;index<myArray.length;index++){
    const element=myArray[index];
    console.log(element);
}

for (let i=0;i<=20;i++){
    if (i==5){
        console.log('Deteced 5');
        break;
    }
    console.log(i);
}

for (let i=0;i<=20;i++){
    if (i==5){
        console.log('Deteced');
        continue
    }
    console.log({i})
}

