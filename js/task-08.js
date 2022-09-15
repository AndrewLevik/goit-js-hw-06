const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault()
    const {
        elements: { email, password },
    } = event.target

    if (email.value === '' || password.value === '') {
        return alert('Please enter the data in all fields')
    }
    const userDetails = { email: email.value, Password: password.value }
    
    console.log(userDetails);
    event.target.reset()
};
