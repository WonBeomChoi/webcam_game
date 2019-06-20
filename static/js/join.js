function submit() {
    var obj = new Object();
    obj.userid = document.getElementById("userid").value;
    obj.name = document.getElementById("name").value;
    obj.password = document.getElementById("password").value;

    var jsonData = JSON.stringify(obj);
    console.log(obj.password);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://172.19.4.175:8080/addUser',true);
    xhr.setRequestHeader('Content-type', 'application/json','charset="utf-8');
    xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
    console.log(jsonData);
    xhr.send(jsonData);
    console.log(xhr.responseText);
    
}
// document.body.getElementById("button").addEventListener('click',submit());
var oa = document.getElementById("button");
oa.addEventListener('click', submit);



var idv = document.getElementById("view");
idv.addEventListener('click', function () {
    var req;
    var uid = document.getElementById("user_id").value;
    var xhr = new XMLHttpRequest();
    xhr.open('GET','http://172.19.4.175:8080/read/'+uid)
    xhr.send();
    console.log(xhr.response);
});