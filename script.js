function changeImage1() {
    
    const img = document.getElementById('myImage1');
   
    const currentSrc = img.getAttribute('src');

    if (currentSrc === '1.jpg') {
        img.setAttribute('src', 'PROJETO-JS/2.jpg');
        img.setAttribute('alt', 'foto2');
    } else {
        img.setAttribute('src', 'PROJETO-JS/1.jpg');
        img.setAttribute('src', 'foto1');
    }


}