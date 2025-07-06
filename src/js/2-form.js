
// 1

let formData = { email: "", message: "" };

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

// 2

form.addEventListener('input', event => {
    const {name, value} = event.target;

    formData[name] = value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
})


const savedData = localStorage.getItem(STORAGE_KEY);


// 3
if(savedData) {

    const parsedData = JSON.parse(savedData);


    emailInput.value = parsedData.email || '';
    messageInput.value = parsedData.message|| '';

    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
}


// 4

form.addEventListener('submit', event => {
    event.preventDefault();

    if(formData.email === '' || formData.message === '') {
        alert("Fill please all fields");
        return;
    }

    console.log(formData);
    

  localStorage.removeItem(STORAGE_KEY);
  form.reset();

  formData.email = '';
  formData.message = '';
   
})







