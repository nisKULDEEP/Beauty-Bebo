let cart = JSON.parse(localStorage.getItem("cart"));
if(cart==null){
    localStorage.setItem("cart",JSON.stringify([]));
}

let i = 1;
function cashondelivery(){
    
    let mode = document.getElementById("cod_div");
    console.log(mode);

    let button = document.createElement("div");
    // button.onclick=showdetails();
    button.innerHTML=`<div id="button_showdetail_at"><button onclick="showdetails()" id="button_showdetails_at">Place Order</button></div>`;
    if(i==1){
    mode.append(button);
    i++;
    }
    else{
        button.innerHTML="";
        i=0;
    }
    
}

function showdetails(){
    let change = document.getElementById("checkoutcontainer_at");
    change.innerHTML="";
    change.innerHTML=`<h6 id="h6_aftercod_at";>Hello  You're Order Has Been Placed Succefully!!! Thanks For Shopping With Us<h6>`;
}



let subtotal = document.getElementById("paymentsubtotal_at");
// subtotal.innerHTML="";
let gst = document.getElementById("paymentgst_at");
// gst.innerHTML="";
let incl = document.getElementById("paymentincl_at");
// incl.innerHTML="";
// let excl = document.getElementById("paymentexcl_at");
// excl.innerHTML="";

console.log(subtotal,gst,incl);


console.log(cart);
var k=0;
cart.forEach(function(user){
    console.log(user.price );
    console.log(user.quantity );
    k += (user.price)*(user.quantity);
    console.log(user.price, user.quantity);
});

console.log(k);

subtotal.innerHTML=`&#8377;${(k).toFixed(2)}`;
gst.innerHTML=`&#8377;${((k*0.18).toFixed(2))}`;
incl.innerHTML= `&#8377;${(k*1.18).toFixed(2)}`;
// excl.innerHTML= `&#8377;${k}`;

// const radiobtns=document.getElementsByName("radio");
// console.log(radiobtns);

// function radiooo(){
//     let mode = document.getElementById("cod_div");
//     console.log(mode);

//     for(var i=0;i<radiobtns.length;i++){
//         if(radiobtns[i].checked){
//             console.log("123");
//         }

//     }

//     // let button = document.createElement("div");
//     // // button.onclick=showdetails();
//     // button.innerHTML=`<div id="button_showdetail_at"><button onclick="showdetails()" id="button_showdetails_at">Place Order</button></div>`;
//     // if(i==1){
//     // mode.append(button);
//     // i++;
//     // }
//     // else{
//     //     button.innerHTML="";
//     //     i=0;
//     // }

    
// }

let mode = document.getElementById("cod_div");
let mode2 = document.getElementById("cod_dev");
    // console.log(mode);
const radiobtns = document.getElementsByName("radio");
console.log(radiobtns);
// radiobtns.forEach((el) => {
//   el.addEventListener('click',()=>{
//       if(el.checked){
//           mode.innerHTML ='<div id="button_showdetail_at"><button onclick="showdetails()" id="button_showdetails_at">Place Order</button></div>'; /*button code */
//       }else{
//           mode.innerHTML = "";
//       }
      
//   });
// });

let cod  = document.getElementById("cod_at");
let deb  = document.getElementById("deb_at");

radiobtns[0].addEventListener("click",()=>
{
    if(radiobtns[0].checked){
        mode.innerHTML ='<div id="button_showdetail_at"><button onclick="showdetails()" id="button_showdetails_at">Place Order</button></div>';
        mode2.innerHTML="";
        deb.checked=false;
    }
    else{
        mode.innerHTML="";
        // mode.checked=false;
    }
});

radiobtns[1].addEventListener("click",()=>
{
    if(radiobtns[1].checked){
        mode2.innerHTML ='<div id="button_showdetail_at"><button onclick="showdetails()" id="button_showdetails_at">Place Order</button></div>';
        mode.innerHTML="";
        cod.checked=false;
    }
    else{
        mode2.innerHTML="";

    }
});

console.log(mode2.checked);
