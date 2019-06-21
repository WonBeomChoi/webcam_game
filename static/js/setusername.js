
function get_userby_username() {
    var uname = localStorage.getItem('id');
    fetch('http://localhost:8080/getuserby/'+uname).then(function(res){
      if (res.status !== 200) {
          console.log('err status code:' + res.status);
          return;
      }

      res.json().then(function(data){
          console.log(data.name);
      });
      }
  )
  
  var user_obj = data.name;
  document.getElementById("username").innerHTML="닉네임 : "+data.name;
  
}