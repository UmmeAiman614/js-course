const myNums = [1,2,3]
const myTotal = myNums.reduce( (acc, CuurValue) => {
console.log(`Acc: ${acc} and currValue: ${CuurValue}`);
return acc+ CuurValue
}, 0)
console.log(myTotal);


const shoppingCart = [
    {
        itemName: "Js Course", 
        price: 3000
    },
    {
        itemName: "Python Course", 
        price: 5000
    },
    {
        itemName: "CPP Course", 
        price: 1000
    },
    {
        itemName: "Data science Course", 
        price: 6000
    },
]

const addToPay = shoppingCart.reduce( (acc, item) => (acc +item.price),0)
console.log(addToPay);


