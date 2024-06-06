// script.js
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    console.log('Formulário enviado:', name, email, phone);
    alert('Obrigado por se inscrever, ' + name + '! Entraremos em contato em breve.');

    // Aqui, você pode adicionar código para enviar os dados para um servidor via AJAX, se necessário
});
