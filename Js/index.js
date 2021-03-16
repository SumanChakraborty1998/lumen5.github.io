



var video = document.querySelectorAll("video");
  
video.forEach((video) => {
    video.addEventListener("mouseover", function () {
    this.play();
    });
    video.addEventListener("mouseout", function () {
    this.pause();
    });
});

function toggel() {
    video.classList.toggel("active");
    video.pause();
    video.currentTime = 0;
}

window.document.onkeydown = function (e) {
    if (!e) {
        e = event;
    }
    if (e.keyCode == 27) {
        lightbox_close();
    }
}

function lightbox_open() {
    var lightBoxVideo = document.getElementById("VisaChipCardVideo");
    window.scrollTo(0, 0);
    document.getElementById('light').style.display = 'block';
    document.getElementById('fade').style.display = 'block';
    lightBoxVideo.play();
}

function lightbox_close() {
    var lightBoxVideo = document.getElementById("VisaChipCardVideo");
    document.getElementById('light').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
    lightBoxVideo.pause();
}



document.querySelector("")

function redirectMeToSignUp()
{
    location.assign("signup.html")
}





// mangesh 6 th part


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("class2");
  if (n > x.length) {
    slideIndex = 1;
  }
  console.log(x, n);
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "flex";
}


//mangesh 6 part end

