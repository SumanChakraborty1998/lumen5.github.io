document.querySelector("login").addEventListener('click', user)
function user(){
    var user=document.querySelector("#logindetails")
    let userobj= localStorage.getItem('lumen_5_users')
    let newuser= JSON.parse(userobj)

    var span1= document.createElement('span')
    span1.textContent=newuser.name
    span1.classList.add('')

    user.appendChild(span1)
}


document.querySelector("#logindetails").addEventListener("click", creatediv)
function creatediv(){
    console.log("deepk")
    let div=document.querySelector("#logout")
    div.classList.toggle("hidee")
}