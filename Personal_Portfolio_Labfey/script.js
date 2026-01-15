document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    
    if (name) {
        alert(`Thank you for reaching out, ${name}! I will get back to you soon.`);
        this.reset();
    } else {
        alert("Please fill out the form.");
    }
});