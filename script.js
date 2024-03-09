let box=document.querySelector(".box");
let Mbtn=document.querySelector("#modeBtn");

let toggle=0;
Mbtn.addEventListener("click",()=>{
    if(toggle===0){
        Mbtn.innerHTML="Light Mode";
        box.style.backgroundColor="black";
        box.style.border="2px solid red";
        Mbtn.style.backgroundColor="green";
    }
    else{
        Mbtn.innerHTML="Dark Mode";
        box.style.backgroundColor="white";
        box.style.border="2px solid black";
        Mbtn.style.backgroundColor="rgb(68, 68, 129)";
        Mbtn.style.boxShadow="3px 6px 10px  black" ;

    }
    toggle=1-toggle;
});