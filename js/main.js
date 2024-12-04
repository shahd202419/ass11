
var loginEmail = document.querySelector(".loginEmail")
var loginPassword = document.querySelector(".loginpassword")
var btn2 = document.querySelector("button.two");
var userName = document.querySelector(".name")
var userEmail = document.querySelector(".email");
var userPassword = document.querySelector(".password");
var humans = [];
if (localStorage.getItem("all") != null) {
    humans = JSON.parse(localStorage.getItem("all"));
}
function isEmpt() {
    if (loginEmail.value == "" || loginPassword.value == "") {

        return true;

    }
    return false;

}




btn2.addEventListener("click", login);
function login() {
    if(isEmpt()==true){
        document.querySelector(".one1").classList.replace("d-none","d-block");
        document.querySelector(".two2").classList.replace("d-block","d-none");
       return ;
    }
    for (var i = 0; i < humans.length; i++) {
        if (humans[i].Email==loginEmail.value)
        {
           location.href="welcome.html"

        }else
        document.querySelector(".two2").classList.replace("d-none","d-block");
        document.querySelector(".one1").classList.replace("d-block","d-none");
        
    }

}
   

