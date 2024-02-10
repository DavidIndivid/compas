

let name1 = window.localStorage.getItem("name")
let last1 = window.localStorage.getItem("last")
let city1 = window.localStorage.getItem("city")
let mySelf1 = window.localStorage.getItem("mySelf")


document.getElementById("name").innerHTML = name1
document.getElementById("last").innerHTML = last1
document.getElementById("city").innerHTML = city1
document.getElementById("mySelf").innerHTML = mySelf1


function exit(){
    document.location='./index.html'
}
function friends(){
    document.location='./friends.html'
}
function image(){
    document.location='./image.html'
}
function community(){
    document.location='./community.html'
}


let btn = document.querySelector(".menu")
let d_none = document.querySelector(".btns_none")

btn.addEventListener('click',function(){
    d_none.classList.toggle("btns_none")
    d_none.classList.toggle("btns_block")
})

let btn_avatar = document.querySelector(".btn_avatar")
let d_none__avatar = document.querySelector(".smena_avatara_none")

btn_avatar.addEventListener('click',function(){
    d_none__avatar.classList.toggle("smena_avatara_none")
    d_none__avatar.classList.toggle("smena_avatara")
})