const btn = document.getElementById("ham")
const navLinks = document.getElementById("links")


const clickHandler = () => {
    if (navLinks.classList.contains("active")) {
        btn.innerHTML = '<i class="fas fa-times"></i>'
        document.body.style.position = 'fixed';
    }
    else {
        btn.innerHTML = '<i class="fas fa-bars"></i>'
        document.body.style.position = '';
    }
}

btn.addEventListener("click", (e) => {
    e.preventDefault()
    navLinks.classList.toggle("active")

    clickHandler()
})

navLinks.children.item(0).addEventListener("click", () => {
    btn.innerHTML = '<i class="fas fa-bars"></i>'
    document.body.style.position = '';
    navLinks.classList.toggle("active")

});