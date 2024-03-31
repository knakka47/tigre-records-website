var header = document.getElementsByClassName("header");

window.onscroll = function() {
    if(window.scrollY > 0) {
        header[0].classList.add("active-header")
    } else {
        header[0].classList.remove("active-header")
    }
}