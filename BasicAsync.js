//console.log("the numbering starts now!!");
/*const items= [1,2,3,4,5];
items.forEach(item => {
    setTimeout(()=> {
        console.log(item);
    },3000);
})*/

function loginUser(email,password) {
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            console.log("Now we have the data boom!!")
            resolve({userEmail: email});
        },2500);
    });
}
const user = loginUser("prateektkonda@gmail.com","srm3000$",user => {
    console.log(user);
})

function getUserVideos(email) {
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            resolve(['video1','video2']);
        },2500);
    });
}

function VideoDetails() {
    return new Promise ((resolve,reject)=> {
        setTimeout(() => {
            resolve("title of the video");
        },2500);
    });
}

loginUser('nedstark','bumbla')
.then(user => getUserVideos(user.email))
.then(videos => VideoDetails(videos[0]))
.then(detail => console.log(detail));

