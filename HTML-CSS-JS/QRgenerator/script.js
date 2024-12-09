document.getElementById('qr-form').addEventListener('submit', function (event) {
    const urlInput = document.getElementById('input-url').value;
    const urlPattern = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-]*)*$/;

    if (!urlPattern.test(urlInput)) {
        event.preventDefault();
        alert('Invalid URL, please try again.');
    }
});