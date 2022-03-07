

    
    let cart = JSON.parse(localStorage.getItem("cart"));
    if(cart.length==0){
        // showprods.innerHTML="<h1>No Items Added In cart</h1>"
    }
    else{
        cart.forEach(function(product){

            let showcartproducts = document.getElementById("showcartproducts_at");

            let showprods = document.createElement("div");
            showprods.setAttribute("class","showcartproductshead_at");


            let carttp_at = document.createElement("div");
            carttp_at.setAttribute("class","carttp_at");

    

            cart = JSON.parse(localStorage.getItem("cart"));


            //item--sectiom
            let itemdiv = document.createElement("div");
            itemdiv.setAttribute("class","itemdiv_at");
            itemdiv.setAttribute("id","itemdivjs_at");

             let cartprodimg = document.createElement("img");
             cartprodimg.src=`${product.img}`;

             let cartprodname = document.createElement("div");
             cartprodname.innerHTML=`${product.name}`;

            
            //price and quantity section

            let pricediv = document.createElement("div");
            pricediv.setAttribute("class","pricequantitydiv_at");

            let price = document.createElement("span");
            price.innerHTML=`&#8377;${product.price}`;

            let quantity = document.createElement("span");
            quantity.innerHTML=`${product.quantity}`;

            let subtot = parseInt(product.price) * parseInt(product.quantity);

            let subtotal = document.createElement("span");
            subtotal.innerHTML=`&#8377;${subtot}`;

            let buttons = document.createElement("div");
            // buttons.setAttribute("id","c_buttons_at");

            let edit = document.createElement("div");
            edit.innerHTML=`<Button>Edit</Button>`;
            edit.setAttribute("class","cartbutton_at");

            let deletei = document.createElement("div");
            deletei.innerHTML=`<Button onclick="funcdeleteitem('${product.name}')">Delete</Button>`;
            deletei.setAttribute("class","cartbutton_at");

            buttons.append(edit,deletei);

             pricediv.append(price,quantity,subtotal);
             itemdiv.append(cartprodimg,cartprodname);
            //  carttp_at.append(pricediv);
            //  showcartproducts.append(itemdiv,carttp_at);

            showprods.append(itemdiv,pricediv);
            carttp_at.append(showprods);

             showcartproducts.append(carttp_at,buttons);
        });
    }





function funcdeleteitem(delet){
    cart = JSON.parse(localStorage.getItem("cart"));
    console.log(delet);

    const indedxD = cart.findIndex(user => user.name === delet)

    if(cart[indedxD].quantity>1){
        
        console.log(cart[indedxD].quantity);
        let v = cart[indedxD].quantity-1;
        cart[indedxD].quantity = v;
        
        console.log(cart[indedxD].quantity);
        cart = localStorage.setItem("cart",JSON.stringify(cart));
        location.reload();
    }
    else{
    cart.splice(indedxD,1);
    // console.log(cart);
    cart = localStorage.setItem("cart",JSON.stringify(cart));
    location.reload();
    }
}



// let tot = document.getElementById("total");
// tot.innerHTML=`&#8377;${total}`;
cart = JSON.parse(localStorage.getItem("cart"));
var k=0;

cart.forEach(function(user){
    console.log(user.price );
    console.log(user.quantity );
    k += (user.price)*(user.quantity);
    
});

console.log(k);
let subt = document.getElementById("spedivspan_at");
subt.innerHTML="";
subt.innerHTML=`&#8377;${k}`;

let gst = document.getElementById("gst_at");
gst.innerHTML="";
gst.innerHTML=`&#8377;${k*1.18}`;
cart = localStorage.setItem("cart",JSON.stringify(cart));


//if(user.name==delet){
//     total -= user.price;
//     cart.splice(user,1);
//     tot.innerHTML=`${total}`;
//     location.reload();
// }