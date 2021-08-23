const btn = document.getElementById("ham")
const navLinks = document.getElementById("links")


btn.addEventListener("click", (e) => {
    e.preventDefault()
    navLinks.classList.toggle("active")

    if (navLinks.classList.contains("active")) {
        btn.innerHTML = '<i class="fas fa-times"></i>'
    }
    else {
        btn.innerHTML = '<i class="fas fa-bars"></i>'
    }
})