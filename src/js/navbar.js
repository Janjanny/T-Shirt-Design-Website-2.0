import "./import-jquery.js";


export default function navBar() {
    // let hamburger = document.querySelector(".hamburger");

    // hamburger.addEventListener('click', () => {
    //     console.log(1);
    // });


    $(".hamburger").click(function() {
        $(this).toggleClass("uil-times");
        $('.nav-links').toggleClass("active")
    })
}