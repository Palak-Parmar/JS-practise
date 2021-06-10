//1.forms 


//   console.log(form.username.value);
// });

// 2. regular expressions 

// const username= "parmar";
// const pattern= /[a-z]{6,}/;
// let result = pattern.test(username);
// console.log(result);

// 3. basic form validation
const form = document.querySelector('.signup-form');
const feedback= document.querySelector('.feedback');
const username = form.username.value; 
const usernamePattern= /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit',e=>{
  e.preventDefault();
if(usernamePattern.test(username))
{
    feedback.textContent="yess";
}
else
{
    feedback.textContent="no";
}
});

//4.keyboard events 

const success = document.querySelector('.success');

form.username.addEventListener('keyup', e=>{
if(usernamePattern.test(e.target.value)){
  form.username.setAttribute('class', 'success');
}
else{
  form.username.setAttribute('class','error');
}
});
