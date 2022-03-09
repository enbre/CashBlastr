console.log("insanity check")
// const serverUrl = "http://localhost:3000/users"

// var requirejs =require("requirejs");
// requirejs.config({
//    nodeRequire: require
// });

const  populate = async () =>{
   const requestURL = './server.json'
   const request = new Request(requestURL);
   const response = await fetch (request);
   const user = await response.json();
   // console.log(user)
   document.getElementById('username').innerHTML = `@${user.userName}`;
   document.getElementById('profilePic').src = `./assets/${user.profilePic}`;
   document.getElementById('greeting').innerHTML = `Hi, ${user.firstName}`;
   document.getElementById('balance').innerHTML = `$${user.balance} in CashBlastr`;
   document.getElementById('main-feed').innerHTML = 
   // <img src="./assets${user.pendingActivity[0].sentFrom.profilePic}" alt="Profile Pic">
   // <img src="./assets${user.pendingActivity[0].sentTo.profilePic}" alt="Profile Pic">
      `<h4> Pending activity:</h4>
      <div class="main-feed-entry">

      <p> ${user.pendingActivity[0].sentFrom.userName} paid ${user.pendingActivity[0].sentTo.userName}</p>

      <p>${user.pendingActivity[0].comments}</p>
      <span><i class="fas fa-heart"></i> &nbsp <i class="fas fa-comment"></i></span>
      <br>
      &nbsp
   </div>`;



}
populate()






// import appboy from '@braze/web-sdk';
// const appboy = requirejs("@braze/web-sdk");



document.getElementById('pay').onclick = () => {
   alert('Congrats on clicking the button!!')
   console.log('stop clicking this button!!!!')
}

// appboy.initialize({
//    baseUrl:'http://127.0.0.1:5500/',
//    enableLogging: true
// });

// appboy.openSession();