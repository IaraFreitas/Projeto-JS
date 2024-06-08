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


function changeImageLugares() {

    const img = document.getElementById('lugares');

    const lugaresSrc = img.getAttribute('src');

    if (lugaresSrc === 'lugares-1-LuzStation.jpg') {
        img.setAttribute('src', 'lugares-2-masp.jpg');
        img.setAttribute('alt', 'lugaresTwo');
    }

    else {
        img.setAttribute('src', 'lugares-3-MercadaoSP.jpg');
        img.setAttribute('alt', 'lugaresThree');
    }

    
}

function changeImageCtoCultural() {

    const img = document.getElementById('cto-cultural');

    const ctoCulturalSrc = img.getAttribute('src');

    if (ctoCulturalSrc === 'cto-cultural-1-CCBB.jpg') {
        img.setAttribute('src', 'cto-Cultural-2-Vergueiro.jpg');
        img.setAttribute('alt', 'ctoCulturalTwo');
    }

    else {
        img.setAttribute('src', 'cto-cultural-3-sala-sp.jpg');
        img.setAttribute('alt', 'ctoCulturalThree');
    }
    
}

