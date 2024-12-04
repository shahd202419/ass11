var btn = document.querySelector("button.one");
var userName = document.querySelector(".name")
var userEmail = document.querySelector(".email");
var userPassword = document.querySelector(".password");
var loginEmail = document.querySelector("loginEmail")
var loginPassword = document.querySelector("loginpassword")
var btn2 = document.querySelector("button.two");

var humans = [];
if (localStorage.getItem("all") != null) {
    humans = JSON.parse(localStorage.getItem("all"));
}

function signUp() {

    for (var i = 0; i < humans.length; i++) {
        if (humans[i].Email == userEmail.value) {
            document.querySelector(".three").classList.replace("d-none", "d-block")
            document.querySelector(".two").classList.replace("d-block", "d-none")
            document.querySelector(".one").classList.replace("d-block", "d-none")
            return ;
        }
    
    }
    if (validationPassword() == true && validationName() == true && validationEmail() == true) {

        document.querySelector(".one").classList.replace("d-block", "d-none")
        document.querySelector(".two").classList.replace("d-none", "d-block")
        document.querySelector(".three").classList.replace("d-block", "d-none")
        var bani = {
            uName: userName.value,
            Email: userEmail.value,
            password: userPassword.value,
        }
        humans.push(bani);

        localStorage.setItem("all", JSON.stringify(humans));


    }



    else {
        document.querySelector(".one").classList.replace("d-none", "d-block")
        document.querySelector(".two").classList.replace("d-block", "d-none")
        document.querySelector(".three").classList.replace("d-block", "d-none")
    }


}
btn.addEventListener("click", signUp);


function validationName() {
    var regex = /^[A-Z]{1}[a-z]{2,10}$/;
    if (regex.test(userName.value) == true)
        return true;

    return false;
}
function validationEmail() {
    var regex = /^[a-z]{2,10}[0-9]{0,10}@gmail.com$/
    if (regex.test(userEmail.value) == true)
        return true;
    return false;

}
function validationPassword() {
    var regex = /^[0-9]{6,12}$/
    if (regex.test(userPassword.value) == true)
        return true;
    return false;

}

