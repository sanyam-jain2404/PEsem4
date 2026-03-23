let P=new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve("Data Connected");
    }
    else{
        reject("Data Not Connected");
    }
})
fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>response.json())
// .then(data=>console.log(data))
.then(data=>data.forEach(user=>console.log(user.name)))
.catch(error=>console.error(error))