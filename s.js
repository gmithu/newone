let nav = document.querySelector(".nav");
let divbx = document.querySelector(".divboxadd");
let inpcnsl = document.getElementById("inpcnsl");
let inadd = document.querySelector(".inadd");
let inurl = document.querySelector(".inurl");
let backdiv = document.getElementById("backdiv");
let Gbtn = document.querySelector(".Gbtn");
let maininpt = document.getElementById("maininpt");
let contchild = document.querySelector(".contchild");
nav.onclick = function () {
    nav.classList.toggle("active");

}





function gb() {
    divbx.style.display = "block"
    backdiv.style.display = "block";

}

inpcnsl.addEventListener("click", function () {

    backdiv.style.display = "none";
    divbx.style.display = "none";

})

maininpt.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        event.preventDefault();
        d();
    }



})

function d() {
    if (maininpt.value === "ameer") {
        image = "https://images.news18.com/ibnlive/uploads/2018/03/Aamir-Khan2.jpg"
        image1 = "https://filmfare.wwmindia.com/content/2024/mar/aamirkhan41710418969.jpg"
    }
    else if (maininpt.value === "surya") {
        image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTupiV7Rv9nCcocumwUQ7cqlZ5se68vw84iA&s"
        image1 = "https://i.pinimg.com/736x/2f/54/c7/2f54c76bf6da0535efc8c37ae7abebe7.jpg"
    }
    else if (maininpt.value === "sharukkhan") {
        image = "https://m.media-amazon.com/images/M/MV5BZDk1ZmU0NGYtMzQ2Yi00N2NjLTkyNWEtZWE2NTU4NTJiZGUzXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_FMjpg_UX1000_.jpg"
        image1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0P-bI5tgkhGgEMh4_95xr6PToUIraStBTFw&s"
    }
    else {
        image="no image";
        image1="no image"
    }

    im1.src = image;
    im2.src = image1;
    contchild.style.display = "none";
}