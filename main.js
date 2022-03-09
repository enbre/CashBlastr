console.log("insanity check")
// const serverUrl = "http://localhost:3000/users"
let user;
const  populate = async () =>{
   const requestURL = './server.json'
   const request = new Request(requestURL);
   const response = await fetch (request);
   user = await response.json();
   // console.log(user)
   document.getElementById('username').innerHTML = `@${user.username}`;
   document.getElementById('profilePic').src = `./assets/${user.profilePic}`;
   document.getElementById('greeting').innerHTML = `Hi, ${user.firstname}`;
   document.getElementById('balance').innerHTML = `$${user.balance} in CashBlastr`;
}
populate()

// const username = 
// const populateSidebar = (obj) => {
//    const
// }


// let user;
// const request = new XMLHttpRequest();
// request.open("GET", "./server.json")
// request.onload = function () {
//    console.log(request.status)
//    if (request.status >= 200 & request.status < 400) {
//       user = JSON.parse(request.responseText)
//    } else console.log('No data found')
// }

// request.onerror = function (){
//    console.log("Connection error")
// }
// // renderHtml(user)
// request.send();

// const renderHtml = (user)=>{

// }
// import appboy from '@braze/web-sdk';
// const appboy = require("@braze/web-sdk");

// module.exports = function(){
//    const faker = require("faker");
//    const _ = require("lodash")
//    return {
//       users: _.times(20), function (n) {
//          return {
//             id: n,
//             name: faker.name.findName(),
//             profilePic: faker.internet.avatar()
//          }
//       }
//    }
// }

document.getElementById('pay').onclick = () => {
   console.log('stop clicking this button!!!!')
   // console.log(user.username)
}

// appboy.initialize({
//    baseUrl:'http://127.0.0.1:5500/',
//    enableLogging: true
// });

// appboy.openSession();