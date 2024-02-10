function home() {
  document.location = "./home.html"
}
function friends() {
  document.location = "./friends.html"
}
function image(){
  document.location='./image.html'
}



let btn = document.querySelector(".menu")
let d_none = document.querySelector(".btns_none")

btn.addEventListener('click',function(){
    d_none.classList.toggle("btns_none")
    d_none.classList.toggle("btns_block")
})