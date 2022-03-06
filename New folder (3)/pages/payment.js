let i = 1;
function cashondelivery(){
    
    let mode = document.getElementById("cod_div");
    console.log(mode);

    let button = document.createElement("div");
    // button.onclick=showdetails();
    button.innerHTML=`<div id="button_showdetail_at"><button onclick="showdetails()" id="button_showdetails_at">Place Order</button></div>`;
    if(i==1){
    mode.append(button);
    }
    i++;
}

function showdetails(){
    let change = document.getElementById("checkoutcontainer_at");
    change.innerHTML="";
    change.innerHTML=`<h6 id="h6_aftercod_at";>Hello  You're Order Has Been Placed Succefully!!! Thanks For Shopping With Us<h6>`;
}

function checkout(){
    
}