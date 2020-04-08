
var user,pswd;
function validateName() {
var input;
input=document.getElementById("input_0").value;
if(input=="admin") {
   document.getElementById("p1").innerHTML="Username is valid";
   user=true;
}
else{
   document.getElementById("p1").innerHTML="Please enter a valid username!";
   user=false;
}
}

function validatePw() {
var password;
password=document.getElementById("input_1").value;
if(password=="admin123") {
   document.getElementById("p2").innerHTML="Password is valid";
   pswd=true;
}
else {
   document.getElementById("p2").innerHTML="Please enter a Valid Password!";
   pswd=false;
}
}

function validate(){
if(user==true && pswd==true){
     alert("Login Successful");
     }
else{
     alert("Invalid Creditionals!");
     }
}
