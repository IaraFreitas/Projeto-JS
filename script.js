function changeImageMuseum() {

    const img = document.getElementById('museums');

    const museumsSrc = img.getAttribute('src');

    if (museumsSrc === 'Museum-Portuguese-Language.avif') {
        img.setAttribute('src', 'Museum-AfroBrazil.jpg');
        img.setAttribute('alt', 'museumTwo');
    }

    else {
        img.setAttribute('src', 'Museum-Pinacoteca-SP.jpg');
        img.setAttribute('alt', 'museumThree');
    }
    
}


