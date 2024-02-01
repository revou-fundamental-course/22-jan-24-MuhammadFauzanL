let slideIndex = 0;
const slides = document.querySelectorAll('.slider');

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.display = 'block';
    setTimeout(showSlides, 2000); 
}
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    const interest = document.getElementById('interest').value;
    const deliveryAddress = document.getElementById('delivery-address').value.trim();
    const paymentMethod = document.getElementById('payment-method').value;
    const secure = document.getElementById('secure').checked;

    if (name === '' || email === '' || phone === '' || message === '' || interest === 'anything' ||
        deliveryAddress === '' || paymentMethod === '' || !secure) {
        alert('Please fill out all fields and select valid options.');
        return;
    }

    
    alert('The form has been successfully saved!');
});


showSlides();
