import axios from "axios";
let promise=new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve("Data Connected");
    }
    else{
        reject("Data Not Connected");
    }
})
// fetch("https://jsonplaceholder.typicode.com/users")

// .then(response=>response.json())
// .then(data=>console.log(data))
axios.get("https://jsonplaceholder.typicode.com/users")
.then(data=>console.log(data))
.catch(error=>console.log(error))