// Evento para el botón de Alto Contraste
document.getElementById('altoContraste').addEventListener('click', function() {
    document.body.classList.add('high-contrast');
   
    localStorage.setItem('theme', 'high-contrast');
});

// Evento para el botón de Estilo Normal
document.getElementById('estiloNormal').addEventListener('click', function() {
    document.body.classList.remove('high-contrast');
    localStorage.setItem('theme', 'normal');
});

// Evento para el envío del formulario
document.getElementById('personalForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    // Expresión regular para validar el email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Verifica si el email es válido
    if (!emailPattern.test(emailInput.value)) {
       
        emailError.style.display = 'inline';
    } else {
        emailError.style.display = 'none';
        document.getElementById('successMessage').style.display = 'block';
    }
});

// Evento que se ejecuta cuando el documento ha sido completamente cargado
document.addEventListener('DOMContentLoaded', function() {  
    const theme = localStorage.getItem('theme');
    if (theme === 'high-contrast') {
        document.body.classList.add('high-contrast');
    } else {
        document.body.classList.remove('high-contrast');
    }
});
