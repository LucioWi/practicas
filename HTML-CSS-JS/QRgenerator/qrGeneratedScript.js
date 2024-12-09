const queryParams = new URLSearchParams(window.location.search);
const url = queryParams.get('url');

if (url) {
    // Valida que sea una URL válida
    const urlPattern = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-]*)*$/;
    if (urlPattern.test(url)) {
        // Genera el QR
        new QRCode(document.getElementById('qrCode'), {
            text: url,
            width: 200,
            height: 200,
        });
    } else {
        document.body.innerHTML = '<p>Invalid URL. Please go back and try again.</p>';
    }
} else {
    document.body.innerHTML = '<p>No URL provided. Please go back and try again.</p>';
}