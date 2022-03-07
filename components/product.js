function product(url,name,oldPrice,price,discount){
  return  `<div class="module3_product_box_ks">
   <img src="${url}" alt="${name}" />
   <h5 class="product_name">${name}</h5>
   <div class="product_rating_ks">
     <span class="fa fa-star checked_ks"></span>
     <span class="fa fa-star checked_ks"></span>
     <span class="fa fa-star checked_ks"></span>
     <span class="fa fa-star"></span>
     <span class="fa fa-star"></span>
   </div>
   <div class="module3_product_price_container_ks">
     <div class="product_old_price"><strike>₹${oldPrice}</strike></div>
     <div class="product_price">₹${price}</div>
     <div class="product_price_off">${discount}% off</div>
   </div>
   <div class="module3_button_container_ks">
     <div class="module3_add_to_cart_button_ks">
       <button id="buttontobuy" onclick = "addtocart('${url}','${name}','${oldPrice}','${price}','${discount}')" >
         <img src="./img/module-3-products/basket.png" alt="" />
         Add To Cart
       </button>
     </div>
     <div class="module3_like_button_ks">
       <button>&#9829;</button>
     </div>
   </div>
 </div>`
}


export default product;