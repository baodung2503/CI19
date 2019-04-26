const view = {};

view.setMessage = (elementId, message) => {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerText = message;
    }
}
view.setActiveScreen = () => {    
    // const app = document.getElementById('app');

    // if (app) {
    //     app.innerHTML = components.index;
    // }

    //Listen submit event
    const registerForm = document.getElementById('form-wrapper');

    if(registerForm) {
        const handleSubmit = (event) => {
            event.preventDefault(); //Cancel hanh dong mac dinh, khong tu refresh
            
            //get input values
            const firstName = registerForm.firstName.value;
            const lastName = registerForm.lastName.value;
            const email = registerForm.email.value;
            const password = registerForm.password.value;
            const confirmPassword = registerForm.confirmpassword.value;

            const registerInfo = {
                firstName,
                lastName,
                email,
                password,
                confirmPassword,
            }

            controller.validateRegisterForm(registerInfo);

            //Validate input
            if (!firstName) {
                view.setMessage('firstName-error-message', 'Please input first name');
            } 
            else {
                view.setMessage('firstName-error-message', '');
            }

            if (!lastName) {
                view.setMessage('lastName-error-message', 'Please input last name');
            } 
            else {
                view.setMessage('lastName-error-message', '');
            }

            //Validate email
            const emailRegex =/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
            if(emailRegex.test(email)) {
                view.setMessage('email-error-message', '');
            } else {
                view.setMessage('email-error-message', 'Invalid email address');
            }

            //validate password
            if (!password) {
                view.setMessage('password-error-message', 'Please input password');
            } else if (password.length < 6) {
                view.setMessage('password-error-message', 'Password must be greater than 6 characters');
            } else {
                view.setMessage('password-error-message', '');
            }

            if (!confirmPassword) {
                view.setMessage('confirm-error-message', 'Please confirm password');
            }
            else if(confirmPassword !== password) {
                view.setMessage('confirm-error-message', 'Confirm password didnt match');
            } else {
                view.setMessage('confirm-error-message',''); 
            }

        };
        registerForm.addEventListener('submit', handleSubmit);
    }
};