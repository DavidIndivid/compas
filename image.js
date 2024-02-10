function home() {
  document.location = "./home.html"
}
function friends() {
  document.location = "./friends.html"
}
function community(){
  document.location='./community.html'
}


const filterBox = document.querySelectorAll('.post');

document.querySelector('nav').addEventListener('click', event => {
  if (event.target.tagName !== 'BUTTON') return false;

  let filterClass = event.target.dataset['f'];

  filterBox.forEach( elem => {
    elem.classList.remove('hide');
    if (!elem.classList.contains(filterClass) && filterClass!== 'all'){
      elem.classList.add('hide');
    } 
  });

});

let btn = document.querySelector(".menu")
let d_none = document.querySelector(".btns_none")

btn.addEventListener('click',function(){
    d_none.classList.toggle("btns_none")
    d_none.classList.toggle("btns_block")
});