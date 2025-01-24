// // let boxAnimationElement = document.querySelector("#box_animate");
// let boxAnimationElement = document.getElementById("box_animate");
// function startStop() {
//     boxAnimationElement.classList.toggle("animation-pop");
// }

let animationElement = document.getElementById("moon");
function start(){
    animationElement.classList.add("animationMoveRotate");
}
function stop(){
    animationElement.classList.remove("animationMoveRotate");
}