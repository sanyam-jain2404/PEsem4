//for in loop

// let arr=[1,2,3,4,5,6,7,8];
// let count =0;
// for(i in arr){
//     if(arr[i]%2==0) {
//         console.log(arr[i]);
//     }
// }

//-------------------------------------------------------------------------------------------------------------

// let arr=[1,2,3,4,5];
// for(const i in arr){
//     arr[i]=arr[i]+=3;
// }
// console.log(arr);

//------------------------------------------------------------------------------------------------------------

// let user={name:"Sanyam",age:19,branch:"CS"};
// for(const i in user){
//     console.log(i,user[i]);
// }

//=============================================================================================================

// For Each loop

// const color=["Red","Black","White"];
// color.forEach(i => console.log(i));

//-------------------------------------------------------------------------------------------------------------

// let arr=[1,2,3,4,5];
// arr.forEach((i,a)=>arr[a]+=3); //i=value,a=index
// console.log(arr);

//=============================================================================================================

//for of loop

// let lang=["HTML","CSS","JS"];
// for(const i of lang){
//     console.log(i);
// }

//object is not iterable in this

//==============================================================================================================

// //function string with variable

// function greet(name){
//     console.log(`Hello ${name}`);
// }
// greet("user");

//=============================================================================================================

//recursion with anonymous function

// const fact = function(n){
//     if(n==0 || n==1) return 1;
//     else return n*fact(n-1);
// }
// console.log(fact(5));