const openMenu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close-menu")

openMenu.addEventListener('click', () =>{
    document.body.classList.toggle("showMenu");
})

closeMenu.addEventListener("click", () =>openMenu.click());


function playVideo() {
    let video = document.getElementById("vid");
    let button = document.querySelector(".play-button");
    video.play();
    button.style.display = "none";

    video.opened = function(){
        button.style.display = "flex";
    }
}
