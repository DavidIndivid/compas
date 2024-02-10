function home(){
    document.location = "./home.html"
} 
function image(){
    document.location='./image.html'
}
function community(){
    document.location='./community.html'
}


function friendsSearch(){
    // Оюъявлять переменные
    let input,filter,ul,li,a,i,txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUl")
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter)>-1){
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
        
    }
};

let btn = document.querySelector(".menu")
let d_none = document.querySelector(".btns_none")

btn.addEventListener('click',function(){
    d_none.classList.toggle("btns_none")
    d_none.classList.toggle("btns_block")
});