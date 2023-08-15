// Click a Submit Button
document.getElementById('submit-btn').addEventListener('click', function(){
   // Add a Email Input text Email and Password
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;

    if(email === 'rabbani@gmail.com' && password === 'rabbani'){
        console.log ("tor Baaper Taka")
    }
    else{
        console.log('K re vai tui tore tw cinlam nah')
    }

})