window.onscroll = function () { myFunction() };

var navbar = document.getElementById("nav");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function handleFormSubmit(event) {
  event.preventDefault();
  let fname = document.getElementsByName("fname")[0].value;
  let lname = document.getElementsByName("lname")[0].value;
  let message = document.getElementsByName("message")[0].value;
  let sendmail = document.getElementById("sendmail");
  sendmail.href = `mailto:19bcs1090@gmail.com?subject=Message%20From%20Portfolio&body=Hello%20Chanchal, %0D%0A %0D%0A ${message} %0D%0A %0D%0A Thanks, %0D%0A ${fname}%20${lname}`;
  sendmail.click();
}