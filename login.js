let usern=document.querySelector(".box1");
let pass=document.querySelector(".box2");
let btn=document.querySelector(".btn");

let susername="alimustafa";
let spassword="alimustafa3106";
let username=usern.value;
let password=pass.value;
function login (){
    let username=usern.value;
    let password=pass.value;
    if(username=="" && password=="")
    {
        alert("this is not valid:");
    }
    else
    {
        if(username==susername && password==spassword)
        {
            console.log("you logedin");
            window.location.href="index.html";
        }
        else
        {
            alert("enter the right password :");
        }
    }
}
btn.addEventListener("click", login);


