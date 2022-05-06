"use strict";
console.log(screen.width);
const hamburgerMenu = document.querySelector(".header__hamburger");
const closeBtnMobile = document.querySelector(".mobile__close-btn");
const navigation = document.querySelector(".navigation");
const navFeatures = document.querySelector(".nav__features");
const navCompany = document.querySelector(".nav__company");

const menuArrowFeatures = document.querySelector(".nav__arrow-features");
const menuArrowCompany = document.querySelector(".nav__arrow-company");

const mobileFeaturesExpend = `<ul class="mobile__inner-list-features">
<li class="mobile__inner-item"><img src="./images/icon-todo.svg" alt="" />Todo List</li>
<li class="mobile__inner-item"><img src="./images/icon-calendar.svg" alt="" />Calendar</li>
<li class="mobile__inner-item"><img src="./images/icon-reminders.svg" alt="" />Reminders</li>
<li class="mobile__inner-item"><img src="./images/icon-planning.svg" alt="" />Planning</li>
</ul>`;

const mobileCompanyExpend = `<ul class="mobile__inner-list-company">
<li class="mobile__inner-item">History</li>
<li class="mobile__inner-item">Our Team</li>
<li class="mobile__inner-item">Blog</li>
</ul>`;
const backdrop = `<div onClick="backdropClose()" class="nav__backdrop"></div>`;
navFeatures.insertAdjacentHTML("beforeend", mobileFeaturesExpend);
navCompany.insertAdjacentHTML("beforeend", mobileCompanyExpend);

const menuInnerListFeatures = document.querySelector(
    ".mobile__inner-list-features"
);
const menuInnerListCompany = document.querySelector(
    ".mobile__inner-list-company"
);

hamburgerMenu.addEventListener("click", () => {
    navigation.style.display = "block";
    document.body.insertAdjacentHTML("afterbegin", backdrop);
});
closeBtnMobile.addEventListener("click", () => {
    navigation.style.display = "none";
    document.querySelector(".nav__backdrop").remove();
});

const backdropClose = () => {
    navigation.style.display = "none";
    document.querySelector(".nav__backdrop").remove();
};
window.addEventListener("resize", function(event) {
    if (this.screen.width >= 704) {
        navigation.style.display = "flex";
        this.document.querySelector(".main__img").src =
            "./images/image-hero-desktop.png";
    } else {
        navigation.style.display = "none";
        this.document.querySelector(".main__img").src =
            "./images/image-hero-mobile.png";
    }
});

let countFeatures = 0;
let countCompany = 0;
navFeatures.addEventListener("click", () => {
    if (+countFeatures === 0) {
        menuArrowFeatures.src = "./images/icon-arrow-up.svg";
        menuInnerListFeatures.style.display = "block";
        countFeatures = 1;
    } else {
        menuArrowFeatures.src = "./images/icon-arrow-down.svg";
        menuInnerListFeatures.style.display = "none";
        countFeatures = 0;
    }
});

navCompany.addEventListener("click", function() {
    if (+countCompany === 0) {
        menuArrowCompany.src = "./images/icon-arrow-up.svg";
        menuInnerListCompany.style.display = "block";
        countCompany = 1;
    } else {
        menuArrowCompany.src = "./images/icon-arrow-down.svg";
        menuInnerListCompany.style.display = "none";
        countCompany = 0;
    }
});