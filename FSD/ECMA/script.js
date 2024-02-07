//  "use strict"
//  a=5;
// console.log(a);

// function sum(a,a,b)
// {
//     var result=a+a+b;
//     console.log(result);

// }sum(5,5,1)
//  var fname="tiya"
//  console.log(fname.length);
//  console.log(typeof(fname));

// var msg=" this is a msg,message ";
// console.log(msg.length);
// console.log(msg.indexOf('is'));
// console.log(msg.replace("msg","message"));
// console.log(msg);

// console.log(msg.split(","))
// var m=msg.trim();
// var s=msg.trimStart();
// console.log(m.length);
// Array function

var arr= ["apple", "mango","grapes"];
console.log(Array.isArray(arr));
// for each

arr.forEach(function(item)
{
    console.log(item)
})

let arr2=[20,39,58,68];
// arr2.forEach(function(item,ind)
// {
//     arr2[ind]=item<50
// })
// console.log(arr2)

// filter
var arr3=arr2.filter(function(item)
{
    return item<50
})
console.log(arr2);
console.log(arr3);

// convert object in to Json
// var ppl={name:'Tiya',age:10}
// var json=JSON.stringify(ppl);
// console.log(json)
// // json to object
// var obj=JSON.parse(json)
// console.log(obj)


// function to display name

// function DisplayName(name)
// {
// console.log("hi  "+name);

// }DisplayName("Deepthi");

// template literal

// function greet(fname,lname)
// {
//     console.log(`hi${fname} and ${lname}`)
// }greet("deepthi","k")

// // Arrow function
// var dis=(a,b)=>{
//     console.log(`hi${a} and ${b}`)
// }
// dis("ram","joy")

// // multiplication
// var mul=(a,b)=>{
//     var c=a*b;
//     console.log(`result is${c}`)
// }
// mul(4,3)


var a=[5,2,3]
var b=[45,489]
// console.log(a.concat(b));
// Spread operator
var c=[...a,...b];
console.log(c);

// Array destructuring
var[ ,second,third]=[1,2,4]
console.log(second)
var[h,,h,...l]=[1,2,3,4,5,6,7,8,9];
console.log(l)

// Asynchronous coding
//  setInterval(()=>{
//     console.log("hi")
//  },3000);
// console.log("me first")
// setTimeout(()=>{
//     console.log("time out")
//  },5000);
 
//  Set up the setTimeout to stop the setInterval after 3 seconds
var interval=setInterval(()=>{
    console.log("start")

},1000);
setTimeout(()=> {
    console.log("stopped after 3 sec");
   
    clearInterval(interval);
},3000);


