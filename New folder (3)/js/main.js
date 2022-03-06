import { fetchData, display } from "./components/fetchData.js";
import product from "./components/product.js";

import footer from "./components/footer.js";
// import header from "./components/header.js";

//     var header_anmol_ks =  document.querySelector(".header_anmol_ks");
//     header_anmol_ks.innerHTML = header();

var footer_anmol_ks = document.querySelector(".footer_anmol_ks");
footer_anmol_ks.innerHTML = footer();

var product_container_ks = document.querySelector(".product_container_ks");
var url = "../db.json";
var data = await fetchData(url);

var finalData = data.products;

let module5_product_container = document.querySelector(
  ".homepage_first_half_module5_products_container"
);

// let temp_span_ks = document.querySelector(".temp_span_ks");

let makeup_category_result_home = document.querySelector(
  ".makeup_category_result_home"
);
makeup_category_result_home.addEventListener("click", () => {
  module5_product_container.innerHTML = "";
  console.log("skdjfkl");
  var i = 0;
  for (let j = 0; j < finalData.length; j++) {
    // console.log(finalData[j])
    if (finalData[j].category == "face") {
      // var productCard_ks = document.createElement("div");
      console.log(finalData[j]);
      let productCard1 = product(
        finalData[j].img,
        finalData[j].title,
        finalData[j].oldprice,
        finalData[j].newprice,
        finalData[j].discount
      );
      // productCard_ks.setAttribute("id","productCard_ks")
      module5_product_container.insertAdjacentHTML(
        "afterbegin",
        productCard1
      );
      i++;
    }

    if (i == 4) {
      i = 0;
      break;
    }
  }
});

let skin_category_result_home = document.querySelector(
  ".skin_category_result_home"
);
skin_category_result_home.addEventListener("click", () => {
  module5_product_container.innerHTML = "";
  console.log("skdjfkl");
  var i = 0;
  for (let j = 0; j < finalData.length; j++) {
    // console.log(finalData[j])
    if (finalData[j].category == "skin") {
      // var productCard_ks = document.createElement("div");
      console.log(finalData[j]);
      let productCard1 = product(
        finalData[j].img,
        finalData[j].title,
        finalData[j].oldprice,
        finalData[j].newprice,
        finalData[j].discount
      );
      // productCard_ks.setAttribute("id","productCard_ks")
      module5_product_container.insertAdjacentHTML(
        "afterbegin",
        productCard1
      );
      i++;
    }

    if (i == 4) {
      i = 0;
      break;
    }
  }
});

var i = 0;
for (let j = 0; j < finalData.length; j++) {
  // console.log(finalData[j])
  if (finalData[j].category == "Personal Care") {
    // var productCard_ks = document.createElement("div");
    // console.log(finalData[j])
    let productCard1 = product(
      finalData[j].img,
      finalData[j].title,
      finalData[j].oldprice,
      finalData[j].newprice,
      finalData[j].discount
    );
    // productCard_ks.setAttribute("id","productCard_ks")
    module5_product_container.insertAdjacentHTML("afterbegin", productCard1);
    i++;
  }

  if (i == 4) {
    i = 0;
    break;
  }
}

let module3_product_container = document.querySelector(
  ".homepage_first_half_module3_products_container"
);

for (let j = 10; j < 17; j++) {
  // console.log(finalData[j])
  var productCard_ks2 = document.createElement("div");
  productCard_ks2.innerHTML = product(
    finalData[j].img,
    finalData[j].title,
    finalData[j].oldprice,
    finalData[j].newprice,
    finalData[j].discount
  );

  module3_product_container.appendChild(productCard_ks2);
}

let category_component_list = document.querySelectorAll(
  ".home_page_category_component"
);
let popup_menu_ks = document.querySelectorAll(".popup_menu_ks");

for (var i = 0; i < category_component_list.length; i++) {
  category_component_list[i].addEventListener("mouseover", function () {
    this.classList.toggle("active");
  });

  category_component_list[i].addEventListener("mouseout", function () {
    this.classList.remove("active");
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
  if (
    document.body.scrollTop > 50 ||
    document.documentElement.scrollTop > 50
  ) {
    mybuttonTop.style.display = "inline-block";
  } else {
    mybuttonTop.style.display = "none";
  }
}
const navTop = document.querySelector(".nav-top");
mybuttonTop.addEventListener("click", moveTop);
function moveTop() {
  navTop.scrollIntoView({
    behavior: "smooth",
  });
}
