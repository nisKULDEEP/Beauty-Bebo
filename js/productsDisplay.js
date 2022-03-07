"use strict";
import { fetchData, display } from "../components/fetchData.js";
import product from "../components/product.js";
import footer from "../components/footer.js";
import header from "../components/header.js";

var header_anmol_ks = document.querySelector(".header_anmol_ks");
header_anmol_ks.innerHTML = header();

var footer_anmol_ks = document.querySelector(".footer_anmol_ks");
footer_anmol_ks.innerHTML = footer();

var product_container_ks = document.querySelector(".product_container_ks");
var url = "../db.json";
var data = await fetchData(url);
// console.log(data.products);
var finalData = data.products;

for (var i = 1; i < 4; i++) {
  finalData.forEach((products) => {
    if (products.category == "Personal Care") {
      const productCard = product(
        products.img,
        products.title,
        products.oldprice,
        products.newprice,
        products.discount
      );

      product_container_ks.insertAdjacentHTML("afterbegin", productCard);
    }
  });
}

for (let j = 0; j < finalData.length; j++) {
  if (finalData[j].category == "Personal Care") {
    const productCard = product(
      finalData[j].img,
      finalData[j].title,
      finalData[j].oldprice,
      finalData[j].newprice,
      finalData[j].discount
    );

    product_container_ks.insertAdjacentHTML("afterbegin", productCard);
    if (j == 2) {
      break;
    }
  }
}
const rotational = document.querySelector(".icon-create");

rotational.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
  rotational.classList.toggle("open-navbar");
}

const mybuttonTop = document.querySelector(".to-top");
window.onscroll = function () {
  scrollTopFunction();
};
window.onresize = function () {
  if (window.innerWidth > 940) {
    rotational.classList.remove("open-navbar");
  }
};
function scrollTopFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybuttonTop.style.display = "inline-block";
  } else {
    mybuttonTop.style.display = "none";
  }
}
const navTop = document.querySelector(".nav-top");
console.log(navTop);
mybuttonTop.addEventListener("click", moveTop);
function moveTop() {
  navTop.scrollIntoView({
    behavior: "smooth",
  });
}
let makeup_ks_anmol = document.querySelectorAll(".makeup_ks_anmol");
// let popup_header_ks = document.querySelectorAll(".popup_header_ks");

for (var i = 0; i < makeup_ks_anmol.length; i++) {
  makeup_ks_anmol[i].addEventListener("mouseover", function () {
    this.classList.toggle("active");
  });

  makeup_ks_anmol[i].addEventListener("mouseout", function () {
    this.classList.remove("active");
  });
}
