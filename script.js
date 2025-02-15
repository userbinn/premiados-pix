// Configuration object - Edit these values
const config = {
    instagramUsername: '@roger.abravanel', // Change this to your Instagram username
    instagramLink: 'https://sv-benz-shepherd-commitments.trycloudflare.com', // Change this to your Instagram profile URL
};

// Update Instagram username in the profile section
document.getElementById('instagram-username').textContent = config.instagramUsername;

// Set Instagram button link
document.getElementById('instagram-button').href = config.instagramLink;

// Form submission handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value
    };
    
    // Here you can add code to handle the form submission
    // For example, send the data to your server or save it locally
    console.log('Form submitted:', formData);
    
    // Optional: Show success message
    alert('Dados enviados com sucesso! Siga nosso perfil no Instagram para receber seu PIX!');
});
