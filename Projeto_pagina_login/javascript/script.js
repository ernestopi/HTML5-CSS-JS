const email = 'miguel.ernesto@gmail.com'


console.log('miguel.ernesto@gmail.com');

document.getElementById('btn-submit').addEventListener('click', e => {
    console.log('O botão foi clicado!');
});

document.getElementById('form-login').addEventListener('mouseenter', e => {
    console.log('O mouse está sobre o formulário.');
});

document.querySelector('#form-login').addEventListener('mouseleave', e => {
    console.log('O mouse está fora do formulário.');
});

document.querySelector('#form-login').addEventListener('submit', e => {
    e.preventDefault();
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    let json = {
        email,
        password
    };

    if (!json.email) {

        console.error("O campo e-mail deve ser preenchido!");

    }

    
});
