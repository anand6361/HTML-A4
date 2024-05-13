let btn = document.querySelector(".btn");
let para = document.querySelector(".para");
let visible = false;

btn.addEventListener("click",()=>{
    visible = !visible;
    para.style.display = visible ? "block" : "none";
    
})
