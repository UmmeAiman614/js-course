let myDate = new Date;
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());


// console.log(typeof myDate);

// let myCreatedDate = new Date(2023,5,5,3,4,5);
// console.log(myCreatedDate.toLocaleString());
let myCreatedDate = new Date(4-14-2023);
// console.log(myCreatedDate.toDateString());

let timestamp = Date.now();
// console.log(timestamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newdate = new Date();
// console.log(newdate);
// console.log(newdate.getMonth() + 1);
// console.log(newdate.getHours());


console.log(newdate.toLocaleString('defaul',{
    weekday : 'short',
    minute : 'numeric'
}
));







