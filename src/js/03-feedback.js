import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';


form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSubmit);

initPage();

function onInputData(evt) {
    const saveData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    saveData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saveData));
    console.log(saveData);
}

function initPage() {
    const saveData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saveData) {
        Object.entries(saveData).forEach(([name, value]) => {
        form.elements[name].value = value;
        });
    }
}

function onFormSubmit(evt) {
    evt.preventDefault();
    const userData = {};
    const formData = new FormData(form);
    formData.forEach((value, name) => userData[name] = value);
    console.log(userData);
    localStorage.removeItem(STORAGE_KEY);
    evt.target.reset();
}



