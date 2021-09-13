const promise = new Promise((resolve,reject) => {
    setTimeout(()=>{
        console.log("got the user");
        reject(new Error ("User got fked up!!"));
    },2000);
});

promise.then(user => {
    console.log(user);
})
.catch(err=>console.log(err)); // if we use err.message in the console.log we will get the message,will be logged in the form of object