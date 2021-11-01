$(document).ready(function() {
    let letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    let letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numeros = '0123456789';
    let caracteresEspeciais = '!@#$%¨&*()_+-=[]{}|;:,.<>/?';


    // input range get value
    $('input[type="range"]').on('input', function() {
        $('#tamanho').text($(this).val());
    });

    $('#btn').on('click', function() {

        let tamanho = $('input[type="range"]').val();

        let maiscula = $('#maiuscula').is(':checked');
        let minuscula = $('#minuscula').is(':checked');
        let numero = $('#numero').is(':checked');
        let caracterEspecial = $('#simbolo').is(':checked');

        if (!maiscula && !minuscula && !numero && !caracterEspecial) {
            alert('Selecione pelo menos um tipo de caractere');
            return;
        }

        gerarSenha(tamanho, maiscula, minuscula, numero, caracterEspecial);


    });


    function gerarSenha(tam, mai, min, num, car) {
        let senha = '';
        let vazio = '';

        if (mai) {
            senha += letrasMaiusculas;
        }
        if (min) {
            senha += letrasMinusculas;
        }
        if (num) {

            senha += numeros;
        }
        if (car) {

            senha += caracteresEspeciais;
        }

        for (let index = 0; index < tam; index++) {
            vazio += senha.charAt(Math.floor(Math.random() * senha.length));
        }
        $('#senha').html(`<p class="paraCopiar">${vazio}</p>`);
        $('#senha').addClass('copiar');

        copiar();
    }

    function copiar() {

        document.querySelector('.copiar').addEventListener('click', function() {
            const texto = document.querySelector('.paraCopiar');
            const cb = navigator.clipboard;

            cb.writeText(texto.textContent).then(() => {
                $('.alert').show();
                setTimeout(function() {
                    $('.alert').hide();
                }, 2000);
            });
        });



    }


});