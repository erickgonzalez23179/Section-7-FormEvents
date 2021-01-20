const form = document.querySelector(`.signup-form`);
const feedback = document.querySelector(`.feedback`)
// const username = document.querySelector(`#username`);

form.addEventListener(`submit`, e => {
  e.preventDefault();
  
  const username = form.username.value;
  const usernamePattern = /^[a-zA-Z]{6,12}$/;

  if(usernamePattern.test(username)){
    feedback.textContent = `That username is valid`
  } else {
    feedback.textContent = `username must contain letters only and be between 6 and 12 characters`
  }

})
