document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const loginSection = document.getElementById('login-section');
    const contentSection = document.getElementById('content-section');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'nombredeusuario' && password === 'contraseña') {
            loginSection.style.display = 'none';
            contentSection.style.display = 'block'; // Mostrar contenido después del login
        } else {
            alert('Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
        }
    });

    // Modal functionality for images
    var modal = document.getElementById('modal');
    var modalImg = document.getElementById('modal-img');
    var closeBtn = document.getElementsByClassName('close')[0];

    document.querySelectorAll('.gallery img').forEach(function(img) {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
        });
    });

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    modal.onclick = function() {
        modal.style.display = 'none';
    }
});