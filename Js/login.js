
var global_name, global_mail;

let changePassInterface = function()
{
    document.getElementById(event.target.id).style.visibility = "hidden"
    document.getElementById("loginH1font").textContent = "Reset your Password";
    document.getElementById("loginFont").textContent = "Enter your Details"

    let mail = document.getElementById("mail")
    mail.placeholder = "Enter your mail";

    let old_pass = document.getElementById("pass")
    old_pass.placeholder = "Enter your old password";

    let btn = document.getElementById("login_button");
    btn.textContent = "Reset Password";

    btn.setAttribute("id", "reset_pass");
    btn.setAttribute("onclick", "updatePass()")

}




let updatePass = () => {

    var mail = document.getElementById("mail")
    var old_pass = document.getElementById("pass")

    // console.log(mail, old_pass);

    if(mail.value == "" || old_pass.value == "")
    {
        alert("Enter the details")
    }

    else
    {
        

        let user_db = localStorage.getItem("lumen_5_users");

        if(user_db == null)
            return false;

        else
        {
            flag = 0;
            user_db = JSON.parse(user_db)
            let name;

            for(let i in user_db)
            {
                if(user_db[i].mail == mail.value && user_db[i].password == old_pass.value)
                {
                    flag = 1;
                    name = user_db[i].name;
                    global_name = user_db[i].name;
                    global_mail = user_db[i].mail;
                    break;
                }
            }

            if(flag == 1)
            {
                flag = 0;
                document.getElementById("loginFont").textContent = `Hello Mr./Ms. ${name}`;

                // let mail = document.getElementById("mail")
                mail.value = "";
                mail.placeholder = "Enter your new password";
                mail.setAttribute("id","new_pass")
                mail.setAttribute("type", "password")
                

                // let old_pass = document.getElementById("pass")
                old_pass.value = "";
                old_pass.placeholder = "Confirm password";
                old_pass.setAttribute("id","confirm_pass")
                old_pass.setAttribute("type", "password")
                

                let btn = document.getElementById("reset_pass");
                btn.textContent = "Update Password";
                btn.setAttribute("id", "update_pass")

                btn.setAttribute("onclick", "updateOnStorage()")

                
            }
            
            else
            {
                alert("Mail or password incorrect");
                mail.textContent = "";
                old_pass.textContent = "";
            }

        }

    }

}


let updateOnStorage = function()
{



    if(document.getElementById("confirm_pass").value == "" || document.getElementById("new_pass").value == "")
    {
        alert("Enter passwords")
    }

    else
    {
        if(document.getElementById("confirm_pass").value === document.getElementById("new_pass").value)
        {
            let user_db = localStorage.getItem("lumen_5_users");
            user_db = JSON.parse(user_db)
            let index;
            let user_data

            for(let i in user_db)
            {
                if(user_db[i].mail == global_mail)
                {
                    user_data = {
                        name: global_name,
                        mail: user_db[i].mail,
                        password: document.getElementById("confirm_pass").value
                    };
                    index = i;
                    break;
                }
            }

            user_db[index] = user_data;

            localStorage.setItem("lumen_5_users", JSON.stringify(user_db));
            reloadPage();
        }


        else
        {
            alert("Passwords must be same..");
            document.getElementById("new_pass").value = null;
            document.getElementById("confirm_pass").value = null;
        }
    }
}

function reloadPage()
{
    setTimeout(function(){
        location.reload();
    }, 3000)
}


let loginMe = () =>{


    if(document.getElementById("mail").value == "" || document.getElementById("pass").value == "")
    {
        alert("Enter details")
    }

    else
    {
        let email = document.getElementById("mail").value
        let password = document.getElementById("pass").value;
        let flag = 0;


        let user_db = localStorage.getItem("lumen_5_users");
        user_db = JSON.parse(user_db)

        for(var i in user_db)
        {
            if(user_db[i].mail == email && user_db[i].password == password)
            {
                flag = 1;
                break;
            }
        }

        if(flag == 1)
        {
            let url = `after_login_1.html?name=${user_db[i].name}`;
            // let params = new URLSearchParams(url.search);
            // params.append("mail",`${user_db[i].mail}`);
            // params.append("password", `${user_db[i].password}`)
            // mail=${user_db[i].mail}password=${user_db[i].password}`;
            location.assign(url)
        }
        else
        {
            document.getElementById("ForgetpassFont").innerText = "Incorrect Credentials....";
            document.getElementById("ForgetpassFont").style.color = "red"

            setTimeout( function() {
                location.reload();
            } , 3000)
        }


    }



}