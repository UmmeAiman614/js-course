const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

// console.log(descriptor);


const chai = {
    name: "ginger chai", 
    price: 50, 
    isAvailable: true,
    orderChai: function(){
        console.log(`chai is ready`);
        
    }
}
console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    writable: false,
  enumerable: false,
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key}; ${value}`);
    }
    
}