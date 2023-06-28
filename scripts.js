document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
  
    registrationForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Make a fetch request to register the user
      fetch('https://microblog-lite.herokuapp.com/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })
      .then(response => {
        if (response.ok) {
          alert('Registration successful. Please log in.');
          window.location.href = 'login.html'; // Redirect to the login page
        } else {
          throw new Error('Registration failed.');
        }
      })
      .catch(error => {
        console.error('Error during registration:', error);
        alert('Registration failed. Please try again.');
      });
    });
  });