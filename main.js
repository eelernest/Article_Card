let on = document.getElementById("on");
let off = document.getElementById("off");
let wish = document.getElementById("wish");
let addCart = document.getElementById("addCart");
let btnText = document.getElementById("btnText");

let wishCount = 0;
wish.addEventListener("click", () => {
  if (wishCount == 0) {
    off.classList.add("inactive");
    off.classList.remove("active");
    on.classList.add("active");
    on.classList.remove("inactive");
    on.classList.add("wishAnime");
    wish.classList.add("activeWish");
    wish.classList.remove("inactiveWish");
    wishCount = 1;
  } else {
    off.classList.add("active");
    off.classList.remove("inactive");
    on.classList.add("inactive");
    on.classList.remove("active");
    wish.classList.add("inactiveWish");
    wish.classList.remove("activeWish");
    wishCount = 0;
  }
});
let cart = 0;
addCart.addEventListener("click", ()=>{
  if(cart == 0){
    addCart.innerHTML=`<img src="./images/added.png" alt="">`;
    addCart.classList.add("btn-active")
    addCart.classList.remove("btn-inactive")
    cart=1;
  }else{
    addCart.classList.remove("btn-active")
    addCart.classList.add("btn-inactive")
    addCart.innerHTML="Add cart";
    cart=0;
  }
})