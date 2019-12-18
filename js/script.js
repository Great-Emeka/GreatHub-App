/*==============================================================================
                                STATS
===============================================================================*/
$(function(){
    $(".counter").counterUp({
        delay: 1,
        time: 3000
    });
});

/*==============================================================================
                                TESTIMONIALS
===============================================================================*/
$(function(){
    $("#users-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoPlayHoverPause: true
    });
});


const signUpButton = document.getElementById('signUpBtn');
const loginButton = document.getElementById('loginBtn');
const signUpForm = document.getElementsByClassName('signup');
const loginForm = document.getElementsByClassName('login');

signUpButton.addEventListener('click', () => {
  for(let i = 0; i < loginForm.length; i++){
  loginForm[i].classList.add("hidden");
  }
  for(let i = 0; i < signUpForm.length; i++){
    signUpForm[i].classList.add("visible");
  }
});

loginButton.addEventListener('click', () => {
  for(let i = 0; i < loginForm.length; i++){
    loginForm[i].classList.remove("hidden");
  }
  for(let i = 0; i < signUpForm.length; i++){
    signUpForm[i].classList.remove("visible");
  }
});