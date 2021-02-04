function showBar() {
    let hamburger = document.getElementById('hamburger');
    let close = document.getElementById('close');
    let menu = document.getElementById('nav');
    let header = document.getElementById('header__section');

    if (hamburger.style.display === "block") {
        hamburger.style.display = "none";
        close.style.display = "block";
        menu.style.display = "grid";
        header.style.backgroundColor = 'rgb(61, 101, 83, 1)';
    } else {
        hamburger.style.display = "block";
        close.style.display = "none";
        menu.style.display = "none";
        header.style.backgroundColor = '#6fbf9a';
    }
}


// Code for switching arrows
//
// let ul = document.getElementById("nav");
// let liArray = [...ul.getElementsByTagName("li")];
//
// liArray.forEach((x) => {
//     const icon = x.getElementsByTagName('i')[0];
//     if (icon){
//         x.addEventListener('click', function(e) {
//             if (icon.classList.contains('fa-chevron-up')) {
//                 icon.classList.remove("fa-chevron-up");
//                 icon.classList.add("fa-chevron-down")
//             } else if (icon.classList.contains('fa-chevron-down')) {
//                 icon.classList.remove("fa-chevron-down");
//                 icon.classList.add("fa-chevron-up")
//             }
//             // e.stopPropagation();
//         })
//     }
// })