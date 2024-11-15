document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('booking-form');
    const demo = document.getElementById('demo');

    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const service = document.getElementById('service').value;
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const message = document.getElementById('message').value;

        // Display confirmation message in the demo element
        demo.innerHTML = `
            <h3>Appointment Confirmed!</h3>
            <p>Thank you, ${name}. Your appointment for ${service} has been booked on ${date} at ${time}.</p>
            <p>Additional Requests: ${message || 'None'}</p>
        `;
        demo.classList.remove('hidden');

        // Reset the form
        bookingForm.reset();
    });
});
