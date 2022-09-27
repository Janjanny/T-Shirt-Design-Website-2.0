import "./import-jquery.js";


export default function navBar() {


    $(".hamburger").click(function() {
        $(this).toggleClass("uil-times");
        $('.nav-links').toggleClass("active")
    })
}