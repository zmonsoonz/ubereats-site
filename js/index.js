window.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".obj")
    const menuName = document.querySelector(".menu-header");
    tabs.forEach(item => {
        item.addEventListener('click', () => {
            tabs.forEach(item => item.classList.remove("active"))
            item.classList.add("active");
            menuName.textContent = item.textContent
        })
    })

    const mybutton = document.querySelector(".up-btn");

    window.addEventListener('scroll', () => {
        scrollFunction();
    })

    function scrollFunction() {
        if (document.documentElement.scrollTop + document.documentElement.clientHeight > 
            document.documentElement.scrollHeight - getComputedStyle(document.querySelector(".bottom")).height.slice(0, 3) + 180) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    mybutton.addEventListener('click', topFunction)
})