function changeImage() {
    const img = document.getElementById('myImage');
    const currentSrc = img.getAttribute('src');

    if(currentSrc ==='1.jpg') {
        img.setAttribute('src', '2.jpg');
        img.setAttribute('alt', 'foto2');
    } else {
        img.setAttribute('src', '3.jpg');
        img.setAttribute('src', 'foto3');
    }


}