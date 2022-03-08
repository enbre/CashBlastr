console.log("insanity check")
const serverUrl =   "http://localhost:3000/users"

const request = new XMLHttpRequest();
request.open("GET", "./server.json")
request.onload = function() {
   const users = JSON.parse(request.responseText)
   // console.log(users.users[0].username)
}
request.send();
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

document.getElementById('pay').onclick =()=> {
   // alert('you clicked this')
   console.log('stop clicking this button!!!!')
}

// appboy.initialize({
//    baseUrl:'http://127.0.0.1:5500/',
//    enableLogging: true
// });

// appboy.openSession();