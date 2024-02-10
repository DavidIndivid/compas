
function knopka() {
    let pass1 = document.getElementById("pass").value;
    let name = document.getElementById("name").value;
    let last = document.getElementById("last").value;
    // let num = document.getElementById("num").value;
    let city = document.getElementById("city").value;
    let mySelf = document.getElementById("mySelf").value;
    
    if (pass1 == "Admin") {
        window.localStorage.setItem("name",name);             
        window.localStorage.setItem("last",last);            
        // window.localStorage.setItem("num",email);     //номер телефона      
        window.localStorage.setItem("city",city);             
        window.localStorage.setItem("mySelf",mySelf);             
        document.location='./home.html'

    } else {
        alert("Пароль не верный")
    }
}
