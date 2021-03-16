


let validateMyData = () => {


    let name = document.getElementById("name").value;
    let mail = document.getElementById("mail").value;
    let pass = document.getElementById("pass").value;

    // console.log(name, mail, pass);


    if(name == "" || mail == "" || pass == "")
        alert("Please fill all input fields");

    else
    {
        if(checkMail(mail))
        {
            alert("This mail is already exist");
            location.assign("login.html")
        }

        else
        {

            if(validate(mail) == false)
            {
                document.getElementById("rushifont15").innerText = "Invalid Email address";
                document.getElementById("rushifont15").style.color = "red"
                document.getElementById("mail").value = null;
                document.getElementById("pass").value = null;
            }
            else
            {
            
                if(pass.length < 8)
                    alert("Enter your password of 8 digits")

                else
                {
                    document.getElementById("name").value = null
                    document.getElementById("mail").value = null;
                    document.getElementById("pass").value = null;
                    storeData(name, mail, pass);

                    setTimeout(function(){
                        let url = `after_login_1.html?name=${name}`
                        location.assign(url)
                    }, 2000)
                }
            }
        }
        

    }


}



function validateEmail(email)
{
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
  
function validate(email)
{
    
  
    if (validateEmail(email))
    {
        
        return true;
    } 

    else
    {
        
        return false;
    }
    return false;
}
  


function checkMail(email)
{
    let user_db = localStorage.getItem("lumen_5_users");

    if(user_db == null)
        return false;

    else
    {
        flag = 0;
        user_db = JSON.parse(user_db)

        for(index in user_db)
        {
            if(user_db[index].mail == email)
            {
                flag = 1;
                break;
            }
        }

        if(flag == 1)
            return true;
        
        else
            return false;

    }

}






let storeData = function(name, mail, pass)
{
    

    let user_data = {
        name: name,
        mail: mail,
        password: pass
    };

    

    let user_db = localStorage.getItem("lumen_5_users");
    let data_list = [];

    if(user_db != null)
    {
        data_list = JSON.parse(user_db);
    }

    data_list.push(user_data)
    

    localStorage.setItem("lumen_5_users", JSON.stringify(data_list));
}
