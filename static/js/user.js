function submit() {
    var obj = new Object();
    obj.username = document.getElementById("username").value;
    obj.name = document.getElementById("name").value;
    obj.password = document.getElementById("password").value;
    var url = 'http://localhost:8080/addUser';
    var jsonData = JSON.stringify(obj);
    // console.log(obj.password);
    // var xhr = new XMLHttpRequest();
    // xhr.open('POST', 'http://172.19.4.175:8080/addUser',true);
    // xhr.setRequestHeader('Content-type', 'application/json','charset="utf-8');
    // xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
    // console.log(jsonData);
    // xhr.send(jsonData);
    // console.log(xhr.responseText);
    // fetch('http://172.19.4.175:8080/addUser',jsonData).then(function(res){
    //     if (res.status !== 200) {
    //         console.log('err status code:' + res.status);
    //         return;
    //     }

    //     res.json().then(function(data){
    //         console.log(data);
    //     });
    //     }
    // )
    // .catch(function(err){
    //     console.log('Fetch Error : -S', err);
    // });
    fetch(url, {
        method: 'post',
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: jsonData
      })
      .then(jsonData)
      .then(function (jsonData) {
        console.log('Request succeeded with JSON response', jsonData);  
        document.getElementById("signup").style.display = "none";
      })
      .catch(function (error) {
        console.log('Request failed', error);
      });
    
}
// document.body.getElementById("button").addEventListener('click',submit());
var oa = document.getElementById("button");
oa.addEventListener('click', submit);

function login() {
  console.log("asfd");
  
  var obj = new Object();
  obj.username = document.getElementById("logusername").value;
  obj.password = document.getElementById("logpw").value;
  var url = 'http://localhost:8080/login';
  var jsonData = JSON.stringify(obj);
  fetch(url, {
    method: 'post',
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: jsonData
  })
  .then((jsonData) => jsonData.text())
  .then(function (jsonData) {
    console.log('Request succeeded with JSON response', jsonData);
    if(jsonData==="true"){
      console.log("로그인");
      localStorage.id=username;
      window.location.href = "http://localhost:3000/game";
    }else{
      console.log("실패");
      
    }
  })
  .catch(function (error) {
    console.log('Request failed', error);
  });
  
}
var loginbt = document.getElementById("signin");
loginbt.addEventListener('click',login);


// var idv = document.getElementById("view");
// idv.addEventListener('click', function () {
//     var uid = document.getElementById("user_id").value;
//     fetch('http://172.19.4.175:8080/read/'+uid).then(function(res){
//         if (res.status !== 200) {
//             console.log('err status code:' + res.status);
//             return;
//         }

//         res.json().then(function(data){
//             console.log(data);
//         });
//         }
//     )
//     .catch(function(err){
//         console.log('Fetch Error : -S', err);
//     });
    
//     // var req;
//     // var xhr = new XMLHttpRequest();
//     // xhr.open('GET','http://172.19.4.175:8080/read/'+uid)
//     // xhr.send();
//     // console.log(xhr.response);
// });