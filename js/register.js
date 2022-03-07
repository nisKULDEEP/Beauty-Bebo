let reg_users = localStorage.getItem("reg_users");
if (reg_users == null) {
    localStorage.setItem("reg_users", JSON.stringify([]));
}

function sendData() {
    let firstname = document.getElementById("firstname_at").value;
    let lastname = document.getElementById("lastname_at").value;
    let email = document.getElementById("email_at").value;
    let phone = document.getElementById("phone_at").value;
    let password = document.getElementById("password_at").value;
    let confirmpassword = document.getElementById("confirmpassword_at").value;
    
    let temp={
        "firstname" :firstname,
        "lastname" :lastname,
        "email": email,
        "phone":phone,
        "password":password
    };
    console.log(temp);
    if (confirmpassword != password) {
        alert("Password Not Matching");
        location.reload();
    }
    else {
        reg_users = JSON.parse(localStorage.getItem("reg_users"));
        if(reg_users.length==0){
            reg_users.push(temp);
            // console.log(reg_users);
            localStorage.setItem("reg_users", JSON.stringify(reg_users));
            // window.location.href = "./login.html";
        }

        let v = true;
        reg_users.forEach(function (user) {
            // console.log(user.firstname);
            if (user.email == email || user.phone == phone) {
                alert("User Already Registered");
                location.reload();
                v = false;
                return;
            }
        });


        if (v == true) {
            reg_users.push({ firstname, lastname, email, phone, password, confirmpassword });
            console.log(reg_users);
            localStorage.setItem("reg_users", JSON.stringify(reg_users));
            window.location.href = "./login.html";
        }
    }

    // localStorage.clear();
}

// export default sendData;

// 
