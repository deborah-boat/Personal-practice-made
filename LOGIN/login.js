const pageBox = document.querySelector('.page-box');
const btnNext = document.querySelector('.btn-next');
const btnBack = document.querySelector('.btn-back');
const checkboxPass = document.querySelector('.checkbox-pass');
const passwordInput = document.querySelector('.password');
const loginTitle = document.querySelector('.loginTitle-text');
const userEmail = document.querySelector('.user-email');
const emailInput = document.querySelector('.email');

// I selected container__input
const sliderContainerInput = document.querySelector(".container__input");




btnNext.onclick = (e) => {
    e.preventDefault();
    pageBox.classList.add('active-pass');
 setTimeout(() => passwordInput.focus(),500);
 loginTitle.innerHTML = 'Welcome';
  // loginEmail.innerHTML = 'emailInput.value'; error
//   I translate a container__input to left
  sliderContainerInput.style.transform = "translateX(-100%)";
};

btnBack.onclick = (e) => {
    e.preventDefault();
    pageBox.classList.remove('active-pass');
     loginTitle.innerHTML = 'Login';
       // loginEmail.innerHTML = 'Please login to use the platform'; error
       emailInput.focus();
// it returns to its original position
  sliderContainerInput.style.transform = "translateX(0)";
    
};

checkboxPass.onclick = () => {
    if(checkboxPass.checked){
passwordInput.type = 'text';
    }
    else{
        passwordInput.type = 'password'
    }
}

