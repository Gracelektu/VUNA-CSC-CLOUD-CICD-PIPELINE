document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const matricNumber = document.getElementById('matric-number').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    if (name && matricNumber && cardNumber && expiryDate && cvv) {
        alert('Payment Successful!');
    } else {
        alert('Please fill in all fields.');
    }
});
