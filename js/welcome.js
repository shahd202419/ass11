var humans = [];
if (localStorage.getItem("all") != null) {
    humans = JSON.parse(localStorage.getItem("all"));
}
   document.querySelector(".align-items-center").innerHTML = `<h1 class="text-info p-5 w-50 text-center">Welcome shahd </h1>`