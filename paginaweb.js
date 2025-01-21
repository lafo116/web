document.addEventListener('DOMContentLoaded', function() {
    const infoButton = document.getElementById('infoButton');
    const infoText = document.getElementById('infoText');

    infoButton.addEventListener('click', function() {
        infoText.style.display = 'block';
    });
});