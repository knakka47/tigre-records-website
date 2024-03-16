var header = document.getElementsByClassName("header");

window.onscroll = function() {
    if(window.scrollY >= window.innerHeight - 66) {
        header[0].classList.add("active-header")
    } else {
        header[0].classList.remove("active-header")
    }
}

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scroillIntoView({
//             behavior: 'smooth'
//         });
//     });
// });