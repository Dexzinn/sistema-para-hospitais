var potinhos = document.getElementById('icon')


function menuClicar() {
    if(menu_medicos.style.display == 'block') {
        menu_medicos.style.display = 'none'
        potinhos.style.position = 'static';
    } else {
        menu_medicos.style.display = 'block'
        potinhos.style.position = 'absolute';
        potinhos.style.top = '80px';
        potinhos.style.left = '200px';
    }

}