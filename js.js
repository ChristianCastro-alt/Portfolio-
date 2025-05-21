document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formResponse').textContent = 'Thank you for your message!';
    this.reset();
  });

 