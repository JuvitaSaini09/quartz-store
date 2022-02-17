let bar=document.querySelector("#bars")
let nav=document.querySelector(".nav-links")

bar.addEventListener('click',()=>{
    if(nav.style.display=="none") 
    nav.style.display="block";
    else nav.style.display="none";
})