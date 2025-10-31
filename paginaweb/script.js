// Espera a que todo el contenido del DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    
    console.log("¡Documento listo y script cargado!");

    // Ejemplo: Añadir un listener a todos los enlaces de navegación
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Previene la acción por defecto para mostrar el log
            // event.preventDefault(); 
            console.log(`Navegando a: ${link.href}`);
        });
    });

});