// javasciript menambahkan nama
var name = prompt("Masukkan Nama Kamu:");
document.getElementById("your-name").innerText = name;

// javascript image slide
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
  showDivs((slideIndex += n));
}

function showDivs(n){
  var i;
  var imgList = document.getElementsByClassName("img-slideshow");
  if (n > imgList.length) slideIndex = 1;
  else if (n < 1) slideIndex = imgList.length;

  for(i = 0; i < imgList.length; i++) {
    imgList[i].style.display = "none" ;
  }

  imgList[slideIndex - 1].style.display = "block" ;
  }

// javascriot validasi form
  function validateForm(){
    var name= document.forms["message-form"]["your-name"].value;
    var birthday= document.forms["message-form"]["your-birthday"].value;
    var gender= document.forms["message-form"]["your-gender"].value;
    var message= document.forms["message-form"]["your-message"].value;

    document.getElementById("sender-name").innerText = name;
    document.getElementById("sender-birthday").innerText = birthday;
    document.getElementById("sender-gender").innerText = gender;
    document.getElementById("sender-message").innerText = message;
    return false;
  }
