let reg_users = localStorage.getItem("reg_users");
if (reg_users == null) {
    localStorage.setItem("reg_users", JSON.stringify([]));
}

function checkdb(){
    let email = document.getElementById("loginemail_at").value;
    let password = document.getElementById("loginpassword_at").value;
    
    //Get  data from local storage

    reg_users = JSON.parse(localStorage.getItem("reg_users"));
    if(reg_users.length==0){
        alert("User Not Registered");
        location.href("./register.html");
    }
    else{

        let v = false;
        reg_users.forEach(function(user){
            if(user.email==email && user.password == password){
                alert("Login Successfull!!!");
                v=true;
                location.reload();
                return;
            }
            else if(user.email == email && user.password != password){
                alert("Wrong Password Please Try Again");
                v=true;
                location.reload();
                return;
            }
        });
       


        if(v==false){
                alert("User Not Registered");
                location.reload();
        }
    }
}

function gotoregister(){
    window.location.href = "./register.html";
}