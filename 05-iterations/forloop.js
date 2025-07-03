//For Loop
for (let i = 0; i <= 10; i++) {
    const element = i;
    if(i==5){
        // console.log('5 is best number');
        
    }
    // console.log(element);
    
    
}

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop value is: ${i}`);
    for (let j = 0; j <=5 ; j++) {
        // console.log(`inner lopp value: ${j} and outer loop value: ${i}`);
        // console.log(`${i} * ${j} = ${i*j}`);       
    }  
}

let myArray = ["Umme", "Amna", "Aiman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}


//key words
// break and continue

for (let index = 0; index <= 20; index++) {
    if(index == 5){
        console.log("5 detectd");
        break;
    }
    // console.log(`the value of i is ${index}`);
    
    
}
for (let index = 0; index <= 20; index++) {
    if(index == 5){
        console.log("5 detectd");
        continue;
    }
    console.log(`the value of i is ${index}`);
    
    
}