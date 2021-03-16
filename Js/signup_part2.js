var video = document.querySelectorAll("video");

video.forEach((video) => {
  video.addEventListener("mouseover", function () {
    this.play();
  });
  video.addEventListener("mouseout", function () {
    this.load();
  });
});


let url = new URL(window.location.href)
let params = new URLSearchParams(url.search)
var name = params.get("name")
console.log(name);
document.getElementById("display_me").textContent = name;





// let logoutMe = function()
// {
//     let response = confirm("Want to logout ?")

//     if(response)
//         location.assign("index.html");
    


// }