const form = document.querySelector(`.signup-form`);
const feedback = document.querySelector(`.feedback`)
const usernamePattern = /^[a-zA-Z]{6,12}$/;
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

form.username.addEventListener(`keyup`, e => {
  console.log(e)
  // console.log(e.target.value, form.username.value)
  if(usernamePattern.test(e.target.value)){
    form.username.setAttribute(`class`, `success`)
  } else {
    form.username.setAttribute(`class`, `error`)
  }
});