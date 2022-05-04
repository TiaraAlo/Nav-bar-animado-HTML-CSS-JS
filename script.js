const navBar = document.querySelector(".navbar");
allLi = document.querySelectorAll("li");

allLi.forEach((li, index) => {
    li.addEventListener("click" , e =>{
        e.preventDefault(); //preveting from submitting
        navBar.querySelector(".active").classList.remove("active");
        li.classList.add("active");

        const indicator = document.querySelector(".indicator");
        indicator.style.transform = `translateX(calc(${index * 90}px))`;

    });
});