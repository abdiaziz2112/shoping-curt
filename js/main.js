const cart__counter = document.querySelector(".cart__counter");
const cart__items = document.querySelector(".cart__items");

cart__counter.addEventListener('click', ()=>{
    cart__items.classList.toggle("active");
})