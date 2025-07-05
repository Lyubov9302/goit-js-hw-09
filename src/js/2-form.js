
let formData = { email: "", message: "" }

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

form.addEventListener('input', event => {
    const { name, value} = event.target;

    formData[name] = value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
})


const savedData = localStorage.getItem(STORAGE_KEY);



if(savedData) {

    const parsedData = JSON.parse(savedData);


    emailInput.value = parsedData.email || '';
    messageInput.value = parsedData.message|| '';

    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
}

form.addEventListener('sumbit', event => {
    event.preventDefault();

    if(formData.email === '' || formData.message === '') {
        alert('Fill please all fields');
        return;
    }

    console.log(formData);
    

    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    formData.reset();

})







