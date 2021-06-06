window.addEventListener("load",function(){
    setTimeout(() =>{
        document.querySelector(".preloader").style.display="none";
    },3000)
})

const toggle = document.getElementById('toogle');

toggle.onclick = function(){
    toggle.classList.toggle('active');
}

const popup = document.querySelector('.popup');
const popClose = document.querySelector('.close');

window.onload = function(){
    setTimeout(function(){
        popup.style.display = "block"
    }, 10000)
}

popClose.addEventListener('click', () => {
    popup.style.display = "none";
})